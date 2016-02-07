var Navigation = {
  activeItem: null,
  init: function() {
    $('.main-nav > a').click(function(e) {
      e.preventDefault();
      if (Navigation.activeItem) {
        $(Navigation.activeItem).removeClass('is-active');
      }
      if (this == Navigation.activeItem) {
        Navigation.activeItem = null;
      }
      else {
        $(this).addClass('is-active');
        Navigation.activeItem = this;
        $('html, body').animate({
            scrollTop: $(e.target.dataset.target).offset().top - 130
        }, 500);
      }
    });
  }
}

var Schedule = {
  activeItem: null,
  init: function() {
    $('.schedule-item').click(function(e) {
      if (Schedule.activeItem) {
        $(Schedule.activeItem).removeClass('is-active');
      }
      if (this == Schedule.activeItem) {
        Schedule.activeItem = null;
      }
      else {
        $(this).addClass('is-active');
        Schedule.activeItem = this;
      }
    });
  }
}

var Map = {
  /*You need to include this script tag on any page that has a Google Map.
  The following script tag will work when opening this example locally on your computer.
  But if you use this on a localhost server or a live website you will need to include an API key.
  Sign up for one here (it's free for small usage):
      https://developers.google.com/maps/documentation/javascript/tutorial#api_key
  After you sign up, use the following script tag with YOUR_GOOGLE_API_KEY replaced with your actual key.
      <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_API_KEY&sensor=false"></script>*/

  init: function() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
      // How zoomed in you want the map to start at (always required)
      zoom: 13,
      scrollwheel: false,

      // The latitude and longitude to center the map (always required)
      center: new google.maps.LatLng(59.916108, 10.751773), // Oslo


      // How you would like to style the map.
      // This is where you would paste any style found on Snazzy Maps.
      styles: [{"featureType":"administrative.locality","elementType":"all","stylers":[{"hue":"#2c2e33"},{"saturation":7},{"lightness":19},{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"simplified"}]},{"featureType":"poi","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":31},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":31},{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":-2},{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"hue":"#e9ebed"},{"saturation":-90},{"lightness":-8},{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"hue":"#e9ebed"},{"saturation":10},{"lightness":69},{"visibility":"on"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#e9ebed"},{"saturation":-78},{"lightness":67},{"visibility":"simplified"}]}]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('venue-map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(59.916307, 10.750513),
      map: map,
      title: 'Rockefeller Music Hall'
    });
  }
}

$(function () {
  Navigation.init();
  Schedule.init();
  Map.init();
});
