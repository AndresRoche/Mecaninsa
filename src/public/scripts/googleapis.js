function iniciarMap(){
    var coord = {lat:10.161055 ,lng: -67.9953359};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 12,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
