import Sound from './sounds.js'

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
  newMinutes
}){

  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)

  function updateDisplay(minutes, seconds) {
    newMinutes = newMinutes || minutes
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }
  
  function reset() {
    updateDisplay(0, 0)
    clearTimeout(timerTimeOut)
  }
  
  function countdown() {
    timerTimeOut = setTimeout(function() {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0
      updateDisplay(minutes, 0)
    
      if(isFinished) {
        resetControls()
        Sound().timeEnd()
        return
      } 
  
      if(seconds <= 0 ) {
        seconds = 60
        --minutes
      }
      
      updateDisplay(minutes, String(seconds -1))
      countdown()
    }, 1000)
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }
  
  return {
    countdown,
    reset,
    updateDisplay,
    updateMinutes,
    hold,
    minutes,
    newMinutes,
  }
}


