// Map Location

  /*var styles = [{
    stylers: [{
      saturation: -100
    }

    ]
  }, {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{
      hue: "#74b7b0"
    }, {
      visibility: 'simplified'
    }]
  }, {
    featureType: 'road',
    elementType: 'labels',
    stylers: [{
      visibility: 'on'
    }]
  }],

    lat = -33.867490,
    lng = 151.20699,




    customMap = new google.maps.StyledMapType(styles, {
      name: 'Styled Map'
    }),


    mapOptions = {
      zoom: 14,
      scrollwheel: false,
      disableDefaultUI: true,
      center: new google.maps.LatLng(lat, lng),
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP]
      }
    },
    map = new google.maps.Map(document.getElementById('block-map'), mapOptions),
    myLatlng = new google.maps.LatLng(lat, lng),

    marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: {
        url: 'img/marker.png',
        scaledSize: new google.maps.Size(90, 90)
      }
    });


  map.mapTypes.set('map_style', customMap);
  map.setMapTypeId('map_style');*/
  
function initMap() {
  var uluru = { lat: 10.220735, lng: -68.009901 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}