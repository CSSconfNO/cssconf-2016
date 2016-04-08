'use strict';
/*global $, google, Foundation*/

/*eslint-disable */
var SpeakerBios = {
  "rachel": {
    "name": "Rachel Nabors",
    "photo": "/images/speakers/rachel-nabors.jpg",
    "bio": "Rachel is a web animation expert and invited expert at the W3C. She has worked on interactive projects with companies like Adobe, Sesame Street, and Mozilla. She travels the world advocating for animation and helping teams put it to work. Rachel helps cultivate the community by curating WebAnimationWeekly.com and founding the Animation at Work Slack community at <a href=\"http://slack.animationatwork.com\" target=\"_blank\">slack.animationatwork.com</a>. When not traveling, you can find her biking around her home city of Portland, Oregon, or catch her as <a href=\"https://twitter.com/rachelnabors\" target=\"_blank\">@rachelnabors</a> on Twitter and at <a href=\"http://rachelnabors.com/\" target=\"_blank\">rachelnabors.com</a>."
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
    "bio": "Aga works @ Adobe in Warsaw, where she has an awesome opportunity to combine both Visual Designer & Front-end Developer roles. Apart from designing and coding, she enjoys organizing and engaging herself in many initiatives related with programming and front-end development. Currently, she is co-organizing HTML&CSS workshops in Warsaw called The Awwwesomes http://theawwwesomes.org. When she's not in front of the comuputer, she usually spends her time sewing, eating or laughing."
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
    "photo": "/images/speakers/lena-reinhard.jpg",
    "bio": "Lena Reinhard is a consultant and team leader with an interdisciplinary background. She has been a contributor to the Open Source projects Hoodie and Apache CouchDB, and co-founded a software company. Through her work, Lena aims to support change in the tech industry to make it more accessible, diverse and inclusive. She currently lives in Berlin and really loves Alpacas."
  },
  "haakon": {
    "name": "Håkon Wium Lie",
    "photo": "/images/speakers/hakon-wium-lie.jpg",
    "bio": "Håkon is a web pioneer and CTO of Opera Software. As Wikipedia puts it; “He is best known for proposing the concept of Cascading Style Sheets (CSS) while working with Tim Berners-Lee and Robert Cailliau at CERN in 1994.” He was also recently spotted floating on a piece of balsa wood across the Pacific. The KonTiki2 Expedition sailed from Peru to Easter Island in 43 days."
  }
};
/*eslint-enable */

var Speakers = {
  lastFocus: null,
  init: function() {
    var modal = $('#speaker-modal');
    var modalSpeakerName = $('#speaker-modal-name');
    var modalSpeakerBio = $('#speaker-modal-bio');
    var modalSpeakerPhoto = $('#speaker-modal-photo');

    var showSpeaker = function(speakerId) {
      var speakerObj = SpeakerBios[speakerId];
      if (!speakerObj){return false; }

      modalSpeakerName.html(speakerObj.name);
      modalSpeakerBio.html(speakerObj.bio);
      modalSpeakerPhoto.attr('src', speakerObj.photo);
      modalSpeakerPhoto.attr('alt', speakerObj.name);

      $(modal).foundation('open');

      window.setTimeout(function() {
        var focusable = Foundation.Keyboard.findFocusable(modal);
        if (focusable[0]) {
          focusable[0].focus();
        }
      }, 500);
    };

    $('.js-speaker-item').keydown(function (e) {
      Speakers.lastFocus = e.target;
      var speakerId = this.getAttribute('data-speaker');
      if (e.which === 13) { // enter
        showSpeaker(speakerId);
      }
    });

    $('.js-speaker-item').click(function() {
      var speakerId = this.getAttribute('data-speaker');
      showSpeaker(speakerId);
    });
  },
  refocus: function() {
    if (Speakers.lastFocus) {
      Speakers.lastFocus.focus();
    }
  }
};

