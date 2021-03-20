function getFormattedDate(date) {
    str = ''
    week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let day = date.getDate();
    if (day < 10) { 
        day = '0' + date.getDate()
    }
    let month = date.getMonth();
    if (month < 10) { 
        month = '0' + date.getMonth()
    }
    let hours = date.getHours();
    let weekday = date.getDay();
    if (hours < 10) { 
        hours = '0' + date.getHours()
    }
    let minutes = date.getMinutes()
    if (minutes < 10) { 
        minutes = '0' + date.getMinutes()
    }
    if (typeof(date) == 'object') {
        str +=  day + '.' + month + '.' + date.getFullYear() + ' ' + hours + ':' + minutes + ' ' + week[weekday];
    }
    if (typeof(date) == 'string') {
        
        
    }
    return str
}