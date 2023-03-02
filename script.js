// alert("jeeke");
let signupbtn=document.getElementById("signupbtn");
let signinbtn=document.getElementById("signinbtn");
let namefield=document.getElementById("namefield");
let title=document.getElementById("title");
let submitbtn=document.getElementById("submitbtn");
let password=document.getElementById("password")
signinbtn.onclick = function(){
    namefield.style.maxHeight="0";
    title.innerHTML="Sign In";
    signupbtn.classList.add("disable");
    signinbtn.classList.remove("disable");
}

signupbtn.onclick = function(){
    namefield.style.maxHeight="60px";
    title.innerHTML="Sign Up";
    signinbtn.classList.add("disable");
    signupbtn.classList.remove("disable");
}


submitbtn.onclick=function(){
    if(password.value.length<8)
    alert("password length is too short");
}