const canvas = document.getElementById("canvas")
const bouton = document.getElementById("restart")

// récupération du contexte de dessin pour interagir avec le canvas
// il en existe plusieurs (voir mdn), ici on utlise le 2d
const ctx = canvas.getContext("2d")

function drawGrid(){
    ctx.beginPath()
    ctx.lineWidth = 5

    ctx.fillStyle = "#ffffff"
    ctx.fillRect(0, 0, 600, 600)

// c'est ma grille
    ctx.moveTo(200, 0)
    ctx.lineTo(200, 600)

    ctx.moveTo(400, 0)
    ctx.lineTo(400, 600)

    ctx.moveTo(0, 200)
    ctx.lineTo(600, 200)

    ctx.moveTo(0, 400)
    ctx.lineTo(600, 400)

    ctx.stroke()

    // let symbol = "X"
}
drawGrid()

/* Correction William sur une grille 300x300px

function displayCross(x, y){
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x+100, y+100)
    ctx.moveTo(x, y+100)
    ctx.lineTo(x+100, y)
    ctx.stroke()
}

function displayCircle(x, y){
    ctx.beginPath()
    ctx.arc(x+50, y+50, 50, 0, 2*Math.PI)
    ctx.stroke()
}

let turn = "X"

canvas.addEventListener("click", function(e){
    console.log(e.x, e.y)
    
    let coordX = Math.floor(e.x / 100) * 100
    const coordY = Math.floor(e.y / 100) * 100

    let cases = {
    
    }
    const coord = ""+coordX+coordY
    if(cases[coord] === undefined){
        cases[coord] = turn
    }

    if(coordX >= 300){
        coordX = 200
    }

    coordY = Math.min(coordY, 200)

    if (turn === "X"){
        displayCross(coordX, coordY)
        turn = "O"
    } else {
        displayCircle(coordX, coordY)
        turn = "X"
    }

    const wins = [
        [00, 01, 02],
        [10, 11, 12],
        [20, 21, 22],
        [00, 10, 20],
        [20, 21, 22],
        [02, 12, 22],
        [00, 11, 22],
        [21, 11, 02]
    ]

    for(let win of wins){
        if(
            cases[win[0]] === cases[win[1]]
            && cases[win[0]] === cases[win[2]]
            && cases[win[0]] !== undefined
        ){
            console.log("cases[win[0]]" + "a gagné")
        }
    }

})


*/

let symbol = "X"

let casesCliquees = {
    11: "",
    12: "",
    13: "",
    21: "",
    22: "",
    23: "",
    31: "",
    32: "",
    33: ""
}

canvas.addEventListener("click", function(evt){
    const boxX = Math.floor(evt.x/200) // *200 et enlever les "200*" dans la condition
    const boxY = Math.floor(evt.y/200)
    
    if(symbol === "X"){
        ctx.beginPath()
        ctx.moveTo(20+200*boxX, 20+200*boxY)
        ctx.lineTo(180+200*boxX, 180+200*boxY)
        ctx.moveTo(20+200*boxX, 180+200*boxY)
        ctx.lineTo(180+200*boxX, 20+200*boxY)
        ctx.stroke();
        symbol = "O"
    } else {
        ctx.beginPath()
        ctx.ellipse(100+200*boxX, 100+200*boxY, 80, 80, Math.PI / 4, 0, 2 * Math.PI)
        ctx.stroke()
        symbol = "X"
    }
})

bouton.addEventListener("click", drawGrid)
