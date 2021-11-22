//Titulo: Tarea de Servicios Municipales - fichero java
//Autor: Diego Velasco Peribáñez

var i=0;
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

addEventListener

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
        i,
        contacto.value,
        Teléfono.value,
        Email.value,
        fechaDesde.value,
        total.value,
        cantidad1,
        cantidad2,
        cantidad3,
        cantidad4,
        cantidad5,
        cantidad6,
        cantidad7

    );
    i++;

    myDBInstance.transaction(
        function (tran) {
            
            tran.executeSql('INSERT INTO  ventas (num_ventas , contacto, fecha, telefono, email ,importe_total, cant_servicio1, cant_servicio2, cant_servicio3, cant_servicio4, cant_servicio5, cant_servicio6, cant_servicio7 ) values \n\
            ("'+venta.num_venta+'","'+venta.contacto+'","'+venta.fecha+'","'+venta.telefono+'","'+venta.email+'",'+venta.importe_total+','+venta.cant_servicio1+','+venta.cant_servicio2+','+venta.cant_servicio3+','+venta.cant_servicio4+','+venta.cant_servicio5+','+venta.cant_servicio6+','+venta.cant_servicio7+')');
        }
    );

}
/////////////////////// GUARDAR UN REGISTRO DE VENTA /////////////////////////////////////////////
