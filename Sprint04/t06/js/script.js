let count = 0; 
function callback(entries, observer) { 
    
    entries.forEach(entry =>  {
        if (entry.intersectionRatio > 0.0) {
            
            if (entry.target.getAttribute('src') == 'assets/images/temp.jpg') {
                let new_src = entry.target.getAttribute('data-src')
                entry.target.setAttribute('src', new_src);
                count++;
            }
            let counter = document.getElementById('counter');
            counter.innerHTML=`${count} images loaded from 20`;
            if (count === 20) {
                counter.style.background = "green"
                setTimeout(() => {
                    counter.style.display = "none";
                }, 3000);
            }
        }
    })
}

var observer = new IntersectionObserver(callback); //create object
for (let i of document.getElementsByTagName('img')) {
    observer.observe(i);
}