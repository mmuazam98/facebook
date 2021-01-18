let form = document.querySelector('.login-form')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let emailList = document.querySelector('.email-list')
form.onsubmit = function(){
  if (email.value == "" || password.value == ""){
    alert("Incorrect Login Credentials!!")
    return false
  }
  else{
    let item = document.createElement("li")
    item.innerHTML = email.value
    emailList.appendChild(item)
    email.value = ""
    password.value = ""
    return false
  }
}
