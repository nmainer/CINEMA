
const borradoFormulario = ()=>{
    const inputsForm = document.getElementsByClassName("peliInput");
for (let i=0 ; i<inputsForm.length; i=i+1){
  inputsForm[i].value = "";
}
};

const botonLimpiado = document.querySelector(".limpiarForm");

botonLimpiado.addEventListener("click", function (event){
    event.preventDefault();
    borradoFormulario();
} );


const botonEnviar = document.querySelector(".cargarPeli");

const enviarFormulario = ()=>{
  const inputs = document.getElementsByClassName("peliInput");
  
  for(let i=0; i<inputs.length;i=i+1){
    if ( inputs[i].value === ""){
      alert ("Todos los campos son obligatorios")
      return;
      
    }
  }
};

botonEnviar.addEventListener("click" , function (event){
  event.preventDefault();
  enviarFormulario();
});