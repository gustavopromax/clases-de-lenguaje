
//efecto rollover

window.onload = cargarImagenes;
function cargarImagenes() {
    for(var i = 0; i< document.images.length; i++) {
        if(document.images[i].parentNode.tagName == "A"){
            rollover(document.images[i]);
        }
    }
}

function rollover(images) {
    images.imageOff = new Image();
    images.imageOff.src = "https://www.realmadrid.com/img/cc_1280px/marcelo-levanta-copa-ok_20230508101013.jpg";
    images.onmouseout = imageOff;

    images.imageOn = new Image();
    images.imageOn.src = "https://estaticos-cdn.sport.es/clip/d7df1817-6b7b-45c5-9406-6ed829dee70c_alta-libre-aspect-ratio_default_0.jpg";
    images.onmouseover = imageOn
}
function imageOff(){
    this.src = this.imageOff.src;
}
function imageOn(){
    this.src = this.imageOn.src
}

// ffuncionamiento de un reloj

setInterval(() =>{ //EJECUTAR FECHA DE ENTREGA CADA SEGUNDO
    let fecha = new  Date();
    const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Setiembre","Octubre","Noviembre","Diciembre"];
    const dias =["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes"];
    const mes = meses[fecha.getMonth()];
    const dia = dias[fecha.getDay()];
    const diaN = fecha.getDate();
    const horas = (String(fecha.getHours()).length == 2 ) ? fecha.getHours() :`0${fecha.getHours()}`;
    const minutos = (String(fecha.getMinutes()).length == 2) ? fecha.getMinutes() :`0${fecha.getMinutes()}`;
    const segundos = (String(fecha.getSeconds()).length == 2) ? fecha.getSeconds() :`0${fecha.getSeconds()}`;
    
    // mostrando resuldtados
    document.getElementById("dia").innerHTML = dia;
    document.getElementById("mes").innerHTML = `${diaN} ${mes}`;
    document.querySelector("#hora p:nth-child(1)").innerHTML = horas;
    document.querySelector("#hora p:nth-child(2)").innerHTML = minutos;
    document.querySelector("#hora p:nth-child(3)").innerHTML = segundos;

},1000);

