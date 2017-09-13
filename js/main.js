$("#slider").roundSlider({
    radius: 150,
    circleShape: "pie",
    sliderType: "min-range",
    showTooltip: false,
    value: 70,
    startAngle: 315
});

$( function() {
  $( "#slider-vertical" ).slider({
    orientation: "vertical",
    range: "min",
    min: -10,
    max: 10,
    value: 0,
    slide: function( event, ui ) {
      $( "#amount" ).val( ui.value );
    }
  });
  $( "#amount" ).val( $( "#slider-vertical" ).slider( "value" ) );
} );

$( function() {
  $( "#slider-vertical2" ).slider({
    orientation: "vertical",
    range: "min",
    min: -10,
    max: 10,
    value: 7,
    slide: function( event, ui ) {
      $( "#amount" ).val( ui.value );
    }
  });
  $( "#amount" ).val( $( "#slider-vertical2" ).slider( "value" ) );
} );

$("#example_id").ionRangeSlider({
  min: 0,
  max: 5,
  step: 0.01,
  from: 2.45,
  hide_min_max: true
});
