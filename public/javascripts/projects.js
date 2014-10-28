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
/*
$(document).on('submit', '.projectFilter', function(evt) {
  var datas = {};
  $(".info").each(function(index){
    var infoName = $(this).data('info-id');
    //FIXTHIS THIS IS WHERE YOU're working
    datas[infoName] = $(this).find('input').val()/5 + .5;
  });
});
*/

$(document).on('click', '.visit-project', function(evt) {
  //open up the slider/text box to input your new info
  var proj_name = evt.target.id;
  $.get('/projects/'+proj_name, function(project) {
    loadProjectPage(proj_name);
  });
});

$(document).on('click', '.new-project', function(evt) {
  loadNewProjectPage();
});

$(document).on('click', '.new-project-create', function(evt) {
  var datas = {}
  $(".new-proj-info").each(function(index){
    var infoName = $(this).data('info-id')
      console.log($(this).find('input').val());
      datas[infoName] = $(this).find('input').val()
  });
  console.log(datas);
  $.post(
    '/projects/', datas
  ).done(function(response) {
    loadUserPage();
  }).fail(function(jqxhr) {
    console.log('something went wrong');
  });
});

var loadNewProjectPage = function() {
  console.log('reloading new project page');
  loadPage('new-project',$.extend());
};

var loadProjectPage = function(name) {
  console.log('loading project page');
  $.get('/projects/'+name+'/users', function(users) {
    $.get('/projects/'+name, function(project) {
      console.log(users);
      console.log(project);
      loadPage(
      'projects',
      $.extend(
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
