    const formulario = document.getElementById('formulario'),
        nombre = formulario.nombre,
        correo = formulario.correo,
        contraseña = formulario.contraseña,
        contraseña2 = formulario.contraseña2,
        sexo = formulario.sexo,
        terminos = formulario.terminos,
        error = document.getElementById('error');

    //Validacion de campos

    let validarNombre = (e) => {
       if(nombre.value == ''|| nombre.value == null){
            console.log('Por favor completa el nombre');
            error.style.display = 'block';
            error.innerHTML = error.innerHTML + '<li> Por favor completa el nombre </li>';
            e.preventDefault();
        } 
   }

    let validarCorreo = (e) => {
        if(correo.value == ''|| correo.value == null){
            console.log('Por favor completa el correo');
            error.style.display = 'block';
            error.innerHTML = error.innerHTML + '<li> Por favor completa el correo </li>';
            e.preventDefault();
        } 
   }

    let validarSexo = (e) => {
       if (sexo.value == '' || sexo.value == null){
            console.log('Por favor escoja el sexo');
            error.style.display = 'block';
            error.innerHTML = error.innerHTML + '<li> Por favor escoja el sexo </li>';
           e.preventDefault();
        } 
   }

   let validarContraseña = (e) => {
       if ((contraseña.value  == '' || contraseña.value == null) && (contraseña2.value == '' || contraseña2.value == null)){
           console.log('Por favor escriba una contraseña');
           error.style.display = 'block';
           error.innerHTML = error.innerHTML + '<li> Por favor escriba una contraseña </li>';
           e.preventDefault();
           
       } else if (contraseña.value != contraseña2.value) {
            console.log('Las contraseñas no coinciden')
            error.style.display = 'block';
            error.innerHTML = error.innerHTML + '<li> Las contraseñas no coinciden </li>';
            e.preventDefault();

        }
   }

    let validarTerminos = (e) => {
       if (terminos.checked == false) {
            console.log('Por favor acepte los terminos y condiciones');
            error.style.display = 'block';
            error.innerHTML = error.innerHTML + '<li> Por favor acepte los terminos y condiciones</li>';
            e.preventDefault();
        } 
   }
    let validarFormulario = (e) => {
        error.innerHTML = '';
        validarNombre(e);
        validarCorreo(e);
        validarContraseña(e);
        validarSexo(e);
        validarTerminos(e);
    }
    formulario.addEventListener('submit', validarFormulario);
