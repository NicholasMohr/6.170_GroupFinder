$(document).on('click', '.join-project-request', function(evt) {
  loadPage('join-project',$.extend());
});

$(document).on('click', '.join-project-submit', function(evt) {
  console.log("clicked!");
  var proj_name = evt.target.id;
  $.get('/projects/'+proj_name +'', function(project) {
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

$(document).on('submit', '.projectFilter', function(evt) {
  var datas = {};
  $(".weight").each(function(index){
    var name = $(this).data('name');
    //FIXTHIS THIS IS WHERE YOU're working
    console.log($(this).val());
    datas[name] = $(this).val()*3/20 + .5;
  });
  console.log(datas);
  $.ajax({
      url: '/projects/'+ currentProject + '/users/filter',
      type: 'GET',
      data: datas, 
      success: function(users) {
        console.log("success")
        console.log(users);

        var actualUsers = [];
        for (user in users){
          if(users[user].user.authentication.username !== currentUser.authentication.username){
            actualUsers.push(users[user].user);
          }
        }
        $.get('/projects/'+currentProject, function(project) {
          loadPage(
          'projects',
          $.extend(
            {info: currentUser.info},
            {currentUser: currentUser.authentication.username},
            {users: actualUsers},
            {name: currentProject},
            {project: project}
            )
          );
        });
      }
  });
});


$(document).on('click', '.visit-project', function(evt) {
  //open up the slider/text box to input your new info
  var proj_name = evt.target.id;
  $.get('/projects/'+proj_name, function(project) {
    loadProjectPage(proj_name);
  });
});

$(document).on('click', '.new-project', function(evt) {
  loadPage('new-project',$.extend());
});

$(document).on('click', '.new-project-create', function(evt) {
  var datas = {}
  $(".new-proj-info").each(function(index){
    var infoName = $(this).data('info-id')
      datas[infoName] = $(this).find('input').val()
  });
  $.post(
    '/projects/', datas
  ).done(function(response) {
    loadUserPage();
  })
});

var loadProjectPage = function(name) {
  currentProject = name
  $.get('/projects/'+name+'/users', function(users) {
    $.get('/projects/'+name, function(project) {
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
