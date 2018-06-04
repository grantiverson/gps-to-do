// https://forum.freecodecamp.org/t/authorization-http-header-for-yelp-fusion-api-access-token/140974
const access_token = "Opsi88BMRhY9PANt58XH8NSBCbDCLLnHL5VLKDmhaOt4qoruzhDzZcqAdCIAAO59a5UvhRFFAqdR6SSZ65VWNpiSsyyX-sLl3TLQNUg1sqi1R-sl4JJQ5QbzqWsUW3Yx";

let myHeaders = new Headers({
  "Authorization": "Bearer " + access_token
});

let map,
    markers = [];

let locations = [
  {title: 'Avon Park Public Library', address: '100 N Museum Ave, Avon Park, FL 33825'},
  {title: 'Heartland National Bank', address: '800 W Main St, Avon Park, FL 33825'},
  {title: 'Laye\'s Tire Service', address: '1092 Locke St, Avon Park, FL 33825'},
  {title: 'AutoZone', address: '828 US Hwy 27 S, Avon Park, FL 33825'},
  {title: 'Taco Bell', address: '401 US Hwy 27 S, Avon Park, FL 33825'}
];

function initMap() {
  let directionsService = new google.maps.DirectionsService(),
      directionsDisplay = new google.maps.DirectionsRenderer(),
      mapCenter = new google.maps.LatLng(27.595537, -81.514373),
      mapOptions = {
        zoom: 14,
        center: mapCenter,
        mapTypeControl: false
      };

  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  directionsDisplay.setMap(map);

  displayDirections(directionsService, directionsDisplay);
}

function displayDirections(directionsService, directionsDisplay) {
  let start = '998 US-27, Avon Park, FL 33825',
      end = '100 S Verona Ave, Avon Park, FL 33825',
      waypoints = [],
      request = {
        origin: start,
        destination: end,
        travelMode: 'DRIVING',
        waypoints: waypoints,
        optimizeWaypoints: true
      };

  for (let i = 0; i < (locations.length); i++) {
    let newWaypoint = locations[i].address;
    request.waypoints.push({
      location: newWaypoint,
      stopover: true
    });

  }

  directionsService.route(request, function(result, status) {
    if (status === 'OK') {
      directionsDisplay.setDirections(result);
      directionsDisplay.setPanel(document.getElementById('directions'));
      console.log(result);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });

}

function searchForPlace(addPlaceText) {

  fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${addPlaceText}&limit=5&location=Avon Park`, {
    headers: myHeaders
  }).then(result => {
    return result.json();
  }).then(places => {
    console.log(places.businesses);
    return places.businesses;
  }).catch(error => {
    console.log(error);
  });

}

// function removePlaces() {
//   markers = [];
//   locations = [];
// }
//
// function addPlaces(businesses) {
//   console.log(businesses);
//
//   for (let i = 0; i < businesses.length; i++) {
//     let newLocation = {};
//
//     newLocation.title = businesses[i].name;
//     newLocation.location = {
//       lat: businesses[i].coordinates.latitude,
//       lng: businesses[i].coordinates.longitude
//     }
//
//     let marker = new google.maps.Marker({
//       position: newLocation.location,
//       title: newLocation.title,
//       animation: google.maps.Animation.DROP,
//       // icon: defaultIcon,
//       id: i,
//       map: map
//     });
//
//     locations.push(newLocation);
//
//     markers.push(marker);


    // console.log(newPlace);
    //
    // locations.push(newLocation);
    // let marker = new google.maps.Marker({
    //   position: locations[locations.length].location,
    //   title: locations[locations.length].title,
    //   animation: google.maps.Animation.DROP,
    //   id: locations.length,
    //   map: map
    // })

    // marker.addListener('click', function() {
    //   populateInfoWindow(this, largeInfowindow);
    // });

    // marker.addListener('mouseover', function() {
    //   this.setIcon(highlightedIcon);
    // });
    // marker.addListener('mouseout', function() {
    //   this.setIcon(defaultIcon);
    // })
//   }
//
//   console.log(locations);
//   console.log(markers);
//
// };

// function parseCoordinates(coordinates) {
//   return {lat: coordinates.latitude, lng: coordinates.longitude}
// }








// fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=hardware&limit=50&location=Avon Park", {
//   headers: myHeaders
// }).then(result => {
//   return result.json();
// }).then(json => {
//   console.log(json);
// }).catch(error => {
//   console.log(error);
// });
