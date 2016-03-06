'use strict';
/*global $, google*/

var SpeakerBios = {
  "rachel": {
    "name": "Rachel Nabors",
    "photo": "/images/speakers/rachel-nabors.jpg",
    "bio": "Rachel is an award-winning cartoonist turned web animation advocate. She speaks at conferences around the world, consults with large companies, and gives workshops about web animation. She’s an invited Expert at the W3C advocating for the web animation community, and a curator of Web Animation Weekly. Rachel loves studying birds, playing Pokémon, wearing boots, making comics, and helping people learn. When not biking around the city of Portland, you can find her tending her orchids or brewing a hot cup of golden tippy Yunnan in a gaiwan pot."
  },
  "eva": {
    "name": "Eva Ferreira",
    "photo": "/images/speakers/eva-ferreira.jpg",
    "bio": "Eva is a freelance front-end developer with a passion for teaching. She currently works at the National Technological University of Argentina as a professor while she studies for a BA in Multimedia Design. She also speaks at front-end events such as CSSConf US, CSSConf Australia and SassConf; last but not least, Eva is currently organizing CSSConf Argentina 2016."
  },
  "dan": {
    "name": "Dan Na",
    "photo": "/images/speakers/dan-na.jpg",
    "bio": "Dan is software engineer on the Front End Infrastructure Team at Etsy in Brooklyn. He is the creator of cheekswab.org — an initiative to spread awareness about the need for bone marrow donors. Dan likes to cook and nerds out about food on his cooking blog: <a href=\"http://fooddontlie.com\" target=\"_blank\">fooddontlie.com</a>"
  },
  "aga": {
    "name": "Aga Naplocha",
    "photo": "/images/speakers/aga-naplocha.png",
    "bio": "Aga works @ Adobe in Warsaw, where she has an awesome opportunity to combine both Visual Designer & Front-end Developer roles. Apart from designing and coding, she enjoys organizing and engaging herself in many initiatives related with programming and front-end development. Currently, she is co-organizing HTML&CSS workshops in Warsaw called The Awwwesomes http://theawwwesomes.org. When she’s not in front of the comuputer, she usually spends her time sewing, eating or laughing."
  },
  "liam": {
    "name": "Liam Campbell",
    "photo": "/images/speakers/liam-campbell.jpg",
    "bio": "Liam is a web designer and developer at Mule Design, a studio known for its beautiful and well-researched design work with non-profits, education, and the arts. There are two roughly 4.5cm-wide screenshots of Liam's work for Audubon.org featured in Ethan Marcotte's book, Responsive Design: Patterns & Principles. He considers this his finest achievement, but is willing to let it be supplanted by some greater honor, should one present itself. Liam lives on the unfashionable end of San Francisco, where he plans to stay indefinitely."
  },
  "jen": {
    "name": "Jen Simmons",
    "photo": "/images/speakers/jen-simmons.jpg",
    "bio": "Dubbed “the Terry Gross of the tech industry,” Jen Simmons is the host and executive producer of The Web Ahead. Her in-depth interviews explain emerging technology and predict the future of the web — and won the 2015 Net Award for Podcast of the Year.<br/>Jen is a Designer and Developer Advocate at Mozilla, where she advocates for web standards and researches the coming revolution in graphic design on the web. She's spoken at events including SXSW, An Event Apart, Fluent, Generate, Future of Web Design, and Respond. Her talk, Modern Layouts: Getting Out of Our Ruts, was awarded Best Conference Presentation at CSS Dev Conf 2014.</br>Jen launched her first client website in 1998 and spent years making sites for small mom & pop shops, arts organization, and creative individuals. Her more well-known clients include CERN, the W3C, Google, Drupal, Temple University, and the Annenberg Foundation. Jen earned a MFA in Film and Media Arts from Temple University. She lives in New York City."
  },
  "lena": {
    "name": "Lena Reinhard",
    "photo": "/images/speakers/",
    "bio": "Lena Reinhard is a consultant and team leader with an interdisciplinary background. She has been a contributor to the Open Source projects Hoodie and Apache CouchDB, and co-founded a software company. Through her work, Lena aims to support change in the tech industry to make it more accessible, diverse and inclusive. She currently lives in Berlin and really loves Alpacas."
  }
};
console.log('SpeakerBios', SpeakerBios);

var Speakers = {
  init: function() {
    var modal = $('#speaker-modal');
    var modalSpeakerName = $('#speaker-modal-name');
    var modalSpeakerBio = $('#speaker-modal-bio');
    var modalSpeakerPhoto = $('#speaker-modal-photo');

    $('.js-speaker-item').click(function(e) {
      var speakerId = this.getAttribute('data-speaker');
      var speakerObj = SpeakerBios[speakerId];
      if (!speakerObj) return false;

      modalSpeakerName.html(speakerObj.name);
      modalSpeakerBio.html(speakerObj.bio);
      modalSpeakerPhoto.attr('src', speakerObj.photo);
      modalSpeakerPhoto.attr('alt', speakerObj.name);

      $(modal).foundation('open');
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
