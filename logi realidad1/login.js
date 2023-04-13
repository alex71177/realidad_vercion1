



function enviarFormulario() {

	window.open("index.html"); 
	
	} 
	let porcentajes = document.getElementById("porcentajes")
	let cargado= document.getElementById("cargado")
  let cantidad=0;
  
	let tiempo= setInterval(() => {
	  cantidad +=2
	cargado.style.width= "cantidad"
  
  if (cantidad ==100) {
   
	setInterval(tiempo)
  }
	}, 200);


function audiobienvenida(e) {
	if (audiobienvenida == "si") {

		window.open("realidad.html"); 
		
	}
	
}
