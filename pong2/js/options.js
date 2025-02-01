/*--------
    Make the Options Button 
    . on click
    . show or hide the `.sides` div
---------*/
var options = document.querySelector(`button`)
var sides = document.querySelector(`.sides`)

options.addEventListener(`click`,(e)=>{
    sides.classList.toggle(`hidden`)
})
/*---------
    Program the two fill inputs to do the following:
    . Display the correct colors on the inputs and outputs and paddles    
    . using an `input` event
        . Change the player's fill property to the value of the input
        . Change the pad's fill property  to the player's fill property
        . Show the fill's hex code in the output div 

-----------*/
var fill = document.querySelectorAll(`.fill`)
var fillOutput = document.querySelectorAll(`.fill + .output`)

var u = document.querySelectorAll(`.u`)
var uOutput = document.querySelectorAll(`.u + .output`)

var s = document.querySelectorAll(`.s`)
var sOutput = document.querySelectorAll(`.s + .output`)

var d = document.querySelectorAll(`.d`)
var dOutput = document.querySelectorAll(`.d + .output`)

var input = document.querySelectorAll(`input`)//tried to pause for each input didn't work

for(let i=0;i<input.length;i++){
    o[i].fill = fill[i].value
    fillOutput[i].textContent = o[i].fill

    fill[i].addEventListener(`input`, (e)=>{
        o[i].fill = fill[i].value
        fillOutput[i].textContent = o[i].fill
    })

    /*---------
    Program the six key inputs to do the following:
    . Display the correct key names for each player   
    . using a `keydown` event
        .Display the correct key name in the input
        .Change the player's key to the value of the input
        .Show the player's key in the output div 
-----------*/
    u[i].value = player[i].keys[`u`]
    uOutput[i].innerHTML = u[i].value

    d[i].value = player[i].keys[`d`]
    dOutput[i].innerHTML = d[i].value

    s[i].value = player[i].keys[`s`]
    sOutput[i].innerHTML = s[i].value

    u[i].addEventListener(`keydown`, (e)=>{
        u[i].value = e.key
        player[i].keys.u = u[i].value
        uOutput[i].innerHTML = player[i].keys[`u`]
    })
    u[i].addEventListener(`focus`, (e)=>{
        currentState = `pause`
    })

    d[i].addEventListener(`keydown`, (e)=>{
        d[i].value = e.key
        player[i].keys.d = d[i].value
        dOutput[i].innerHTML = player[i].keys[`d`]
    })
    d[i].addEventListener(`focus`, (e)=>{
        currentState = `pause`
    })

    s[i].addEventListener(`keydown`, (e)=>{
        s[i].value = e.key
        player[i].keys.s = s[i].value
        sOutput[i].innerHTML = player[i].keys[`s`]
    })
    s[i].addEventListener(`focus`, (e)=>{
        currentState = `pause`
    })
}