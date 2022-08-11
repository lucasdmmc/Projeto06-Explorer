//Variaveis
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
let minutes
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

//Eventos
function allClicks() {
  buttonPlay.addEventListener('click', handlePlayClick)
  buttonPause.addEventListener('click', handlePauseClick)
  buttonStop.addEventListener('click', handleStopClick)
  buttonSoundOn.addEventListener('click', handleSoundOff)
  buttonSoundOff.addEventListener('click', handleSoundOn)
}

allClicks()


//Funções de callback
function countdown() {
  setTimeout(function() {
    seconds = Number(secondsDisplay.textContent)
    minutes = Number(minutesDisplay.textContent)

    updateTimerDisplay(minutes, 0)

    if(minutes <= 0) {
      handleStopClick()
      return
    }

    if(seconds <= 0) {
      seconds = 3
      --minutes
    }
    
    updateTimerDisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
}

function handlePlayClick() {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')

  countdown()
}

function handlePauseClick() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
}

function handleStopClick() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonStop.classList.add('hide')
}

function handleSoundOn() {
  buttonSoundOff.classList.add('hide')
  buttonSoundOn.classList.remove('hide')
}

function handleSoundOff() {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')

}

buttonSet.addEventListener('click', function() {
  minutes = prompt('Quantos minutos?')
  updateTimerDisplay(minutes, 0)
})
