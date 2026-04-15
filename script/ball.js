ball = document.createElement('div')
document.body.appendChild(ball)
LPadel = document.createElement('div')
document.body.appendChild(LPadel)

let LPadelWidth = 10
let LpadelHeight = 100
let LPadelSpeed = 5
let LPadelYPosition = windowHeight / 2 - LPadelHeight / 2
let LPadelXPosition = 70

ballRadius = 30
windowHeight = window.innerHeight
windowWidth = window.innerWidth


let ballXPosition = windowWidth/2 - ballRadius
let ballSpeed = 5
let ballXDirection = 1
let ballYDirection = 1
let ballYPosition = windowHeight/2 - ballRadius

setInterval(moveBall, 10)

createBall()

function  createBall()
{
    document.body.appendChild(ball)
    ball.style.height = `${2 * ballRadius}px`
    ball.style.width =  `${2 * ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "green"
    ball.style.position = "absolute"
    ball.style.top = `${windowHeight/2 - ballRadius}px`
    ball.style.left = `${ballXPosition}px`

}
function moveBall()
{
    ball.style.left =`${ballXPosition}px`
    ball.style.top=`${ballYPosition}px`

    ballXPosition = ballXPosition + ballSpeed * ballXDirection
    ballYPosition = ballYPosition + ballSpeed * ballYDirection

    if (ballXPosition < 0 || ballXPosition > windowHeight -2 * ballRadius)
        {
        ballXDirection = ballXDirection * -1
   }

 if (ballYPosition < 0 || ballYPosition > windowWidth - 2 * ballRadius){
        ballYDirection = ballYDirection * -1
   }
let ballTop = ballYPosition
let ballBottom = ballYPosition + 2 * ballRadius
let ballLeft = ballXPosition
let LPadelTop = LPadelYPosition
let LPadelBottom = LPadelYPosition + LPadelHeight
let LPadelRight = LPadelXPosition + LPadelWidth

if
(
    (ballBottom >= LPadelTop) &&
    (ballTop <= LPadelBottom) &&
    (ballLeft <= LPadelRight) &&
    (ballXDirection == -1)

){
    ballXDirection = ballXdirection * -1
}


}

createLPadel()
function create LPadel()
{
LPadel.style.height = `${LPadelHeight}px`
LPadel.style.width = `${LPadelWidth}px`
LPadel.style.backgroundColor = 'blue'
LPadel.style.position = 'absolute'
LPadel.style.left = `${LPadelXPosition}px`
LPadel.style.top = `${LPadelYPosition}px`

}

wkey = false
skey = false



document.addEventListener('keydown', (event) =>{
    if (event.key == 'w')
    {
        wkey = true
        // LPadelYPosition = LPadelYPsoition - LPadelSpeed
        //move up
    }
    if (event.key == 's'){
        skey = true
        //move down
    }

})
document.addEventListener('keyup',(event) =>{
    if (event.key == 'w')
    {
        wkey = false
    }
    if (event.key == 's'
        skey = false
    )

})

function moveLPadel() {
    if (wkey == true && LPadelYPosition > 0)
    {
        LPadelYPosition = LPadelYPosition - LPadelSpeed

    }
    if (skey == true && LPadelYPosition < windowHeight -)
}
