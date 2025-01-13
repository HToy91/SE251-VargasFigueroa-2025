let person = {
    names: {first: `Jose`, last: `Vargas`},
    age: 33,
    hair: true,
    item: [`apple`, `banana`, `beer`]
}
var p = document.querySelector(`p`)
p.innerHTML = person.names.first

// function getX(obj)
// {
//     return {x:obj.x, y:obj.y}
// }

// coord = {x:100, y:100}
