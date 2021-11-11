//Titulo: Tarea de Servicios Municipales - fichero java
//Autor: Diego Velasco Peribáñez

var latitud = 41.67097948393865;
var longitud = -3.6769259916763985;
function inicio()
{

map = new google.maps.Map(
    document.getElementById('map_canvas'), {
    // En el mapa se visualiza el mapa correspondiente a esta latitud, longitud
        center: new google.maps.LatLng(latitud,longitud),//latitud,longitud),//
       // center: new google.maps.LatLng(41.6685198,-3.6886618),//latitud,longitud),//
    zoom: 18, // zoom del mapa
    draggableCursor: 'auto', // forma del cursor
    draggingCursor: 'crosshair',
    mapTypeId: google.maps.MapTypeId.SATELLITE // tipo de mama
});

}

inicio();


/////////////////////// CENTRAR EL MAPA /////////////////////////////////////////////
function centrarMapa (){
    registro=this.registro;
    map = new google.maps.Map(
        document.getElementById('map_canvas'), {
            
        // En el mapa se visualiza el mapa correspondiente a esta latitud, longitud
            center: new google.maps.LatLng(registro.latitud, registro.longitud),//latitud,longitud),//
           // center: new google.maps.LatLng(41.6685198,-3.6886618),//latitud,longitud),//
        zoom: 18, // zoom del mapa
        draggableCursor: 'auto', // forma del cursor
        draggingCursor: 'crosshair',
        mapTypeId: google.maps.MapTypeId.HYBRID // tipo de mama
    });
}
/////////////////////// CENTRAR EL MAPA /////////////////////////////////////////////

/////////////////////// GUARDAR UN REGISTRO DE VENTA /////////////////////////////////////////////
function guardarVenta(){

    venta = new ventas(
        

    );

}
/////////////////////// GUARDAR UN REGISTRO DE VENTA /////////////////////////////////////////////
