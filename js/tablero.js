function Tabla() {
    for (let i = 0; i <91; i++) {
      console.log('si vale');
    // crea un nuevo div 
    // y añade contenido 
    var newDiv = document.createElement("div"); 
    newDiv.className += "grid-item";
    newDiv.id += "div"+i;
    console.log(newDiv);
    var newContent = document.createTextNode(i); 
    newDiv.appendChild(newContent); //añade texto al div creado. 
  
    // añade el elemento creado y su contenido al DOM 
    var currentDiv = document.getElementById("grid-container");
    
    currentDiv.appendChild(newDiv); 
    //AQUI OCULTO EL BOTON
    var botonTabla = document.getElementById('botonTabla');
    botonTabla.style.display="none";
  
    //AQUI MUESTRO EL BOTON JUGAR
    var btnJugar=document.getElementById('btnJugar');
    btnJugar.style.display='block';
      
    }
  }