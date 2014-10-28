/*
$(document).on('click', '.edit-info', function(evt) {
	//open up the slider/text box to input your new info
	console.log("edit button clicked");
	var item = $(this).parent();
	item.after(Handlebars.templates['edit-info']({
	  id: item.data('info-id'),
	  existingInfo: item.find('p').text()
	}));
	item.hide();
});

$(document).on('click', '.reset-button', function(evt) {
  var item = $(this).parent();
  item.prev().show();
  item.remove();
});

$(document).on('click', '.edit-button', function(evt) {
  var item = $(this).parent();
  var id = item.data('info-id');
  var content = item.find('input').val();
  if (content.trim().length === 0) {
    alert('Input must not be empty');
    return;
  }
  
  $.ajax({
      url: '/script.cgi',
      type: 'DELETE',
      success: function(result) {
          // Do something with the result
      }
  });
  $.post(
    '/users/',
    {content: content}
  ).done(function(response) {
    item.after('<div data-info-id="' + content + '">
    Skills: <p>{{info.' + content + '}}</p>  <a href="#" class="edit-info"></a>
  </div>')

    item.prev().remove();
    item.remove();
  }).fail(function(jqxhr) {
    alert('An unknown error occurred.');
  });
});
*/
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
    if(infoName === 'availability' || infoName === 'skills'){
      datas[infoName] = $(this).find('input').val().split(",")
    } else if(infoName === 'timing'){
      datas[infoName] = $(this).find('input').val()/10
    } else{
      datas[infoName] = $(this).find('input').val();
    }
  });
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
