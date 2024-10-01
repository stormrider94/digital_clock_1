let clockSecond = document.getElementById('second');
let clockMinute = document.getElementById('minute');
let clockHour = document.getElementById('hour');
let clockAmPm = document.getElementsByClassName('am-pm')[0];

setInterval(function(){
    const date = new Date()
    const options = {
        hour : '2-digit',
        minute : '2-digit',
        second : '2-digit',
        hour12 : true
    }

    const time = date.toLocaleTimeString('en-US',options);
    const ampm = time.slice(-2).toLowerCase()
    const [hours,minutes,seconds]  = time.slice(0,-3).split(':')
    clockHour.textContent = hours
    clockMinute.textContent = minutes
    clockSecond.textContent = seconds
    clockAmPm.textContent = ampm
},1000)
