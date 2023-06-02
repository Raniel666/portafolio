document,addEventListener('DOMContentLoaded',()=>{
    cargarPortafolio();
});

function cargarPortafolio(){
    fetch('datos.json')
    .then((respuesta)=>respuesta.json())
    .then(resultado=>Acceder(resultado.portafolio))
}

function Acceder(datos){
    let template ='';
    datos.forEach(portafolio=>{
        console.log(portafolio)
    template+=`
    <div class="elemento">
        <img src="img/${portafolio.id}.jpg" alt="">
        <div class="contenido">
            <h3>${portafolio.nombre}</h3>
            <p>${portafolio.desc}</p>
        </div>
    </div>
    
    `;
    
    })
    
    document.querySelector('#listado').innerHTML=template;

}