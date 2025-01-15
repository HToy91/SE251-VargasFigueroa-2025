var c = document.querySelector(`canvas`);
var ctx = c.getContext(`2d`);
const fps = 1000/60;
var timer = setInterval(main, fps);

class Box{
    constructor()
    {
        this.x = 100;
        this.y = 100;
        this.w = 100;
        this.h = 100;
        this.vx = 5;
        this.vy = 0;  
        this.color = `hotpink`      
    }
    move()
    {
        this.x += this.vx;
        this.y += this.vy;
    }

    draw()
    {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,this.w,this.h);
    }
}
var pad[0] = new Box()
var pad[1] = new Box()
pad[1].color = `green`
pad[1].y=300



var a = false;
var d = false;
var arrowRight = false;
var arrowLeft = false;

document.addEventListener(`keydown`, e=>{
    //google javascript keycode
    if(e.key===`a`)a=true;
    if(e.key===`d`)d=true;
    if(e.key===`ArrowRight`)arrowRight=true;
    if(e.key===`ArrowLeft`)arrowLeft=true;
})

document.addEventListener(`keyup`, e=>{
    //google javascript keycode
    if(e.key===`a`)a=false;
    if(e.key===`d`)d=false;
    if(e.key===`ArrowRight`)arrowRight=false;
    if(e.key===`ArrowLeft`)arrowLeft=false;
})

function main()
{
    ctx.clearRect(0,0, c.width, c.height)
    
    if(a)pad[0].x+=-pad[0].vx;
    if(d)pad[0].x+=pad[0].vx;
    if(arrowLeft)pad[1].x+=-pad[1].vx;
    if(arrowRight)pad[1].x+=pad[1].vx;

    pad[0].draw()
    pad[1].draw()
}