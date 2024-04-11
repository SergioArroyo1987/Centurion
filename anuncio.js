window.addEventListener("DOMContentLoaded",function(){
    setTimeout(function(){
       document.querySelector(".home__anuncio").style.display="block";
       document.querySelector(".anuncio__boton").style.display="block";
    },1000);
});
document.querySelector(".anuncio__boton").addEventListener("click",function(){
    
       document.querySelector(".home__anuncio").style.display="none";
       document.querySelector(".anuncio__boton").style.display="none";

});