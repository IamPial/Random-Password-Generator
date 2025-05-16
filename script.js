//create a list of password
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const specialSymbol = "!@#$%^&*()_+-/[]{}|?.,;:~`=";
const length = 15;
const allChars = upperCase + lowerCase + number + specialSymbol;

//global scope for copy message
let message = null;

//finding all the necessary elements
const copyFile = document.getElementById('copyImg');
const output = document.getElementById('output');
const generatePass = document.getElementById('generate-pass');



//add an eventListener
generatePass.addEventListener('click', function(){
   generateRandomPass()
})

//generate random password
function generateRandomPass(){
    let randomPass = '';
    
    randomPass += upperCase[Math.floor(Math.random() *  upperCase.length)];
    randomPass += lowerCase[Math.floor(Math.random() *  lowerCase.length)];
    randomPass += number[Math.floor(Math.random() *  number.length)];
    randomPass += specialSymbol[Math.floor(Math.random() *  specialSymbol.length)];

    while(length > randomPass.length){
        randomPass += allChars[Math.floor(Math.random()* allChars.length)];
    }
    output.value = randomPass
}
output.value = '';




copyFile.addEventListener('click', function(){

    if(message !== null){
        message.remove();
        message = null;
    }

    if(output.value === ''){
       alert('You must generate a password')
    }
    else{
        navigator.clipboard.writeText(output.value)
        copyMessage('Your password is copied!');
    }
    
})

function copyMessage(msg){
    message = document.createElement('div');
    message.innerHTML = msg;
    message.className = 'copy-message copy-message-slide-in';

    message.addEventListener('click', function(){
        message.classList.remove('copy-message-slide-in');
        message.classList.add('copy-message-slide-out');
        message.addEventListener('animationend', function(){
            message.remove();
            message = null;
        })
    })

    //automatically remove after 2 seconds
    setTimeout(()=>{
        if(message){
            message.classList.remove('copy-message-slide-in');
            message.classList.add('copy-message-slide-out');
            if(message){
                message.addEventListener('animationend', function(){
                   message.remove();
                   message = null;
        })
            }
        }
    }, 2000)

    document.body.appendChild(message);
}

