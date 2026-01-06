var map;
var marker;

function initMap() {
  var location = { lat: 40.7128, lng: -74.0060 };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: location
  });

  marker = new google.maps.Marker({
    position: location,
    map: map
  });
}

function showMap(lat, lng) {
  var pos = { lat: lat, lng: lng };
  map.setCenter(pos);
  marker.setPosition(pos);
}
