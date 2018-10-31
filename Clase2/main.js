function convertirMayusculas(id){
   var x=document.getElementById(id);
        if (x!=undefined){
            x.value=x.value.toUpperCase();
            x.style.backgroundColor="white";
   }
}
function convertirMinusculas(id){
    var x=document.getElementById(id);
        if (x!=undefined){
            x.value=x.value.toLowerCase();
            x.style.backgroundColor="green";
   }
}