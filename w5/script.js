function $(_element){
    let e = document.querySelectorAll(_element)// ex: var legal = (age > 18)?True:False
    return (e.length > 1)?e:e[0]
}

$(`button`)[0].addEventListener(`click`, e=>{
    let post = document.createElement(`div`)
    //give the post a .post class
    post.setAttribute(`class`, `post`)
    //create a p
    let p = document.createElement(`p`)
    //add the text from the box into the p
    p.innerHTML = $(`textarea`).value

    let time = document.createElement(`time`)
    time.innerHTML = new Date().toLocaleTimeString()

    post.appendChild(time)
    //add the p to the div
    post.appendChild(p)
    //add the div to the output
    $(`#output`).appendChild(post)

    let checkBox = document.createElement(`input`)
    checkBox.setAttribute(`type`, `checkbox`)
    checkBox.setAttribute(`class`, `hidden`)
    post.appendChild(checkBox)

    // var arr = []
    // Array.from($(`.post`)).forEach((value)=>{//post is nodeList, turns it into array to use forEach
    //     arr.push(value.outerHTML)
    // })
    // console.log(arr)
    var arr = Array.from($(`.post`)).map(value=>value.outerHTML)
    // console.log(JSON.stringify(arr))
    localStorage.setItem(`posts`, JSON.stringify(arr))
})

$(`button`)[1].addEventListener(`click`, e=>{
    
})

$(`#output`).innerHTML = JSON.parse(localStorage.getItem(`posts`)) //posts local storage to output




//var day = [`S`,`M`,`T`]
// var today = new Date()
//console.log(day[today.getDay()])
// console.log(today.getDate())

// var peeps = [`jose`, `brandon`, `paige`, `cooper`]

// var elements = []
// peeps.forEach((value, i)=>{
//     // message += `<p>`
//     // message += (value[0]==`J`)?value.toUpperCase():value
//     // message += `</p>`
//     elements[i] = document.createElement(`p`)
//     // elements[i].setAttribute(`class`, `boogers`)
//     //elements[i].setAttribute(`style`, `color:blue`)
//     var text = document.createTextNode(value)
//     elements[i].appendChild(text)
//     $(`#output`).appendChild(elements[i])
// })
// $(`#output`).removeChild(elements[1])
// console.log(elements)

//$(`#output`).innerHTML = message