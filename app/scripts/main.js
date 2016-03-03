'use strict';
/*global $, google*/

var Speakers = {
  activeItem: null,
  init: function() {
    $('.js-speaker-item').click(function(e) {
      if ($(e.target).parents('.js-speaker-inner').length > 0) {
        return;
      }
      if (Speakers.activeItem) {
        $(Speakers.activeItem).removeClass('is-active');
      }
      if (this === Speakers.activeItem) {
        Speakers.activeItem = null;
      }
      else {
        $(this).addClass('is-active');
        Speakers.activeItem = this;
      }
    });
    $('.js-close-speaker-item').click(function() {
      if (Speakers.activeItem) {
        $(Speakers.activeItem).removeClass('is-active');
      }
    });
  }
};

var Schedule = {
  activeItem: null,
  init: function() {
    $('.schedule-item').click(function() {
      if (Schedule.activeItem) {
        $(Schedule.activeItem).removeClass('is-active');
      }
      if (this === Schedule.activeItem) {
        Schedule.activeItem = null;
      }
      else {
        $(this).addClass('is-active');
        Schedule.activeItem = this;
      }
    });
  }
};

var GoogleMap = {
  /*You need to include this script tag on any page that has a Google Map.
  The following script tag will work when opening this example locally on your computer.
  But if you use this on a localhost server or a live website you will need to include an API key.
  Sign up for one here (it's free for small usage):
      https://developers.google.com/maps/documentation/javascript/tutorial#api_key
  After you sign up, use the following script tag with YOUR_GOOGLE_API_KEY replaced with your actual key.
      <script type='text/javascript' src='https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_API_KEY&sensor=false'></script>*/

  init: function() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
      // How zoomed in you want the map to start at (always required)
      zoom: 15,
      scrollwheel: false,

      // The latitude and longitude to center the map (always required)
      center: new google.maps.LatLng(59.923000, 10.752872), // Dansens Hus


      // How you would like to style the map.
      // This is where you would paste any style found on Snazzy Maps.
      /*eslint-disable */
      //styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#dde6e8"},{"visibility":"on"}]}]
      styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"administrative.locality","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"},{"visibility":"simplified"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"visibility":"simplified"},{"saturation":"-65"},{"lightness":"45"},{"gamma":"1.78"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"saturation":"-33"},{"lightness":"22"},{"gamma":"2.08"}]},{"featureType":"transit.station.airport","elementType":"geometry","stylers":[{"gamma":"2.08"},{"hue":"#ffa200"}]},{"featureType":"transit.station.airport","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.station.rail","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"transit.station.rail","elementType":"labels.icon","stylers":[{"visibility":"simplified"},{"saturation":"-55"},{"lightness":"-2"},{"gamma":"1.88"},{"hue":"#ffab00"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#bbd9e5"},{"visibility":"simplified"}]}]
      /*eslint-enable */
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id='map' seen below in the <body>
    var mapElement = document.getElementById('venue-map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    var markerImage = {
      url: '/images/map-marker-2.png',
      size: new google.maps.Size(70, 60),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(35, 60)
    };

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(59.921341, 10.752872),
      map: map,
      icon: markerImage,
      title: 'Rockefeller Music Hall'
    });

    var contentString = '<div id="map-infowindow">' +
      '<div id="bodyContent">' +
        '<a href="http://www.dansenshus.com/" target="_blank">' +
          '<img src="http://norskedansekunstnere.no/wp-content/uploads/2014/06/dhlogo.png" alt="Dansens Hus" />' +
        '</a>' +
        '<p><strong>Dansens Hus</strong><br/>Møllerveien 2<br/>0182 Oslo, Norway</p>' +
      '</div>' +
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  infowindow.open(map, marker);

    return {map: map, marker: marker};
  }
};

$(function () {
  Speakers.init();
  Schedule.init();
  GoogleMap.init();
});

$(document).foundation();
