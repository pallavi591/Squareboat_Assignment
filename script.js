// "use strict";
$(document).ready(function() {
   
//code for action-items
    $('.format-btn').click(function(){    
        // alert("ok");    
        var ele=$(this);        
        ele.parent().siblings('.chat-action-container').fadeToggle(500);
    })
//code for tab-line
    var $el, leftPos, newWidth;
$("#tab-ul").append("<li id='tab-line'></li>");
var $underLine = $("#tab-line");
// debugger;
$underLine
  .width($(".active").width())
  .css("left", $(".active a").position().left)
  .data("originLeft", $underLine.position().left)
  .data("originWidth",( $underLine.width()));

$("#tab-ul li")
  .find("a")
  .hover(
    function() {
      $el = $(this);
      leftPos = $el.position().left;
      newWidth = $el.parent().width();
// alert("me");
      $underLine.stop().animate({
        left: leftPos,
        width: newWidth
      });
    },
    function() {
    //  debugger;
        $underLine.stop().animate({
        left: $underLine.data("originLeft"),
        width: $underLine.data("originWidth")
      });
    }
  );


})