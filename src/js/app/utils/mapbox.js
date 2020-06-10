const displayMap = () => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZW1veDEzMyIsImEiOiJja2F0Z2JiZmMzMTAxMzFwNnIzaGl3Mm55In0.zPJRpG603LnT3LAKVQjlgA';

      var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [18.69274, 44.22669],
      zoom: 7,
      scrollZoom: false
    });
  
    var marker = new mapboxgl.Marker()
    .setLngLat([18.69274, 44.22669])
    .addTo(map);
  };
  
  displayMap()
