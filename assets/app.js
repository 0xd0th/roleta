let frutas = ['fruta1.png', 'fruta2.png', 'fruta3.png', 'fruta4.png', 'fruta5.png']

let colums = document.querySelectorAll('.colum')
let sorteado = document.querySelectorAll('.sorteada > .colum')

let win = [0, 0, 1][parseInt((Math.random()*10)/3)]


for ( let i = 0 ; i <= 2000 ; i++) {
    setTimeout( x => {
        colums.forEach (
            item => {
                item.src = `./assets/imgs/fruta${parseInt(((Math.random()*10)+2)/2)}_mov.png`

                let prize = parseInt(((Math.random()*10)+2)/2)
                if ( win && i == 2000 ) {
                    console.log('entrou')
                    sorteado.forEach( item => {
                        item.src = `./assets/imgs/fruta${prize}.png`
                    });
                } 

                if ( !win && i == 2000 ) {
                    colums.forEach( item => {
                        item.src = `./assets/imgs/fruta${parseInt(((Math.random()*10)+2)/2)}.png`
                    })
                }

            }       
        )
    }, 10)

}


console.log(win)