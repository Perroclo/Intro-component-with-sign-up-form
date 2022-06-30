
const nombre=document.getElementById("btn_name");
const apellido=document.getElementById("btn_lastname");
const email=document.getElementById("btn_email");
const password=document.getElementById("btn_password");
const form=document.getElementById("formulario");
const parrafo=document.getElementById("warnings");


form.addEventListener ("submit", e=>{

e.preventDefault()
let warnings=""
let entrar=false
let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
parrafo.innerHTML = ""

if (nombre.value.length <6) {
   warnings+=`El nombre es muy corto <br>`
   entrar=true
} 

if (apellido.value.length <6){

    warnings+=`El apellido es muy corto <br>`
        entrar=true
    }

if (!regexEmail.test(email.value)){

warnings+=`El email no es valido <br>`
    entrar=true
}
    
if (password.value.length <6){

    warnings+=`La contraseña no es valida <br>`
    entrar=true

}

if (entrar)
{
parrafo.innerHTML = warnings
}
else{

parrafo.innerHTML = "Enviado"

}
})







/*var formulario=document.getElementById('formulario');
var inputs=document.querySelectorAll('.boton');

const expresiones= {

    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    
    }

const validarFormulario = (e)=>{

switch  (e.target.name) {

    case "name":
        validarCampo(expresiones.usuario,e.target,'name');
    break;

    case "lastname":
    
        
    break;

    case "email":
        
    break;

    case "passcode":
        
    break;

}

}


const validarCampo = (expresion, input,campo)=>{

    if (expresion.test(input.value)) {
        document.getElementById(`btn_${campo}`).classList.remove('incorrecto');
        document.querySelector(`.input_error_${campo}`).classList.remove ('input_error-activo');
        

    } else{

        document.getElementById(`btn_${campo}`).classList.add('incorrecto');
        document.querySelector(`.input_error_${campo}`).classList.add ('input_error-activo');   
    }



}

inputs.forEach((input)=>{

    input.addEventListener('keyup',validarFormulario);
    input.addEventListener('blur',validarFormulario)


})     
*/
