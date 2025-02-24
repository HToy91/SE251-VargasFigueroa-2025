let fNameInput = document.querySelector(`#first-name`)
let lNameInput = document.querySelector(`#last-name`)
let emailInput = document.querySelector(`#email`)
let phoneInput = document.querySelector(`#phone`)
let submit = document.querySelector(`input[type="button"]`)
let confirmation = document.querySelector(`#confirmation`)
let info = document.querySelector(`#info`)
let span = document.querySelectorAll(`span`)
let inputs = document.querySelectorAll(`input`)
let form = document.querySelector(`#form`)

submit.addEventListener(`click`, e=>{
    var person = {
    fName: fNameInput.value,
    lName: lNameInput.value,
    email: emailInput.value,
    phone: phoneInput.value
    }
    span.forEach((span)=>{
        span.innerHTML = ""
    })
    inputs.forEach((inputs)=>{
        inputs.parentElement.style.color = `black`
    })

    let nameRegex = /^[A-Za-z-\s]+$/
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    let phoneRegex = /^\d{10}$/

    let isValid = true

    if(!nameRegex.test(fNameInput.value)){
        fNameInput.nextElementSibling.innerHTML = `Your first name must not include special characters.`
        fNameInput.parentElement.style.color = `red`

        isValid = false
    }
    if(!nameRegex.test(lNameInput.value)){
        lNameInput.nextElementSibling.innerHTML = `Your last name must not include special characters.`
        lNameInput.parentElement.style.color = `red`

        isValid = false 
    }
    if(!emailRegex.test(emailInput.value)){
        emailInput.nextElementSibling.innerHTML = `Invalid Email.`
        emailInput.parentElement.style.color = `red`

        isValid = false
    }
    if(!phoneRegex.test(phoneInput.value)){
        phoneInput.nextElementSibling.innerHTML = `Invalid Phone Number`
        phoneInput.parentElement.style.color = `red`

        isValid = false
    }
    if(isValid){
        info.innerHTML = `<p>${person.fName} ${person.lName}<br>${person.email}<br>${person.phone.substring(0,3)}-${person.phone.substring(3,6)}-${person.phone.substring(6)}</p>`
        confirmation.style.display = `block`
        form.style.display = `none`
    }
    else{
        confirmation.style.display = `none`
    }

    
})