// audios
const audio = document.querySelector('audio')
const audios = [
    'audios/Tiringa Oficial - Vai pra uma porra omi!.mp3', 
    'audios/Tiringa Oficial - Omi pur a caridade!.mp3',
    'audios/Tiringa Oficial - Cuma é_!_!.mp3',
    'audios/Tiringa Oficial - Vai te lascar Arrombado!.mp3',
    'audios/Tiringa Oficial - Rebanhe de CORNO!.mp3',
    'audios/Tiringa Oficial - Trombadinha!.mp3',
    'audios/Tiringa Oficial - Vá se lascar pruma porra omi!.mp3',
    'audios/Tiringa Oficial - Aprendi foi cum vovô omi!.mp3',
    'audios/Tiringa Oficial - Tá pensando que eu sou algum idiota é_.mp3']

// Quando um botao é clicado
function valor(num) {
    const text = document.querySelector('.textview')

    document.querySelector('.textview').value = text.value + num

    //da o play no audio
    const nAleat = Math.floor(Math.random() * 1)

    audios.push(audios[0])
    audios.shift()
    audio.src = audios[nAleat]
    audio.play()
}

//Quando clicar no botao de '=', mostra o resultado
function resultado() {
    text = document.querySelector('.textview').value

    //audio
    audio.src = 'audios/Tiringa Oficial - Atola o dedo nessa porra!.mp3'
    audio.play()

    // verificando resultado
    if(text.length != 0) {
        document.querySelector('.textview').value = eval(text)

        //historico
        if(text != document.querySelector('.textview').value) {
            const quantLi = document.querySelectorAll('li')
            const newLi = document.createElement('li')
            const newText = document.createTextNode(text + ' = ' + document.querySelector('.textview').value)

            newLi.appendChild(newText)

            const position = document.querySelectorAll('ul')[0]

            position.appendChild(newLi)


            // removendo um calculo do historico
            if (quantLi.length == 7) {
                const containerEl = quantLi[0].parentNode

                containerEl.removeChild(quantLi[0])
            }
            
            // muda cor do calculo atual
            newLi.style.background = 'black'
            for(var i = 0; i <= 7; i++) {
                quantLi[i].style.background = 'rgb(82, 82, 90)'
            }
    } 

    }
}

// Apagar todo o calculo da tela
function apagar() {
    document.querySelector('.textview').value = ''

    //audio
    audio.src = 'audios/Tiringa Oficial - oh arreda daqui arreda daqui...mp3'
    audio.play()
}

//apaga um numero por vez
function apagando() {
    const text = document.querySelector('.textview').value

    document.querySelector('.textview').value = text.substring(0, text.length-1)

    //audio
    audio.src = 'audios/Tiringa Oficial - Eu di uma carrera!.mp3'
    audio.play()
}
