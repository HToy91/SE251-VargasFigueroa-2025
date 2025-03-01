//canvas and context
var c = document.querySelector(`#pong`)
var ctx = c.getContext(`2d`)

//timer to make the game run at 60fps
var timer = setInterval(main, 1000/60)

//global friction variable
var fy = .97

var player1Score = 0
var player2Score = 0

let player = [];
let pad = []
var playerScore = [0,0]

var states = []
var timer, currentState

player[0] = new Player();
player[1] = new Player()

 
//pad[0] setup
pad[0] = player[0].pad
pad[0].w = 20
pad[0].h = 150
pad[0].x = 0 + pad[0].w/2
pad[0].color = `red`

//pad[1] setup
player[1].keys = {u: `ArrowUp`, d: `ArrowDown`, s: 'd'}
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

states[`pause`] = function(){
    o.forEach(function (i){
        i.draw()
    })
    if(keys[`Escape`])
    {
        currentState =`game`
    }
   
}
function main()
{
    //erases the canvas
    ctx.clearRect(0,0,c.width,c.height)

    //ball movement
    ball.move()

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
    let score = document.querySelectorAll(`#score div`)

    for (let i = 0;i < score.length;i++)
    {
        if(keys[player[i].keys.u])
            {
               pad[i].vy += -pad[i].force
            }
        if(keys[player[i].keys.d])
            {
                pad[i].vy += pad[i].force
            }
        //pad collision
        if(pad[i].y < 0 + pad[i].h/2)
            {
                pad[i].y = 0+pad[i].h/2
            }
            if(pad[i].y > c.height-pad[i].h/2)
            {
                pad[i].y = c.height-pad[i].h/2
            }

        //applies friction
        pad[i].vy *= fy
        //player movement
        pad[i].move();

        //AI tracking for player 2
        // var dy = ball.y - pad[1].y
        // pad[1].vy = dy * .05

        if(ball.x < 0)
        {
            playerScore[1] ++
            ball.x = c.width / 2
            console.clear()
            console.log(`${playerScore[0]} | ${playerScore[1]}`)
        }
        if(ball.x > 800)
        {
            playerScore[0] ++
            ball.x = c.width / 2
            console.clear()
            console.log(`${playerScore[0]} | ${playerScore[1]}`)
        }   
        score[i].textContent = playerScore[i]

        //draw the objects
        pad[i].draw()
    }
    ball.draw()
}
