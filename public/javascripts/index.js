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

var loadPage = function(template, data) {
  data = data || {};
  console.log(data);
  console.log(currentUser);
  $('#main-container').html(Handlebars.templates[template](data));
};

var loadHomePage = function() {
  if (currentUser) {
    loadUserPage();
  } else {
    loadPage('index');
  }
};


var loadUserPage = function() {
  console.log('USER PAGE');
        loadPage(
        'user',
        $.extend(
          {},//TODO: Check if these are needed?
          {info: currentUser.info},
          {projects: currentUser.projects},
          {currentUser: currentUser.authentication.username}//,
         // additional//TODO: Also check if this is needed
          )
        );
};

