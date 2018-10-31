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
function validarBusqueda(){
    if (document.form2.q.value!=="")
        document.form2.submit();
}
function validarIniciar(){
    if (document.form1.nombre.value==""){
        alert("El Nombre es Obligatorio");
        document.form1.nombre.focus();
        return false;
    }else
        if (document.form1.usuario.value==""){
            alert("El Usuario es Obligatorio");
            document.form1.usuario.focus();
            return false;
        }else
            return confirm("Esta Seguro?");
}