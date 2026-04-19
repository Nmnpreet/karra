// windowHeight = window.innerHeight
// windowWidth = window.innerWidth
// ball = document.createElement('div')
// document.body.appendChild(ball)
// ballRadius = 30

// let ballXPosition = windowWidth/2 - ballRadius
// let ballSpeed = 5
// let ballXDirection = 1
// let ballYDirection = 1
// let ballYPosition = windowHeight/2 - ballRadius


// LPadel = document.createElement('div')
// document.body.appendChild(LPadel)
// let LPadelWidth = 10
// let LPadelHeight = 100
// let LPadelSpeed = 5
// let LPadelYPosition = windowHeight / 2 - LPadelHeight / 2
// let LPadelXPosition = 70





// setInterval(moveBall, 10)

// createBall()

// function createBall()
// {
//     document.body.appendChild(ball)
//     ball.style.height = `${2 * ballRadius}px`
//     ball.style.width =  `${2 * ballRadius}px`
//     ball.style.borderRadius = "50%"
//     ball.style.backgroundColor = "green"
//     ball.style.position = "absolute"
//     ball.style.top = `${windowHeight/2 - ballRadius}px`
//     ball.style.left = `${ballXPosition}px`

// }
// function moveBall()
// {
//     ball.style.left =`${ballXPosition}px`
//     ball.style.top=`${ballYPosition}px`

//     ballXPosition = ballXPosition + ballSpeed * ballXDirection
//     ballYPosition = ballYPosition + ballSpeed * ballYDirection

//     if (ballXPosition < 0 || ballXPosition > windowHeight -2 * ballRadius)
//         {
//         ballXDirection = ballXDirection * -1
//    }

//  if (ballYPosition < 0 || ballYPosition > windowWidth - 2 * ballRadius){
//         ballYDirection = ballYDirection * -1
//    }
// let ballTop = ballYPosition
// let ballBottom = ballYPosition + 2 * ballRadius
// let ballLeft = ballXPosition
// let LPadelTop = LPadelYPosition
// let LPadelBottom = LPadelYPosition + LPadelHeight
// let LPadelRight = LPadelXPosition + LPadelWidth

// if
// (
//     (ballBottom >= LPadelTop) &&
//     (ballTop <= LPadelBottom) &&
//     (ballLeft <= LPadelRight) &&
//     (ballXDirection == -1)

// )
// {
//     ballXDirection = ballXdirection * -1
// }


// }

// createLPadel()
// function createLPadel()
// {
// LPadel.style.height = `${LPadelHeight}px`
// LPadel.style.width = `${LPadelWidth}px`
// LPadel.style.backgroundColor = 'blue'
// LPadel.style.position = 'absolute'
// LPadel.style.left = `${LPadelXPosition}px`
// LPadel.style.top = `${LPadelYPosition}px`

// }

// wkey = false
// skey = false



// document.addEventListener('keydown', (event) =>{
//     if (event.key == 'w')
//     {
//         wkey = true
//         // LPadelYPosition = LPadelYPsoition - LPadelSpeed
//         //move up
//     }
//     if (event.key == 's'){
//         skey = true
//         //move down
//     }

// })
// document.addEventListener('keyup',(event) =>{
//     if (event.key == 'w')
//     {
//         wkey = false
//     }
//     if (event.key == 's')
//     {
//         skey = false

//     }
// })

// function moveLPadel() {
//     if (wkey == true && LPadelYPosition > 0)
//     {
//         LPadelYPosition = LPadelYPosition - LPadelSpeed

//     }
//     if (skey == true && LPadelYPosition < windowHeight - LPadelHeight)
//     {
//         LPadelYPosition = LPadelYPosition + LPadelSpeed
//     }
//     LPadel.style.top = `${LPadelYPosition}px`

// }

// function animate ()
// {
//     moveBall()
//     moveLPadel()
//     requestAnimationFrame(animate)
// }

// animate()

windowHeight = window.innerHeight
windowWidth = window.innerWidth

ball = document.createElement('div')
document.body.appendChild(ball)

ballRadius = 10
let ballXPosition = windowWidth / 2
let ballYPosition = windowHeight / 2
let ballSpeed = 5
let ballXDirection = 1
let ballYDirection = 1

