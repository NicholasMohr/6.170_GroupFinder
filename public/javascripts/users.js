$(document).on('submit', '#login-form', function(evt) {
  evt.preventDefault();
  $.post(
    '/login',
    helpers.getFormData(this)
  ).done(function(response) {
    currentUser = response;
    loadHomePage();
  }).fail(function(jqxhr) {
	  $('.error').text('Password or username is invalid');
	  loadPage('login', {error: 'Password or username is invalid'});
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
    loadHomePage();
  }).fail(function(jqxhr) {
	$('.error').text('That username already exists. Please try again');
    loadPage('register', {error: 'That username already exists. Please try again'});
  });
});



