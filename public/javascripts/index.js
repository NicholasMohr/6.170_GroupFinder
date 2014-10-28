currentUser = undefined;

Handlebars.registerPartial('modal', Handlebars.templates['modal']);

Handlebars.registerHelper("date", function(datetime) {
  var monthNames = [ "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December" ];
  var date = new Date(datetime);
  var formatted = + date.getDate() + " " + monthNames[date.getMonth()] + " " + date.getFullYear();
  return formatted;
});

Handlebars.registerHelper('ifIn', function(elem, list, options) {
  if(list.indexOf(elem) > -1) {
    return 'member';
  } else {
    return options.fn(this);
  }
});

//written by Marissa
$(document).ready(function() {
  $.get('/users', function(response) {
    if (response.content.loggedIn) {
      currentUser = response.content.user;
    }
    loadUserInfoPage();
  });
});

//written by Marissa
$(document).on('click', '#home-link', function(evt) {
  evt.preventDefault();
  loadHomePage();
});

//written by Marissa
$(document).on('click', '#logout-link', function(evt) {
  evt.preventDefault();
  $.post(
    '/logout'
  ).done(function(response) {
    currentUser = undefined;
    loadHomePage();
  }).fail(function(jqxhr) {
    var response = $.parseJSON(jqxhr.responseText);
    loadUsersPage({error: response.err});
  });
});

//written by Marissa
$(document).on('click', '#login-btn', function(evt) {
  loadPage('login');
});

//written by Marissa
$(document).on('click', '#signup-btn', function(evt) {
  loadPage('signup');
});

//written by Marissa
loadPage = function(template, data) {
  data = data || {};
  $('#main-container').html(Handlebars.templates[template](data));
};

//written by Marissa
var loadHomePage = function() {
  if (currentUser) {
    loadUserPage();
  } else {
    loadPage('index');
  }
};

//written by Nick
var loadUserInfoPage = function(additional) {
  if (currentUser) {  
    infos = {};
    for (index in currentUser.info){
      if(index !== "timing"){
        infos[index] = currentUser.info[index];
      }else{
        infos[index] = currentUser.info[index]*10
      }
    }
    console.log(currentUser.info.timing)
    $.get('/projects', function(allProjects) {
      loadPage(
      'user-info',
      $.extend(
        {},//TODO: Check if these are needed?
        {info: infos},
        {allProjects: allProjects},
        {userProjects: currentUser.projects},
        {currentUser: currentUser.authentication.username},
        additional//TODO: Also check if this is needed
        )
      );
    });
    //currentUser.info.timing /= 10;
  } else {
    loadPage('index');
  }   
};
//written by Danielle
var loadUserPage = function(additional) {
  $.get('/projects', function(allProjects) {
    $.get('/users/'+currentUser.authentication.username+'/projects', function(userProjects) {
      loadPage(
      'user',
      $.extend(
        {currentUser: currentUser.authentication.username},
        {user_id: currentUser._id},
        {info: currentUser.info},
        {allProjects: allProjects},
        {userProjects: userProjects},
        additional
        )
      );
    });
  });      
};