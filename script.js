const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const error = document.getElementsByClassName('error')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    //get the values from inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
   
    if(usernameValue===''){
        setErrorFor(username,'Username cannot be blank');
    }
    else
    {
        setSuccessfor(username);
    }
}

function setErrorFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    
   
    
}