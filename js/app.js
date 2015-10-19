$(document).ready(function() {

//add list items
  $('#append').click(function(){
    var txtentry = document.getElementById('task');
    var txttask = txtentry.value;
    event.preventDefault();

    $('<li></li>').appendTo('#list').html('<div class="control"><div class="fa fa-square-o" style="visibility:visible; display:"></div><div class="fa fa-check-square-o" style="visibility:hidden"></div></div><div class="fa fa-minus-square"></div><div class="item">' + txttask + '</div>');
  });

//delete list items
 $('#list').on('click', '.fa-minus-square', function(e){
  e.preventDefault();
    $(this).parent().remove(); 
  });

//toggle add and remove controls
 $('rmtask').click(function() {
    $('ycheck').toggle();
    $('nocheck').toggle();
    alert('Did they toggle?');
}); 

});
