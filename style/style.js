'use strict';


/*
 * Make UI adjustments based on screen properties.
 */
$(document).ready(function() {
});

$(window).resize(function() {
  setPadding();
});

$(window).on('load', function() {
  setPadding();
});

function setPadding() {
  let contentHeight = $('#title').height() +
                      $('#languages').height() +
                      $('#carousel').height() +
                      $('#categories').height() +
                      $('#technologies').height();
  let real = $(document).height() - $('#paddingRow').height();
  
  if($(document).height() - contentHeight > 0) {
    $('#paddingRow').height(real - contentHeight);
  }
}
