$(document).on('submit', '#login-form', function(evt) {
  evt.preventDefault();
  $.post(
    '/login',
    helpers.getFormData(this)
  ).done(function(response) {
    currentUser = response.user;
    loadHomePage();
  }).fail(function(jqxhr) {
	  console.log('FAILS');
    var response = $.parseJSON(jqxhr.responseText);
    loadPage('login', {error: response.err});
  });
});

$(document).on('submit', '#signup-form', function(evt) {
  evt.preventDefault();
  var formData = helpers.getFormData(this);
  if (formData.password !== formData.confirm) {
    $('.error').text('Password and confirmation do not match!');
    return;
  }
  delete formData['confirm'];
  $.post(
    '/signup',
    formData
  ).done(function(response) {
	  console.log(response);
    loadHomePage();
  }).fail(function(jqxhr) {
    var response = $.parseJSON(jqxhr.responseText);
    loadPage('register', {error: response.err});
  });
});

$(document).on('click', '#logout', function(evt) {
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