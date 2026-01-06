<script>
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

  // Function you can call from a button
  function showMap(lat, lng) {
    var pos = { lat: lat, lng: lng };
    map.setCenter(pos);
    marker.setPosition(pos);
  }
</script>

<script
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCrV3Y-C0wBMMqCx7Jx6Rx_Igo2e1Z4tj4&callback=initMap"
  async defer>
</script>
