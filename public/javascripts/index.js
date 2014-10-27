currentUser = undefined;

//Handlebars.registerPartial('login', Handlebars.templates['login']);
//Handlebars.registerPartial('signup', Handlebars.templates['signup']);

$(document).ready(function() {
  $.get('/users', function(response) {
    if (response.content.loggedIn) {
      currentUser = response.content.user;
	  console.log(currentUser);
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
  console.log("logging out");
  $.post(
    '/logout'
  ).done(function(response) {
    currentUser = undefined;
	console.log(response);
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

$(document).on('click', '#logout-btn', function(evt) {
  evt.preventDefault();
  $.post(
    '/logout'
  ).done(function(response) {
    currentUser = undefined; 
    loadHomePage();
  }).fail(function(jqxhr) {
	  console.log('FAIL');
    loadUsersPage({error: 'Failed to log out'});
  });
});

var loadPage = function(template, data) {
  data = data || {};
  console.log(data);
  console.log(currentUser);
  $('#main-container').html(Handlebars.templates[template](data));
};

var loadHomePage = function() {
	console.log('LOAD PLEASE');
  if (currentUser) {
    loadUserPage();
  } else {
    loadPage('index');
  }
};

var loadUserPage = function(additional) {
  console.log('USER PAGE');
  $.get('/projects', function(projects) {
    $.get('/users/' + currentUser.username, function(info){
      //TODO: Fix that it says currentUser here, it should prol be something else
      loadPage(
        'user',
        $.extend(
          {},//TODO: Check if these are needed?
          {infos: info},
          {projects: projects},
          {currentUser: currentUser},
          additional //TODO: Also check if this is needed
          )
        )
    });
  });
};