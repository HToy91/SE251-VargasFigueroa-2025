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
var fillOutput = document.querySelectorAll(`.fill + div`)

for(let i=0;i<o.length;i++){
    o[i].fill = fill[i].value
    fillOutput[i].textContent = o[i].fill

    fill[i].addEventListener(`input`, (e)=>{
        o[i].fill = fill[i].value
        fillOutput[i].textContent = o[i].fill
    })
}

/*---------
    Program the six key inputs to do the following:
    . Display the correct key names for each player   
    . using a `keydown` event
        .Display the correct key name in the input
        .Change the player's key to the value of the input
        .Show the player's key in the output div 
-----------*/
var u = document.querySelectorAll(`.u`)
var d = document.querySelectorAll(`.d`)
var s = document.querySelectorAll(`.s`)

for(let i=0;i<o.keys.length;i++){
    u.document.addEventListener(`keydown`,(e)=>{
        u[i].value = o[i].keys[`u`]
    })
}