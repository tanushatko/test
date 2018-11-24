// external js: isotope.pkgd.js

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});
// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};
// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});

$(document).ready(function(){
  $('.slider').slick({

    dots: true

  });
});
$(document).ready(function(){
  $('.test-slider').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true

  });
});

function initMap() {
  // The location of Uluru
  var markerImage = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
  var uluru = {lat: 48.918280, lng: 24.719970};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map-box'), {zoom: 10, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map, icon: markerImage});
}
