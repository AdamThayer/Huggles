var map;
var huggles = huggles || {}
huggles.after_google = huggles.after_google || []

function showPins(coords) {
    $(coords).each(function(i, coord) {
        var pos = new google.maps.LatLng(coord[1],
            coord[0]);

        var marker = new google.maps.Marker({
            map: map,
            position: pos
        });

        marker.setMap(map);

        //map.setCenter(pos)
    })
}

function initialize() {
    function showOtherPins(lat, lon) {
        $.ajax('/sync', {
            datatype: 'script',
            method: 'POST',
            data: {
                sync: {
                    lat: lat,
                    lon: lon}
            }
        })
    }

    var mapOptions = {
        zoom: 17
    };
    map = new google.maps.Map(document.getElementById('map-container'),
        mapOptions);

    // Try HTML5 geolocation
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;

            var pos = new google.maps.LatLng(lat,
                lon);

            var marker = new google.maps.Marker({
                map: map,
                position: pos
            });

            map.setCenter(pos);

            marker.setMap(map);

            google.maps.event.addListener(marker, "click", function(event){
                var lat = event.latLng.lat();
                var lng = event.latLng.lng();
                // populate yor box/field with lat, lng
                alert("Lat=" + lat + "; Lng=" + lng);

            });

            showOtherPins(lat, lon)

        }, function() {
            handleNoGeolocation(true);
        });
    } else {
        // Browser doesn't support Geolocation
        handleNoGeolocation(false);
    }
}

function handleNoGeolocation(errorFlag) {
    if (errorFlag) {
        var content = 'Error: The Geolocation service failed.';
    } else {
        var content = 'Error: Your browser doesn\'t support geolocation.';
    }

    var options = {
        map: map,
        position: new google.maps.LatLng(60, 105),
        content: content
    };

    var infowindow = new google.maps.InfoWindow(options);
    map.setCenter(options.position);
}