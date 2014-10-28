$(document).on('click', '.join-project', function(evt) {
  //open up the slider/text box to input your new info
  var proj_name = evt.target.id;
  $.get('/projects/'+proj_name, function(project) {
    $.post('/projects/'+proj_name+'/users/', {
      proj_id: project._id,
      desired_grade: 3,
      interaction: 3,
      timing: 3
    }).done(function(response) {
      loadProjectPage(proj_name);
    }).fail(function(jqxhr) {
      loadHomePage();
    });
  });
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