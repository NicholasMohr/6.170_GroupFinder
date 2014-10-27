$document.on('click', '.edit-info'){
	//open up the slider/text box to input your new info
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
  $.post(
    '/' + currentUser.username + '/' + id,
    {content: content}
  ).done(function(response) {
    item.after(Handlebars.templates['secret']({
      _id: id,
      content: content
    }));
    item.prev().remove();
    item.remove();
  }).fail(function(jqxhr) {
    alert('An unknown error occurred.');
  });
});