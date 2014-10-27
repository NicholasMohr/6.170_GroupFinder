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

$(document).on('click', '#login-btn', function(evt) {
  loadPage('login');
});

$(document).on('click', '#signup-btn', function(evt) {
  loadPage('signup');
});

var loadPage = function(template, data) {
  data = data || {};
  $('#main-container').html(Handlebars.templates[template](data));
};

var loadHomePage = function() {
  if (currentUser) {
	console.log(currentUser);
    loadUserPage();
  } else {
    loadPage('index');
  }
};

var loadUserPage = function() {
	console.log('USER PAGE');
  $.get('/users/projects', function(response) {
//TODO: USER HOME PAGE
  });
};
