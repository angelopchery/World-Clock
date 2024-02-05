setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')
var timezone='local'
function changeTimezone(zone){
  timezone=String(zone)
console.log(timezone)
}
function setClock() {
  if(timezone=='local'){

  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}
 if(timezone=='US'){

  var currentDate = new Date()
  var secondsRatio = currentDate.getSeconds() / 60
  var minutesRatio = (secondsRatio + (currentDate.getMinutes()-30)) / 60
  
  console.log("US minutes="+minutesRatio)

  var hoursRatio = (minutesRatio + (currentDate.getHours()-9)) / 12
   console.log("US hours="+hoursRatio)

  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}
 if(timezone=='Japan'){

  var currentDate = new Date()
  var secondsRatio = currentDate.getSeconds() / 60
  var minutesRatio = (secondsRatio + (currentDate.getMinutes()+25)) / 60
  
  console.log("US minutes="+minutesRatio)

  var hoursRatio = (minutesRatio + (currentDate.getHours()+3)) / 12
   console.log("US hours="+hoursRatio)

  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()