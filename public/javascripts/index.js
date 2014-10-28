currentUser = undefined;

//Handlebars.registerPartial('login', Handlebars.templates['login']);
//Handlebars.registerPartial('signup', Handlebars.templates['signup']);
Handlebars.registerPartial('modal', Handlebars.templates['modal']);


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
  console.log('logout');
  $.post(
    '/logout'
  ).done(function(response) {
    currentUser = undefined;
    loadHomePage();
  }).fail(function(jqxhr) {
	  console.log('fail');
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
    console.log("got in here1")
    loadUserPage();
  } else {
    loadPage('index');
  }
};


var loadUserInfoPage = function(additional) {
  if (currentUser) {
    console.log("got in here")
  
    $.get('/projects', function(allProjects) {
      loadPage(
      'user-info',
      $.extend(
        {},//TODO: Check if these are needed?
        {info: currentUser.info},
        {allProjects: allProjects},
        {userProjects: currentUser.projects},
        {currentUser: currentUser.authentication.username},
        additional//TODO: Also check if this is needed
        )
      );
    });   
  } else {
    loadPage('index');
  }   
};
var loadUserPage = function(additional) {
  $.get('/projects', function(allProjects) {
    $.get('/users/'+currentUser.authentication.username+'/projects', function(userProjects) {
      console.log(userProjects);
      loadPage(
      'user',
      $.extend(
        {currentUser: currentUser.authentication.username},
        {info: currentUser.info},
        {allProjects: allProjects},
        {userProjects: userProjects},
        additional
        )
      );
    });
  });      
};

