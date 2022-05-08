let userName=document.getElementById("texUser");
let email=document.getElementById("txtEmail");
let pwd=document.getElementById("txtPwd");
let conPwd=document.getElementById("txtConPwd");
let form=document.querySelector("form")

function validateInput() {
   //check user is empty
   if(userName.value.trim()===""){
     onerror(userName,"Cannot be Empty");
   }else{
    onSuccess(userName);

   }
}
document.querySelector("button")
.addEventListener("click",(event)=>{
   event.preventDefault();
     validateInput();
});
//Function for check error from user
function onSuccess(input){
       let parent=input.parentElement;
       let message=parent.querySelector("small");
       message.style.visibility="hidden";
      parent.classList.remove("error");
      parent.classList.add("success");
}

function onerror(input, mesage) {
    let parent=input.parentElement;
    let  message=parent.querySelector("small");
    message.style.visibility="visible";
    message.innerText=mesage;
    parent.classList.add("error");
      parent.classList.remove("success");
    
}