/*eslint-disable */
var ScheduleDetails = {
  "0915": {
    speaker: "Håkon Wium Lie",
    photo: "/images/speakers/hakon-wium-lie.jpg",
    title: "Why CSS was invented",
    description: "Let's go back to the beginning! CSS was first proposed by Håkon Wium Lie in 1994. We are really happy to open the first CSSconf Nordic with Håkon talking about <strong>why</strong> CSS was invented."
  },
  "1000": {
    speaker: "Aga Naplocha",
    photo: "/images/speakers/aga-naplocha.png",
    title: "A Creative Approach to SVG",
    description: "Have you ever thought that dabbling in SVG and animating it might be a cumbersome part of your work? Probably yes. To be honest, I had thought the same before I actually started playing with it. During my presentation I'll tell you why SVG is so hyped and powerful right now, giving you a couple of creative and fun examples. I'll also show you how to easily animate SVG using simple CSS animations, which advantages SVG has over other formats and finally I'll shed a light on SVG's accessibility."
  },
  "1100": {
    speaker: "Dan Na",
    photo: "/images/speakers/dan-na.jpg",
    title: "Transitioning to Sass at Scale",
    description: "CSS preprocessors like Sass add a variety of functions that streamline CSS development: variables, nesting, functions, mixins, etc. The documentation is great, the tools are mature, and starting a new project using Sass has a clear and straight-forward workflow. But transitioning a large legacy codebase from CSS to Sass is a different story. CSS syntax errors that may be harmless in production can completely prevent Sass from compiling. But fixing those errors creates a far juicier problem: will we introduce visual bugs by fixing syntax bugs?<br/><br/>At Etsy we faced this exact question multiplied across over 400,000 lines of CSS and 2100+ CSS files. During this talk I'll discuss the tools we used and built throughout our Sass workflow, from the initial transformation of CSS files using Abstract Syntax Trees (ASTs) to the libsass-powered Sass -> CSS render pipeline we have running on all development machines. I'll cover some of the tools we've built in-house to mitigate some of the biggest potential pitfalls of Sass (Sass live lint), how we ramped up our development and production services to gain confidence in our process and how this entire effort led to a single 1.2M line push that didn't break production and had minimal impact to developer and designer workflows."
  },
  "1145": {
    speaker: "Rachel Nabors",
    photo: "/images/speakers/rachel-nabors.jpg",
    title: "Alice in Web Animations API Land",
    description: "Animation is back in the web development tool chest! We know of declarative CSS Animations and Transitions and fully featured JavaScript animation libraries like GreenSock, but there's a third, dynamic option: the Web Animation API! In this talk Rachel will take you on a magical journey with Alice from Wonderland to show you how this new API is used to run the CSS Animations in your browser and how you can use it to generate and manipulate animations in your project. Colorful, interactive, useful fun for all disciplines."
  },
  "1330": {
    speaker: "Jen Simmons",
    photo: "/images/speakers/jen-simmons.jpg",
    title: "Revolutionize your page: Real art direction on the web",
    description: "We finally have the tools necessary to create amazing page designs on the web. Now we can art direct our layouts, leveraging the power and tradition of graphic design. In this eye-opening talk, Jen will explore concrete examples of an incredible range of new possibilities. She'll walk through a step-by-step design process for figuring out how to create a layout as unique as your content. You'll learn how Flexbox, Grid, Shapes, Multicolumn, Viewport Units, and more can be combined together to revolutionize how you approach the page —any page."
  },
  "1415": {
    speaker: "Liam Campbell",
    photo: "/images/speakers/liam-campbell.jpg",
    title: "Mad Science with CSS",
    description: "A little while ago, I began to worry about how much time I'd sunk into CSS. Years of my life had gone into styling webpages. It sounded rather pathetic. *I* sounded rather pathetic. So I went searching for unexpected things I could do with my modest skill with web technologies.<br/>Luckily for me—and my encroaching sense of existential dread—there's a lot that you can do with CSS (and yeah, a little javascript)! People are making art, games, and desktop apps with CSS, and even extending CSS to do things it was never intended to do.<br/>Now I've become a part-time adventurer in the hidden depths of CSS. What can it do now, and what can we persuade it to do if we try? Maybe more importantly, what can we learn about the way we write CSS every day? I have a hammer; I see nails everywhere. Let's explore!"
  },
  "1530": {
    speaker: "Eva Ferreira",
    photo: "/images/speakers/eva-ferreira.jpg",
    title: "You don't know Transforms",
    description: "In 2016 every developer has used transforms but its top-notch attributes are still hidden from view. In order to unleash the secret powers, it is necessary to enter the woods of geometry. In this talk, I'll take you through the most powerful features of this property with live-coding examples and a little help from our friend Maths."
  },
  "1615": {
    speaker: "Lena Reinhard",
    photo: "/images/speakers/lena-reinhard.jpg",
    title: "Surviving in a high-speed environment: 15 things that will help you stand the pressure in tech",
    description: "Over the past few years, several CSS methodologies and JavaScript frameworks have been released. In one year, we receive 32,120 business emails. Every weekday, we're active on Slack for 2 hours 15 minutes. Technology is moving fast, and constantly, there's so much going on. We read the latest think-pieces about which tools to use, but how often do we really change our behavior as a result? We constantly have to adapt in an ever-changing environment, while somehow still doing our job of building proper, functioning software to the latest tight-super-unrealistic deadline.<br/><br/>This talk will look at the human side of our daily work in technology. Together, we will examine which factors affect us physically and emotionally in our work. We'll learn how they lead to pressure, stress, self-consciousness and ultimately burnout, and we'll find out how to identify early warning signs of being affected. We'll learn from other fields like philosophy, psychology and climatology things that can help us cope. You'll leave with a realistic look at your own, human capabilities, and the knowledge of what you can do to take care of yourself while working on software."
  }
}
/*eslint-enable */

