let form = document.querySelector('.login-form')
let email = document.getElementById('email')
let password = document.getElementById('password')
let emailList = document.querySelector('.email-list')

function afterSubmit(e){
  e.preventDefault()
  if(email.value == "" || password.value == ""){
    alert("Incorrect Login Credentials.")
  }
  else{
    let item = document.createElement("li")
    console.log("item")
    item.innerHTML = email.value
    emailList.appendChild(item)
    email.value = ""
    password.value = ""
  }
}

form.addEventListener("submit",afterSubmit)
