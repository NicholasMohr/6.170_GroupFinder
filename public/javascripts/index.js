currentUser = undefined;

//Handlebars.registerPartial('login', Handlebars.templates['login']);
//Handlebars.registerPartial('signup', Handlebars.templates['signup']);

$(document).ready(function() {
  $.get('/users', function(response) {
    if (response.content.loggedIn) {
      currentUser = response.content.user;
    }
    loadHomePage();
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
    loadUserInfoPage();
  } else {
    loadPage('index');
  }
};


var loadUserInfoPage = function(additional) {
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
};
var loadUserPage = function(additional) {
  $.get('/projects', function(allProjects) {
    loadPage(
    'user',
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
};

