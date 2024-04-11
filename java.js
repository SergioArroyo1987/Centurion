

function mostrar(categoria){
    for(let a=0;a<4;a++){
        let pizza=document.querySelector('.contenido__pizza');
        pizza.classList.add("oculto");
        let chapatones=document.querySelector('.contenido__chapatones');
        chapatones.classList.add("oculto");
        let hamburguesas=document.querySelector('.contenido__hamburguesas');
        hamburguesas.classList.add("oculto");
        let otros=document.querySelector('.contenido__otros');
        otros.classList.add("oculto");

    }
    
   const productos=document.querySelector(categoria);

   console.log(categoria);
    if(productos.classList.contains("oculto")){
    
    productos.classList.remove("oculto");
    }
   
    
}
document.getElementById("telefono").addEventListener("click",function(){
    var numero="629772756";
    var url="tel:"+numero;
    window.location.href=url;
})

document.addEventListener("DOMContentLoaded",(event)=>{
    let button=document.querySelector(".hamburguesa__click");
    console.log(button);
    let aside=document.querySelector(".menu__lista");
    let bars=document.querySelector(".fa-bars");
    let x=document.querySelector(".fa-x");
    let phone=document.querySelector(".fa-phone");
    button.addEventListener("click",(event)=>{
        
        let visible=document.querySelector(".menu__lista--visible");
        console.log(visible);
        if(!visible){
            console.log("Hola1");
            aside.classList.remove("menu__lista--oculto");
            aside.classList.add("menu__lista--visible");
            bars.style.opacity=0;
            phone.style.opacity=0;
            x.style.opacity=1;
        }else{
            console.log("Hola");
            aside.classList.remove("menu__lista--visible");
            aside.classList.add("menu__lista--oculto");
            bars.style.opacity=1;
            phone.style.opacity=1;
            x.style.opacity=0;

        }
    })
});
//Banner mostrar a los 5 segundos de cargar página
window.addEventListener('load',function(){
    setTimeout(function(){
        window.open("/centurion/src/assets/Videos/pesto.mp4","_parent","width=screen.width/2","height=50px");
        
    },10000);
})


