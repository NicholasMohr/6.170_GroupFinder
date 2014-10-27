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
  $.get('/users', function(response) {
//TODO: USER HOME PAGE
  });
};
