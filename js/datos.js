//Titulo: Tarea de Servicios Municipales - fichero java
//Autor: Diego Velasco Peribáñez

var map;
var datos = new Array();
var totalpedido = 0;

document.getElementById("lupa").addEventListener("click", generarAlmacen, false);
document.getElementById("guardar").addEventListener("click", guardarVenta, false);

/////////////////////// CLASE SERVICIOS /////////////////////////////////////////////
//  Generamos la clase (con su constructor) para generar cada servicio
class servicios {
    constructor(id, Descripcion, Tipo, Direccion, Latitud, Longitud, Precio, Duracion) {
        this.codigo = id;
        this.descripcion = Descripcion;
        this.tipo = Tipo;
        this.direccion = Direccion;
        this.latitud = Latitud;
        this.longitud = Longitud;
        this.precio = Precio;
        this.duracion = Duracion;

    }
    leerRegistro() {
        return this;
    }
}
/////////////////////// CLASE SERVICIOS /////////////////////////////////////////////

/////////////////////// CLASE VENTAS /////////////////////////////////////////////
//  Generamos la clase (con su constructor) para generar cada servicio
class ventas {
    constructor(num_venta, contacto, fecha, telefono, email, importe_total, Longitud, Precio, Duracion) {
        this.num_venta = num_venta;
        this.contacto = contacto;
        this.fecha = fecha;
        this.telefono = telefono;
        this.email = email;
        this.importe_total = importe_total;
        this.cant_servicio1 = cant_servicio1;
        this.cant_servicio2 = cant_servicio2;
        this.cant_servicio3 = cant_servicio3;
        this.cant_servicio4 = cant_servicio4;
        this.cant_servicio5 = cant_servicio5;
        this.cant_servicio6 = cant_servicio6;
        this.cant_servicio7 = cant_servicio7;
    }
    leerVenta() {
        return this;
    }
}
/////////////////////// CLASE SERVICIOS /////////////////////////////////////////////

/////////////////////// GENERAR ALMACEN /////////////////////////////////////////////
function generarAlmacen(evt) {
    //Cojo el identificador para cada familia y guardo el seleccionado
    var idFamilia = parseInt(FamiliaSeleccionada.value);

    var cuerpoa = document.querySelector("#cuerpoServicios");
    cuerpoa.innerHTML = "";

    for (i = 0; i < datos.length; i++) {
        
        registro = datos[i];

        //Hago un if en el que solo muestro el que coincida con la familia seleccionada o cuando seleccione todos
        if (registro.tipo == idFamilia || idFamilia == 0){
            linea = document.createElement("tr");
            botonId = document.createElement("button");
            // En el atributo  del button creado paso el artículo seleccionado pedido  
            botonId.registro = registro;
            botonId.addEventListener("click", contratarServicio, true); //Generamos el evento para cada boton

            dato = document.createTextNode(registro.codigo);
            botonId.appendChild(dato);
            Columna = document.createElement("td");
            Columna.appendChild(botonId);
            linea.appendChild(Columna);
            parrafo = document.createElement("p");
            dato = document.createTextNode(registro.descripcion);
            Columna = document.createElement("td");
            Columna.appendChild(dato);
            linea.appendChild(Columna)

            parrafo = document.createElement("p");
            dato = document.createTextNode(registro.precio);
            Columna = document.createElement("td");
            Columna.appendChild(dato);
            linea.appendChild(Columna)

            parrafo = document.createElement("p");
            dato = document.createTextNode(registro.duracion);
            Columna = document.createElement("td");
            Columna.appendChild(dato);
            linea.appendChild(Columna)

            parrafo = document.createElement("p");
            dato = document.createTextNode(registro.direccion);
            Columna = document.createElement("td");
            Columna.appendChild(dato);
            linea.appendChild(Columna)
    
            cuerpoa.appendChild(linea);
        }
    }
}
/////////////////////// GENERAR ALMACEN /////////////////////////////////////////////

/////////////////////// GENERAR TABLA PARA CONTRATAR SERVICIOS /////////////////////////////////////////////
function contratarServicio(event){
    //Cargamos el registro con el que vamos a trabajar al pulsar el botón
    registro=this.registro;

    //Generamos el mapa 
    map = new google.maps.Map(
        document.getElementById('map_canvas'), {
            
        // En el mapa se visualiza el mapa correspondiente a esta latitud, longitud
            center: new google.maps.LatLng(registro.latitud,registro.longitud),//latitud,longitud),//
           // center: new google.maps.LatLng(41.6685198,-3.6886618),//latitud,longitud),//
        zoom: 18, // zoom del mapa
        draggableCursor: 'auto', // forma del cursor
        draggingCursor: 'crosshair',
        mapTypeId: google.maps.MapTypeId.HYBRID // tipo de mama
    });

    event.target.removeEventListener("click", contratarServicio, true);//Quitamos el evento del boton que ya hayamos pulsado (evento generado en el botonId en la funcion generarAlmacen)

    var serviciosContratados=document.querySelector("#cuerpoPedido");

    linea=document.createElement("tr");
    botonId = document.createElement("button");
    botonId.registro = registro;
    botonId.addEventListener("click", centrarMapa, true); //Generamos el evento para cada boton
    
    dato = document.createTextNode(registro.codigo);
    botonId.appendChild(dato);
    Columna = document.createElement("td");
    Columna.appendChild(botonId);
    linea.appendChild(Columna);

    parrafo = document.createElement("p");
    dato = document.createTextNode(registro.descripcion);
    Columna = document.createElement("td");
    Columna.appendChild(dato);
    linea.appendChild(Columna);

    parrafo = document.createElement("p");
    dato = document.createTextNode(registro.precio);
    Columna = document.createElement("td");
    Columna.appendChild(dato);
    linea.appendChild(Columna);

    var ccantidad = document.createElement("input");
    ccantidad.type="text";
    ccantidad.registro = registro;
    ccantidad.precio=registro.precio;

    ccantidad.addEventListener("keyup", calculo_Importe_Linea, false);

    Columna = document.createElement("td");
    Columna.appendChild(ccantidad);
    linea.appendChild(Columna);


    var cimporte = document.createElement("input");
    cimporte.type="text";
    cimporte.disabled="true";
    Columna = document.createElement("td");
    Columna.appendChild(cimporte);
    linea.appendChild(Columna);

    serviciosContratados.appendChild(linea);
}
/////////////////////// GENERAR TABLA PARA CONTRATAR SERVICIOS /////////////////////////////////////////////

/////////////////////// CALCULAR IMPORTE DE CADA SERVICIOS /////////////////////////////////////////////
function calculo_Importe_Linea() {

    articulo=this.registro;
    var cantidad = this.value;
    var precio = articulo.precio;
    var importe = parseFloat(cantidad)*parseFloat(precio);

    var linea = this.parentElement.parentElement;
    var reg = linea.childNodes;
    var importeLinea=reg[4].firstChild;

    var importeAnterior = parseFloat(importeLinea.value);  
    if (isNaN(importeAnterior)) {
        importeAnterior = 0;
    }
    
    importeLinea.value=importe;
    if (isNaN(importeLinea.value)) {
        importeLinea.value = '0';
    }
    if (isNaN(totalpedido)) {
        totalpedido = 0;
    }

    totalpedido = totalpedido + importe - importeAnterior;

    var ctotal = document.querySelector("#total");
    ctotal.value=totalpedido;
}
/////////////////////// CALCULAR IMPORTE DE LOS SERVICIOS /////////////////////////////////////////////
