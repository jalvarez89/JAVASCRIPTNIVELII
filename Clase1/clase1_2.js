setInterval("mostrarNav()",1000);
function mostrarNav(){
    let nav=document.getElementById("nav");
    if (nav==undefined){
        console.log("Error")
    }else{

        if(nav.style.display=="none")
        nav.style.display="block";
        else
        nav.style.display="none";
    }
}
function modificarBanner(){
    mostrarNav();
    let banner=document.getElementById("banner");
    if (banner==undefined){
        console.log("Error. No se Encuentra ID Banner")
    }else{
        banner.innerHTML=+"<h1>Esto es Nuevo</h1>";
        banner.style.backgroundColor="red"
    }
}
function modificarTexto(){
    let texto=document.getElementById("text1");
    if(text1==undefined){
        console.log("Error, No se Encuentra el ID")
    }else{
        text1.innerHTML="Prueba";
    }
}