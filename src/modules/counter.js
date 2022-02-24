const timer = (deadLine) => {
    const timerDays = document.querySelectorAll('#timer-days')
    const timerHours = document.querySelectorAll('#timer-hours')
    const timerMinutes = document.querySelectorAll('#timer-minutes')
    const timerSeconds = document.querySelectorAll('#timer-seconds')

    const getTimeRemaining = () => {
        let dateStop = new Date(deadLine).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow) / 1000
        let days= Math.floor(timeRemaining / 60 / 60 / 24) 
        let hours = Math.floor((timeRemaining / 60 / 60) %24)
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60)
        if (days < 10) {
            days = ('0' + days)
        }
        if (hours < 10) {
            hours = ('0' + hours)
        }
        if (minutes < 10) {
            minutes = ('0' + minutes)
        }
        if (seconds < 10) {
            seconds = ('0' + seconds)
        }
        

        return{ timeRemaining, days, hours, minutes, seconds }
    }

    const updateClock = () => {
        let getTime = getTimeRemaining()

        timerDays.forEach((timerDays) => {
            timerDays.textContent = getTime.days
        })
        timerHours.forEach((timerHours) => {
            timerHours.textContent = getTime.hours
        })
        timerMinutes.forEach((timerMinutes) => {
            timerMinutes.textContent = getTime.minutes
        })
        timerSeconds.forEach((timerSeconds) => {
            timerSeconds.textContent = getTime.seconds
        })
        
        if(getTime.timeRemaining > 0) {
           setTimeout(updateClock, 1000)
        } else if (getTime.timeRemaining <= 0) {
  
            timerDays.forEach((timerDays) => {
                timerDays.textContent = '00'
            })
            timerHours.forEach((timerHours) => {
                timerHours.textContent = '00'
            })
            timerMinutes.forEach((timerMinutes) => {
                timerMinutes.textContent = '00'
            })
            timerSeconds.forEach((timerSeconds) => {
                timerSeconds.textContent = '00'
            })
        }

    }
    updateClock()
}







export default timer