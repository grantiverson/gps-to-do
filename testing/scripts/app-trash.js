

let map,
    markers = [];



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
