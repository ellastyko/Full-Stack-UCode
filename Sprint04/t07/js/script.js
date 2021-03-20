
let key = 'fc3e197a4db17110573eea11ec2fd6c9';
let url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${key}`;

let week = document.querySelectorAll('#week');
let date = document.querySelectorAll('.date');
let min = document.querySelectorAll('.min');
let max = document.querySelectorAll('.max');
let img = document.querySelectorAll('img');

let response = fetch(url)
    .then(response => response.json())
    .then(response => {
        
        let obj = response.list; // K - 273.15

        for (let i = 0, j = 0; i < date.length; i++) {

            let day = new Date(obj[j].dt_txt)
            console.log(day.getDate())
            date[i].innerHTML = String(day.getDate()).padStart(2, '0') + "." + String(day.getMonth()).padStart(2, '0');
            

            if (obj[j].weather[0].main === 'Clouds')
                img[i].src = 'assets/images/blizzard.jpg';
            else if (obj[j].weather[0].main === 'Clear')
                img[i].src = 'assets/images/blizzard.jpg';
            else if (obj[j].weather[0].main === 'Snow')
                img[i].src = 'assets/images/snow.jpg';
            
            min[i].innerHTML = (obj[j].main.temp_min - 273.15).toFixed(1);
            max[i].innerHTML = (obj[j].main.temp_max - 273.15).toFixed(1);
            j += 6;
        }
    })