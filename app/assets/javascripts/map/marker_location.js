var huggles = huggles || {}
huggles.after_google = huggles.after_google || []

huggles.after_google.push(
    function () {
        google.maps.event.addListener(map, "rightclick", function(event) {
            var lat = event.latLng.lat();
            var lng = event.latLng.lng();
            // populate yor box/field with lat, lng
            alert("Lat=" + lat + "; Lng=" + lng);
        })
    }
)
