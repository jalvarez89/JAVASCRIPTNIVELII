document.form1.ciudad.selectedIndex=-1;
document.form1.registrar.onclick = procesar;
document.form1.limpiar.onclick = function (){
    alert(this.value);
}
onfocus= function (){
    this.style.backgroundColor= "yellow"
}
onblur=function (){
    this.style.backgroundColor= "white"
}
document.form1.nombre.onfocus= onfocus;
document.form1.correo.onfocus= onfocus;
document.form1.ciudad.onfocus= onfocus;
document.form1.nombre.onblur= onblur;
document.form1.correo.onblur= onblur;
document.form1.ciudad.addEventListener("blur", onblur);

function procesar(){
    alert(this.value);
    if (validar()){
        alert("Se proceso exitosamente..");
    }
}
function validar(){
    if (!esta_vacio(document.form1.nombre,"Debe escribir el nombre"))
        if (validarcorreo(document.form1.correo))
            if (validar_select(document.form1.ciudad))
                if (validar_opcion(document.form1.sexo))
                    if (validar_check(document.form1.acepto))
                        return true
                    else    
                        return false;
}