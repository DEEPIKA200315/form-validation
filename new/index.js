const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const passWord = document.getElementById("pass");
const cPassword = document.getElementById("cpwd");

form.addEventListener('submit',(e) => {
    e.preventDefault();
    validateInput();
})

function validateInput(){
    const userNamevalue = userName.value.trim();
    const eMailValue = email.value.trim(); 
    const passWordValue = passWord.value.trim();
    const cPasswordValue = cPassword.value.trim();
    // username validation
    if(userNamevalue == ' '){
        setError(userName,'Username is required')
    }
    else{
        setValid(userName)
    }
    // email validation
    if(eMailValue == ''){
        setError(email,'Email is required')
    }
    else if(!validateEmail(eMailValue)){
        setError(email,'Invalid Email')
    }
    else{
        setValid(email)
    }
    // password validation
    if(passWordValue ===' '){
        setError(passWord,'Password is required')
    }
    else if(passWordValue.length<=8){
        setError(passWord,'Password should be 8 characters')
    }
    else{
        setValid(passWord)
    }
    // validation of confirm password
    if(cPasswordValue ===' '){
        setError(cPassword,'Confirm password is required')
    }
    else if(cPasswordValue !== passWordValue){
        setError(cPassword,'Password does not match')
    }
    else{
        setValid(cPassword)
    }
}


function setError(element,message){
    const inputGroup =element.parentElement;
    const errorElement = inputGroup.queryselector('.error');

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('valid')
}

function setValid(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.queryselector('.error');
    
    errorElement.innerText = ' ';
    inputGroup.classList.add('valid')
    inputGroup.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    );
}

