/* Created by aayusharora on June 20, 2017 */

$(document).ready(function() {
  var popbox = $('.pop-box');
  popbox.hide();
  if($(window).width() < 768) {
    $('.sizeevent').click(function(event) {
      popBox(event);
    });
  }
  else {
    $('.sizeevent').hover(function(event) {
      popBox(event);
    });
  }
  function popBox(e) {
    event = e || window.event;

    popbox.hide();
    event.preventDefault();
    event.stopPropagation();
    
   var track = $(event.target);
     /*var link  = track.children(0);

    if($(link).offset() === undefined) {
      var offset = $(track).offset();
      var track = track.parent();
    }
    else {
      var offset = $(link).offset();
    }

    var nextOfpop = $(track).next();
    //var position = offset.top - link.height() - 30;
    //var left = offset.left;

    if($(window).width() >= 320 && $(window).width() < 481) {
      //var position = offset.top - link.height() - 15;
    }
    else if($(window).width() >= 481 && $(window).width() < 597) {
      //var position = offset.top - link.height() - 20;
    }
    else if($(window).width() >= 597 && $(window).width() < 641) {
      //var position = offset.top - link.height() - 46;
    }
    else if($(window).width() >= 641 && $(window).width() < 961) {
      //var position = offset.top - link.height() - 22;
    }
    else if($(window).width() >= 961 && $(window).width() < 1025) {
      //var left = left - 180;
    }
    else {
      //var left = left - 248;
    }
   if(offset.top) {
      //var toptrack = position;
      //$(nextOfpop).css({'top': toptrack,
                      //'left': left
    //});
    
    }
*/
  $(track).next().show();
    $(document).mouseup(function(e) {
      var container = popbox;

      if (!container.is(e.target)
            && container.has(e.target).length === 0 && (e.target) !== $('html').get(0))
          {
        container.hide();
      }
    });
  }
});
