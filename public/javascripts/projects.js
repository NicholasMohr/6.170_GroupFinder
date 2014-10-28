$(document).on('click', '.join-project', function(evt) {
  //open up the slider/text box to input your new info
  console.log('project page request click');
  var item = $(this).parent();
  var name = item.find('p').text()
  loadProjectPage(name);
});

var loadProjectPage = function(name) {
  $.get('/projects/'+name+'/users', function(users) {
    console.log('users');
    console.log(users);
    loadPage(
    'projects',
    $.extend(
      {},//TODO: Check if these are needed?
      {info: currentUser.info},
      {currentUser: currentUser.authentication.username},
      {users: users},
      {name: name}
      )
    );
  });      
};