LPadel = document.createElement('div')
document.body.appendChild(LPadel)

let LPadelWidth = 10
let LPadelHeight = 100
let LPadelSpeed = 5
let LPadelYPosition = windowHeight / 2 - LPadelHeight / 2
let LPadelXPosition = 30

RPadel = document.createElement('div')
document.body.appendChild(RPadel)

let RPadelWidth = 10
let RPadelHeight = 100
let RPadelYPosition = windowHeight / 2 - RPadelHeight / 2
let RPadelXPosition = windowWidth - 40

let leftScore = 0
let rightScore = 0

// score = document.createElement('h1')
// document.body.appendChild(score)
// score.style.textAlign = "center"

createBall()
createLPadel()
createRPadel()

function createBall() {
    ball.style.height = `${2 * ballRadius}px`
    ball.style.width = `${2 * ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "green"
    ball.style.position = "absolute"
}

function createLPadel() {
    LPadel.style.height = `${LPadelHeight}px`
    LPadel.style.width = `${LPadelWidth}px`
    LPadel.style.backgroundColor = 'blue'
    LPadel.style.position = 'absolute'
    LPadel.style.left = `${LPadelXPosition}px`
}

function createRPadel() {
    RPadel.style.height = `${RPadelHeight}px`
    RPadel.style.width = `${RPadelWidth}px`
    RPadel.style.backgroundColor = 'red'
    RPadel.style.position = 'absolute'
    RPadel.style.left = `${RPadelXPosition}px`
}

function moveBall() {
    ballXPosition += ballSpeed * ballXDirection
    ballYPosition += ballSpeed * ballYDirection

    if (ballYPosition < 0 || ballYPosition > windowHeight - 2 * ballRadius) {
        ballYDirection *= -1
    }

    if (
        ballXPosition <= LPadelXPosition + LPadelWidth &&
        ballYPosition + 2 * ballRadius >= LPadelYPosition &&
        ballYPosition <= LPadelYPosition + LPadelHeight
    ) {
        ballXDirection = 1
    }

    if (
        ballXPosition + 2 * ballRadius >= RPadelXPosition &&
        ballYPosition + 2 * ballRadius >= RPadelYPosition &&
        ballYPosition <= RPadelYPosition + RPadelHeight
    ) {
        ballXDirection = -1
    }

    if (ballXPosition < 0) {
        rightScore++
        resetBall()
    }

    if (ballXPosition > windowWidth) {
        leftScore++
        resetBall()
    }

    ball.style.left = `${ballXPosition}px`
    ball.style.top = `${ballYPosition}px`
}

function resetBall() {
    ballXPosition = windowWidth / 2
    ballYPosition = windowHeight / 2
    ballXDirection *= -1
}

wkey = false
skey = false
upkey = false
downkey = false

document.addEventListener('keydown', (event) => {
    if (event.key == 'w') wkey = true
    if (event.key == 's') skey = true
    if (event.key == 'ArrowUp') upkey = true
    if (event.key == 'ArrowDown') downkey = true
})

document.addEventListener('keyup', (event) => {
    if (event.key == 'w') wkey = false
    if (event.key == 's') skey = false
    if (event.key == 'ArrowUp') upkey = false
    if (event.key == 'ArrowDown') downkey = false
})

function moveLPadel() {
    if (wkey && LPadelYPosition > 0) {
        LPadelYPosition -= LPadelSpeed
    }
    if (skey && LPadelYPosition < windowHeight - LPadelHeight) {
        LPadelYPosition += LPadelSpeed
    }
    LPadel.style.top = `${LPadelYPosition}px`
}

function moveRPadel() {
    if (upkey && RPadelYPosition > 0) {
        RPadelYPosition -= LPadelSpeed
    }
    if (downkey && RPadelYPosition < windowHeight - RPadelHeight) {
        RPadelYPosition += LPadelSpeed
    }
    RPadel.style.top = `${RPadelYPosition}px`
}

function animate() {
    moveBall()
    moveLPadel()
    moveRPadel()



    requestAnimationFrame(animate)
}

animate()
