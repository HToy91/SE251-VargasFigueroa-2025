function $(_element){
    let e = document.querySelectorAll(_element)// ex: var legal = (age > 18)?True:False
    return (e.length > 1)?e:e[0]
}
//add
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
    post.prepend(checkBox)//puts check box at the beginning of div
    savePosts()
    // var arr = []
    // Array.from($(`.post`)).forEach((value)=>{//post is nodeList, turns it into array to use forEach
    //     arr.push(value.outerHTML)
    // })
    // console.log(arr)
    // var arr = Array.from($(`.post`)).map(value=>value.outerHTML)
    // // console.log(JSON.stringify(arr))
    // localStorage.setItem(`posts`, JSON.stringify(arr))
    savePosts()
})
//select
$(`button`)[1].addEventListener(`click`, e=>{
    Array.from(document.querySelectorAll(`.post input[type="checkbox"]`)).map(checkBox=>checkBox.classList.toggle(`hidden`)
    )
    $(`button`)[2].classList.toggle(`hidden`)
    $(`button`)[3].classList.toggle(`hidden`)
})
//select all
$(`button`)[2].addEventListener(`click`, e=>{
    let checkboxes = Array.from(document.querySelectorAll(`.post input[type="checkbox"]`))
    let allChecked = checkboxes.every(checkBox=>checkBox.checked)
    
    //toggle to opposite state(selected or unselected)
    checkboxes.map(checkBox=>checkBox.checked = !allChecked)

    // update button text
    $(`button`)[2].textContent = allChecked? `Select All` : `Unselect All`
})
//delete
$(`button`)[3].addEventListener(`click`, e=>{
    Array.from(document.querySelectorAll(`.post`)).filter(post=>post.querySelector(`input[type="checkbox"]:checked`)).map(post=>post.remove())
    savePosts()
})
function savePosts(){
        var arr = Array.from(document.querySelectorAll(`.post`)).map(value=>value.outerHTML)
        //arr.push(post .outerHTML)
        localStorage.setItem(`posts`, JSON.stringify(arr))
        
    }
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