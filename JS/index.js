import  Controls  from './controls.js'
import  Timer  from './timer.js'
import Sound from './sounds.js'
import Events from './events.js'
import { 
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  minutesDisplay,
  secondsDisplay
} from './elements.js'

const sound = Sound()

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})

Events({controls, timer, sound})