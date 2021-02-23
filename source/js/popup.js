
var loginLink=document.querySelector(".login-link")
var popupLogin=document.querySelector(".user-login")
var modalClose=document.querySelector(".modax-close")
/*var modalClose=document.querySelector(".modal-overlay")*/
var loginForm=popupLogin.querySelector("[name=login]")
var passwordForm=popupLogin.querySelector("[name=password]")
var formForm=popupLogin.querySelector("form")
var storageLogin=localStorage.getItem("login")
var storagePassword=localStorage.getItem("password")

loginLink.addEventListener("click", function (abc) {
    abc.preventDefault();
    popupLogin.classList.add("modal-show");

    if (storageLogin) {
        loginForm.value=storageLogin
        passwordForm.focus()
    } else {
        loginForm.focus();
    }


})

modalClose.addEventListener("click", function (abc) {
    abc.preventDefault();
    popupLogin.classList.remove("modal-show");
    popupLogin.classList.remove("modal-error")
})

formForm.addEventListener("submit", function (abc) {
    if(!loginForm.value || !passwordForm.value) {
        abc.preventDefault()

        console.log(loginForm.value)
        console.log(passwordForm.value)
        console.log("Нужны данные логина и пароля")
        popupLogin.classList.remove("modal-error")
        popupLogin.offsetWidth = popupLogin.offsetWidth
        popupLogin.classList.add("modal-error")
    } else {
        localStorage.setItem("login", loginForm.value)
        localStorage.setItem("password", passwordForm.value)
    }
})

window.addEventListener("keydown", function (abc) {
    if (abc.keyCode === 27) {

        if (popupLogin.classList.contains("modal-show")) {
            abc.preventDefault()
            popupLogin.classList.remove("modal-show")
            popupLogin.classList.remove("modal-error")
        }
    }
})


/**********************************************************************************************/

