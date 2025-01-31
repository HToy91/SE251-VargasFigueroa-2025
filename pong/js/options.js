var optionsButton = document.querySelector(`button`)
var sides = document.querySelector(`.sides`)
var fill = document.querySelectorAll(`.fill`)
var fOutput = document.querySelectorAll(`.fOutput`)
var u = document.querySelectorAll(`.u`)
var d = document.querySelectorAll(`.d`)
var uOutput = document.querySelectorAll(`.uOutput`)
var dOutput = document.querySelectorAll(`.dOutput`)
/*--------
    Make the Options Button 
    . on click
    . show or hide the `.sides` div
---------*/
optionsButton.addEventListener(`click`, (e)=>{
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

for(let i = 0; i < fill.length; i++)
    {
        pad[i].color = fill[i].value
        fOutput[i].textContent = pad[i].color

        fill[i].addEventListener(`input`, (e)=>{
        pad[i].color = fill[i].value
        fOutput[i].textContent = fill[i].value
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

for(let i = 0; i <u.length; i++)
{
    u[i].value = player[i].keys[`u`]
    d[i].value = player[i].keys[`d`]
    uOutput[i].innerHTML = u[i].value
    dOutput[i].innerHTML = d[i].value

    u[i].addEventListener(`change`, (e)=>{
        player[i].keys.u = u[i].value
        uOutput[i].innerHTML = player[i].keys[`u`]
    })
    d[i].addEventListener(`change`, (e)=>{
        player[i].keys.d = d[i].value
        dOutput[i].innerHTML = player[i].keys[`d`]
    })
}