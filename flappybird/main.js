document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    const doodler = document.createElement('div')
    let doodlerLeftSpace = 50
    let doodlerBottomSpace = 250
    let isGameOver = false
    let platformCount = 5
    let platforms = []
    let upTimerId
    let downTimerId

    
    class Platform {
        constructor (newPlatBottom){
            this.bottom = newPlatBottom                 //
            this.left = Math.random() * 315             // grid width = 400, platform width 85, so left spacing of 315 
            this.visual = document.createElement('div') //

            const visual = this.visual                  //
            visual.classList.add('Platform')            //
            visual.style.left = this.left + 'px'        //
            visual.style.bottom = this.bottom + 'px'    //
            grid.appendChild(visual)                    // adds visual to grid 
        }
    }

    function createPlatforms () {
        for (let i = 0; i < platformCount; i++){
            let platformGap = 600 / platformCount;        // space between platforms
            let newPlatBottom = 100 + i * platformGap;    // using for loop to increment gap space 
            let newPlatform = new Platform(newPlatBottom);// 
            platforms.push(newPlatform)                   //pushes new platforms to platforms array established outside of function above
            console.log(platforms)
        }
    }

    function createDoodler(){
        grid.appendChild(doodler);
        doodler.classList.add('doodler'); 
        doodler.style.left = doodlerLeftSpace +'px';
        doodler.style.bottom = doodlerBottomSpace +'px';
    }

function movePlatforms() {                               //
    if (doodlerBottomSpace > 200) {                       //
        platforms.forEach(platform => {                   // for each platform method
        platform.bottom -= 4                         // 
        let visual = platform.visual                      //
        visual.style.bottom = platform.bottom + 'px'      // this assures platoform will move by 4px each time
        })
    }
}

function jump() {
    clearInterval(downTimerId)
    upTimerId  = setInterval(function (){
        doodlerBottomSpace += 20
        doodler.style.bottom = doodlerBottomSpace + 'px'
        if (doodlerBottomSpace > 350) {
            fall()
        }
    },30) 
}


function fall () {
    clearInterval(upTimerId)
    downTimerId = setInterval (function(){
        doodlerBottomSpace -= 5
        doodler.style.bottom = doodlerBottomSpace + 'px'
        if (doodlerBottomSpace <= 0) {
            gameOver()
        }
    },30)
}

function gameOver(){
    console.log('youuuuu deaddddd, game over')
    isGameOver = true
    clearInterval(upTimerId)
    clearInterval(downTimerId)
    }

    function start() {
        if (!gameOver) {                                    //
            createDoodler()                                 //
            createPlatforms()                               //
            setInterval(movePlatforms, 30)                  // platforms will move at 30 second intervals
            jump()
        }
    }
    
   start()                                                  //attach start button
})