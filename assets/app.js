let frutas = ['fruta1.png', 'fruta2.png', 'fruta3.png', 'fruta4.png', 'fruta5.png']

let colums = document.querySelectorAll('.colum')



for ( let i = 0 ; i < 9000 ; i++) {
    setTimeout( x => {
        colums.forEach (
            item => {
                item.src = `./assets/imgs/fruta${parseInt(((Math.random()*10)+2)/2)}_mov.png`
            }       
        )
    }, 10)
    
}


