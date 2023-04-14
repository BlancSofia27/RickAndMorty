

const validation =(userData) =>{
    const errors ={};
    if (! /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(userData.email)){
        errors.email = 'el email ingresado no es valido'
}
    if (!userData.email){
        errors.email = 'debe ingresar un email';
    }
    if(userData.email.length > 35){
        errors.email = 'el email no debe superar los 35 caracteres'
    }
    if(!/.*\d+.*/.test(userData.password)){
        errors.password = 'la password debe contener al menos un numero'
    }
    if(userData.password.length < 6 && userData.password.length > 10){
        errors.password = 'la password debe tener entre 6 y 10 caracteres'
    }

    return errors;
}



export default validation;