var Schedule = {
  lastFocus: null,
  init: function() {
    var modal = $('#schedule-modal');
    var modalScheduleSpeaker = $('#schedule-modal-speaker');
    var modalScheduleTitle = $('#schedule-modal-title');
    var modalScheduleDescription = $('#schedule-modal-description');
    var modalSchedulePhoto = $('#schedule-modal-photo');

    var showSlotDetails = function(scheduleTime) {
      var scheduleObj = ScheduleDetails[scheduleTime];
      if (!scheduleObj){return false; }

      modalScheduleSpeaker.html(scheduleObj.speaker);
      modalScheduleTitle.html(scheduleObj.title);
      modalScheduleDescription.html(scheduleObj.description);
      modalSchedulePhoto.attr('src', scheduleObj.photo);
      modalSchedulePhoto.attr('alt', scheduleObj.speaker);

      $(modal).foundation('open');

      window.setTimeout(function() {
        var focusable = Foundation.Keyboard.findFocusable(modal);
        if (focusable[0]) {
          focusable[0].focus();
        }
      }, 500);
    };

    $('.js-schedule-item').keydown(function (e) {
      Schedule.lastFocus = e.target;
      var scheduleTime = this.getAttribute('data-slot');
      if (e.which === 13) { // enter
        showSlotDetails(scheduleTime);
      }
    });

    $('.js-schedule-item').click(function() {
      var scheduleTime = this.getAttribute('data-slot');
      showSlotDetails(scheduleTime);
    });
  },
  refocus: function() {
    if (Schedule.lastFocus) {
      Schedule.lastFocus.focus();
    }
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

Foundation.Keyboard.register('DropdownMenu', {}); // Reset keyboard-events for menu
Foundation.Keyboard.register('Reveal', {
  'ESCAPE': 'close'
}); // Reset keyboard-events for speaker-reveal
$('#speaker-modal').on('closed.zf.reveal', Speakers.refocus); // refocus correct speaker when closing modal
$('#schedule-modal').on('closed.zf.reveal', Schedule.refocus); // refocus correct schedule-item when closing modal

// Focus on section when navigating using keyboard
$('#magellan-menu').on('click.zf.magellan', function(e) {
  var arrival = e.target.getAttribute('href');
  $(arrival).focus();
});
