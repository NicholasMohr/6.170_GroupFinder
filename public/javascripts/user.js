//all written by Nick
$(document).on('click', '.user-page', function(evt) {
  loadUserPage();
});

$(document).on('click', '.info-page', function(evt) {
  loadUserInfoPage();
});

$(document).on('click', '.user-page', function(evt) {
  loadNewProjectPage();
});

$(document).on('click', '.save-info', function(evt) {
  var datas = {}
  $(".info").each(function(index){
    var infoName = $(this).data('info-id')
    if (infoName === 'availability') {
      var availability = []
      $("input:checked").each(function (index) {
          availability.push($(this).val());
      });
      datas[infoName] = availability;
    } else if (infoName === 'skills') {
      datas[infoName] = $(this).find('textarea').val().split(",")
    } else if (infoName === 'timing') {
      datas[infoName] = $(this).find('input').val()/10
    } else {
      datas[infoName] = $(this).find('input').val();
    }
  });
  console.log(datas);
  $.ajax({
      url: '/users',
      type: 'PUT',
      data: datas, 
      success: function(user) {
        currentUser.info = user.info
        $.get('/projects', function(allProjects) {
          loadUserPage();
        })
      }
  });
});
