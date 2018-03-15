/**
 * Функция инициализации карты
 * Получаем массив places, который раннее загрузили из Firebase
 */
var defaultMarker = './defaultMarker.svg'
var busMarker = './busMarker.svg'

function setMarkers() {
    var infoWindow = new google.maps.InfoWindow(
        {
            pixelOffset: 
            { 
                width: 0,
                height: -24
            }
        }
    );  
    // Удаляем старые маркеры  
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);        
    }
    markers = [];
    // Добавляем новые
    for (let key in locations) {        
        var myLatLng = new google.maps.LatLng(locations[key].lat, locations[key].lng);
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: locations[key].title,
            icon: busMarker,
            id: key,
            timestamp: locations[key].timestamp
        });

        // Добавляем маркеры в массив markers
        markers.push(marker);
    }
    markers.forEach(marker => {
        var timeString = new Date(marker.timestamp).toLocaleString();        
        // Двойной клик на маркер
        marker.addListener('dblclick', function() {
            firebase.database().ref().child('places/' + marker.id + '/').remove()
            marker.setMap(null);
            infoWindow.setMap(null);
        });
        // Клик на маркер
        marker.addListener('click', function(e) {
            infoWindow.setPosition(marker.position);
            infoWindow.setContent('Заголовок: ' + marker.title +'<br> Время: ' + timeString);            
            if (!infoWindow.map) {
                infoWindow.setMap(map);             
            };
        });
    });
}
function initMap() {
    var mapOptions = {
        zoom: 7,
        center: 
        {
            lat: 55.35782352814625, 
            lng: 23.264913818750077
        },
        zIndex: 2
    }
    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Загружаем метки из Firebase
    loadMarkers();
    // Выделяем страну
    lithuania();
    // Search box

    // Create the search box and link it to the UI element.
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() {
      searchBox.setBounds(map.getBounds());
    });

    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function() {
      var places = searchBox.getPlaces();

      if (places.length == 0) {
        return;
      }

      // Clear out the old markers.
      markers.forEach(function(marker) {
        marker.setMap(null);
      });
      markers = [];

      // For each place, get the icon, name and location.
      var bounds = new google.maps.LatLngBounds();
      places.forEach(function(place) {
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }
        var icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };

        // Create a marker for each place.
        markers.push(new google.maps.Marker({
          map: map,
          icon: icon,
          title: place.name,
          position: place.geometry.location
        }));

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });
    
    // HTML5 Геолокация.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            // Записываем наше местоположение в переменную pos
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            // Добавляем маркер в наше местоположение
            var marker = new google.maps.Marker({
                position: pos,
                map: map,
                icon: defaultMarker
            });

            // var infoWindow = new google.maps.InfoWindow(
            //     {
            //         map: map,
            //         pixelOffset: 
            //         { 
            //             width: 0,
            //             height: -24
            //         }
            //     }
            // );
            // infoWindow.setPosition(pos);
            // infoWindow.setContent('Местоположение найдено!');
            // map.setCenter(pos);
            
        }, function() {
            var infoWindow = new google.maps.InfoWindow(
                {
                    pixelOffset: 
                    { 
                        width: 0,
                        height: -24
                    }
                }
            );  
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
    // Браузер не поддерживает геолокацию
    handleLocationError(false, infoWindow, map.getCenter());
    } 
    // При клике на карту добавляем метку на карту
    // var marker = new google.maps.Marker({        
    //     map: map,
    //     icon: defaultMarker
    // });
    // map.addListener('click', function(e) {
    //     data.lat = e.latLng.lat();
    //     data.lng = e.latLng.lng();
    //     marker.setPosition(
    //     {
    //         lat: data.lat, 
    //         lng: data.lng
    //     } 
    //     )        
    // });

    // При клике на кнопку с id="add-marker" - добавляем маркер в базу данных
    document.getElementById('add-marker').addEventListener('click', function(e) {
        data.title = document.getElementById('title').value;        
        addToFirebase(data);
        // reloadMarkers();
        document.getElementById('title').value = "";
    });      
} 
  
  // Проверка на ошибку геолокации на устройстве
  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
  }