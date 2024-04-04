var nombre = document.getElementById('name');
var correo = document.getElementById('email');
var telefono = document.getElementById('phone');
var mensaje = document.getElementById('message');

var er = document.getElementById('submitErrorMessage')

var form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event){
        event.preventDefault();
        console.log("si furula");
        
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const regexMessage = /^[a-zA-Z0-9-_ ]+$/;

        if(nombre.value === null || nombre.value === ''){
            messageEr.push('Error al enviar: Ingresa tu nombre');
        }
        if(correo.value === null || !regexEmail.test(correo.value)){
            messageEr.push('Error al enviar: Ingresa un correo valido');
        }
        if(telefono.value === null){
            messageEr.push('Error al enviar: El número de telefono invalido')
        }
        if(!regexMessage.test(mensaje.value)){
            messageEr.push('Error al enviar: Uso de caracteres especiales en el Mensaje')
        }

        error.innerHTML = messageEr.join(', ');
        return false;
        
    }
)