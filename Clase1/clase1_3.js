function calcular(){
    let precio=parseFloat(document.f1.precio.value);
    let cantidad=parseInt(document.f1.cantidad.value);
    let subTotal=precio*cantidad;

    document.f1.subtotal.value=subTotal;
}
var n=0;
function agregar(){
    let resultados=document.getElementById("resultados");
    n++;
    resultados.innerHTML+=n+" - "+document.f1.subtotal.value+"<br>";
    document.f1.reset();
    document.getElementById("resumen").innerHTML=n+" productos procesados"
}