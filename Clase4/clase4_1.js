
function over(){
    var grande=document.getElementById("grande");
    grande.src=this.src;
}
function out(){
    var grande=document.getElementById("grande");
    grande.src="img/sinfoto.jpg"
}
/* for (let i=1;i<=4;i++){
    var img=document.getElementById("img"+i);
    img.onmousedown = over;
    img.onmouseup = out;
} */
var img1=document.getElementById("img1");
img1.onmouseenter=over;
img1.onmouseleave=out;
var img2=document.getElementById("img2");