/*--------
    Make the Options Button 
    . on click
    . show or hide the `.sides` div
---------*/
var optionsButton = document.querySelector(`button`)
var sides = document.querySelector(`.sides`)

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
var input = document.querySelectorAll(`.fill`)
var output = document.querySelectorAll(`.output`)

for(let i = 0; i < input.length; i++)
    {
        pad[i].color = input[i].value

        input[i].addEventListener(`input`, (e)=>{
            pad[i].color = input[i].value
            output[i].textContent = input[i].value
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
