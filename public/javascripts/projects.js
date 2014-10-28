$(document).on('click', '.join-project', function(evt) {
  //open up the slider/text box to input your new info
  var item = $(this).parent();
  var name = item.find('p').text()
  loadProjectPage(name);
});

var loadProjectPage = function(name) {
  $.get('/projects/'+name+'/users', function(users) {
    $.get('/projects/'+name, function(project) {
      console.log(users);
      console.log(project);
      loadPage(
      'projects',
      $.extend(
        {},//TODO: Check if these are needed?
        {info: currentUser.info},
        {currentUser: currentUser.authentication.username},
        {users: users},
        {name: name},
        {project: project}
        )
      );
    });
  });      
};