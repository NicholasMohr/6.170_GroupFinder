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

$(document).ready(function() {
  $.get('/users', function(response) {
    if (response.content.loggedIn) {
      currentUser = response.content.user;
    }
    loadUserInfoPage();
  });
});

$(document).on('click', '#home-link', function(evt) {
  evt.preventDefault();
  loadHomePage();
});

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

$(document).on('click', '#login-btn', function(evt) {
  loadPage('login');
});

$(document).on('click', '#signup-btn', function(evt) {
  loadPage('signup');
});

loadPage = function(template, data) {
  data = data || {};
  $('#main-container').html(Handlebars.templates[template](data));
};

var loadHomePage = function() {
  if (currentUser) {
    loadUserPage();
  } else {
    loadPage('index');
  }
};


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