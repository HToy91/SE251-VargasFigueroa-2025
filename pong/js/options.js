var optionsButton = document.querySelector(`button`)
var sides = document.querySelector(`.sides`)
var fill = document.querySelectorAll(`.fill`)
var output = document.querySelectorAll(`.output`)
var input = document.querySelectorAll(`input`)
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
    }

fill[0].addEventListener(`input`, (e)=>{
    pad[0].color = fill[0].value
    output[0].textContent = fill[0].value
    output[0].textContent = fill[0].value
})
fill[1].addEventListener(`input`, (e)=>{
    pad[1].color = fill[1].value
    output[6].textContent = fill[1].value
    output[6].textContent = fill[1].value
})

    

/*---------
    Program the six key inputs to do the following:
    . Display the correct key names for each player   
    . using a `keydown` event
        .Display the correct key name in the input
        .Change the player's key to the value of the input
        .Show the player's key in the output div 
-----------*/
output[2].innerHTML = player[0].keys[`u`]
output[3].innerHTML = player[0].keys[`d`]
input[2].value = player[0].keys[`u`]
input[3].value = player[0].keys[`d`]

