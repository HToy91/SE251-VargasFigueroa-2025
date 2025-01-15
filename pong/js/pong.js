//canvas and context
var c = document.querySelector(`#pong`)
var ctx = c.getContext(`2d`)

//timer to make the game run at 60fps
var timer = setInterval(main, 1000/60)

//global friction variable
var fy = .97

let player = [];
let pad = []

player[0] = new Player();
player[1] = new Player()

 
//pad[0] setup
pad[0] = player[0].pad
pad[0].w = 20
pad[0].h = 150
pad[0].x = 0 + pad[0].w/2
pad[0].color = `red`

//pad[1] setup
pad[1] = player[1].pad;
pad[1].w = 20
pad[1].h = 150
pad[1].x = c.width - pad[1].w/2
pad[1].color = `green`

//ball setup
var ball = new Box();
ball.w = 20
ball.h = 20
ball.vx = -2
ball.vy = -2
ball.color = `blue`

function main()
{
    //erases the canvas
    ctx.clearRect(0,0,c.width,c.height)
    
    //pad[0] accelerates when key is pressed 
    if(keys[`w`])
    {
       pad[0].vy += -pad[0].force
    }

    if(keys[`s`])
    {
        pad[0].vy += pad[0].force
    }

    //pad[1] accelerates when key is pressed
    if(keys[`ArrowUp`])
    {
        pad[1].vy += -pad[1].force
    }
    if(keys[`ArrowDown`])
    {
        pad[1].vy += pad[1].force
    }

    //applies friction
    pad[0].vy *= fy
    pad[1].vy *= fy
    //player movement
    pad[0].move();
    pad[1].move();

    //ball movement
    ball.move()

    //pad[0] collision
    if(pad[0].y < 0+pad[0].h/2)
    {
        pad[0].y = 0+pad[0].h/2
    }
    if(pad[0].y > c.height-pad[0].h/2)
    {
        pad[0].y = c.height-pad[0].h/2
    }

    //pad[1] collision
    //prevents bar from passing top
    if(pad[1].y < 0+pad[1].h/2)
    {
        pad[1].y = 0+pad[0].h/2
    }
    //prevents bar from passing bottom
    if(pad[1].y > c.height-pad[1].h/2)
    {
        pad[1].y = c.height-pad[1].h/2
    }

    //ball collision 
    //resets ball if collision with either side
    if(ball.x < 0 || ball.x > 800)
    {
        ball.x = c.width/2
        ball.y  =c.height/2
    }
    if(ball.x > c.width)
    {
        ball.x = c.width
        ball.vx = -ball.vx
    }
    //top collision and returns ball in opposite direction
    if(ball.y < 0)
    {
        ball.y = 0
        ball.vy = -ball.vy
    }
    //bottom collision
    if(ball.y > c.height)
    {
        ball.y = c.height
        ball.vy = -ball.vy
       
    }

    //pad[0] with ball collision
    if(ball.collide(pad[0]))
    {
        ball.x = pad[0].x + pad[0].w/2 + ball.w/2
        ball.vx = -ball.vx;
    }

    //pad[1] with ball collision
    if(ball.collide(pad[1]))
    {
        ball.x = pad[1].x - pad[1].w/2 - ball.w/2
        ball.vx = -ball.vx
    }

    //draw the objects
    pad[0].draw()
    ball.draw()
    pad[1].draw()
}
