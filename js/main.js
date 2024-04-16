//password inputs
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

//alert message div
const alertMessage = document.getElementById("password-alert");

document.addEventListener("focusout", (e) => {
  let pass1 = password.value;
  let pass2 = confirmPassword.value;

  if(password.value === "" && confirmPassword.value === ""){
    password.style.outline = "";
    confirmPassword.style.outline = "";
    alertMessage.textContent = "";
    return;
  }

  if(e.target === password){
    if(checkPasswords(pass1, pass2)){
      passwordsMatch();
    }else{
      drawAlerts();
    }
  }

  if(e.target === confirmPassword){
    if(checkPasswords(pass1, pass2)){
      passwordsMatch();
    }else{
      drawAlerts();
    }
  }
});

function checkPasswords(pass1, pass2){
  return pass1 === pass2;
}

function drawAlerts(){
  password.style.outline = "2px solid #e01b1b";
  confirmPassword.style.outline = "2px solid #e01b1b";
  alertMessage.textContent = "*Passwords do not match";
}

function passwordsMatch(){
  password.style.outline = "2px solid #4cf27e";
  confirmPassword.style.outline = "2px solid #4cf27e";
  alertMessage.textContent = "";
}

