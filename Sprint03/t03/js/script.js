

window.addEventListener('load', (event) => {

    class Human {
        constructor(firstName, lastName, gender, age, calories) {

            this.firstName = firstName;
            this.lastName = lastName;
            this.gender = gender;
            this.age = age;
            this.calories = calories;
 
            document.getElementById('name').innerHTML = this.firstName
            document.getElementById('surname').innerHTML = this.lastName
            document.getElementById('gender').innerHTML = this.gender
            document.getElementById('age').innerHTML = this.age
            document.getElementById('calories').innerHTML = this.calories

            document.getElementById('title').textContent = 'Human'
            document.getElementById('img1').style.visibility = 'visible'

            document.getElementById('sleep').addEventListener('click', this.sleepFor)
            document.getElementById('feed').addEventListener('click', this.feed)

            document.getElementById('bas').addEventListener('click', () => {
                if(this.calories > 500)
                    new Superhero(this.firstName, this.lastName, this.gender, this.age, this.calories, prompt('Can raise Thor Hammer?', 'yes'), prompt('Shoot Web?', 'yes'));
                else {
                    document.getElementById('message').innerHTML = 'You need to eat more'
                    setTimeout(() => {
                        document.getElementById('message').innerHTML = '*Message'
                    }, 2000);
                }               
            })
            setInterval(() => {
                if (this.calories >= 200)
                    this.calories -= 200
                    document.getElementById('calories').innerHTML = this.calories
            }, 60*1000);
            setTimeout(() => {
                if (this.calories < 500)
                    alert('I am hungry!')
            }, 5000)

            return this
        }

        sleepFor = () => {
            sleep.disabled = true
            let it = setInterval( () => { 
                document.getElementById('message').innerHTML = 'I am sleeping now'; 
                console.log('I am sleeping now')
            }, 1000);
            setTimeout( () => { 
                clearInterval(it)
                sleep.disabled = false
                document.getElementById('message').innerHTML = 'I am awake now'
                console.log('I am awake now')
             }, 5000)    

        }

        feed = () => {
            feed.disabled = true
            if (this.calories > 500) {
                sleep.disabled = false
                document.getElementById('message').innerHTML = 'I am not hungry'
                console.log('I am not hungry')
                return 1
            }

            let it = setInterval( () => { 
                document.getElementById('message').innerHTML = 'Nom nom nom';
                console.log('Nom nom nom')
             }, 1000);
            setTimeout( () => { 
                clearInterval(it)
                this.calories += 200
                document.getElementById('calories').innerHTML = this.calories
                if (this.calories > 500) {
                    feed.disabled = false               
                    document.getElementById('message').innerHTML = 'I am not hungry'
                    console.log('I am not hungry')
                    return 1
                }
                else {
                    feed.disabled = false               
                    document.getElementById('message').innerHTML = 'I am still hungry'
                    console.log('I am still hungry')
                    setTimeout(() => {
                        document.getElementById('message').innerHTML = '*Message'
                    }, 2000);
                }
            }, 5*1000)      
                        
        }
    }

    class Superhero extends Human {

        constructor(firstName, lastName, gender, age, calories, hammer='no', shootweb='no') {

            bas.disabled = true
            super(firstName, lastName, gender, age, calories)
            this.hammer = hammer
            this.shootweb = shootweb
            document.getElementById('hammer').innerHTML = this.hammer
            document.getElementById('shootweb').innerHTML = this.shootweb

            document.getElementById('title').innerHTML = 'Superhero'
            document.getElementById('bas').innerHTML = 'Unavailable'

            img1.style.display = 'none'
            document.getElementById('img2').style.visibility = 'visible'

            document.getElementById('powers').style.visibility = 'visible'
            fly.onclick = this.fly
            fight.onclick = this.figthWithEvil
        }
        fly() {
            fly.disabled = true
            let it = setInterval( () => { 
                document.getElementById('message').innerHTML = 'I am flying'; 
                console.log('I am flying')
                }, 1000);
            setTimeout( () => { 
                fly.disabled = false
                clearInterval(it)
            }, 5*1000)    
        }
        figthWithEvil() { 

            fight.disabled = true
            console.log('Khhhh-chh... Bang-g-g-g... Evil is defeated')
            document.getElementById('message').innerHTML = 'Khhhh-chh... Bang-g-g-g... Evil is defeated'
            setTimeout(() => {
                        fight.disabled = false
                        document.getElementById('message').innerHTML = '*Message'
            }, 2000);
        }
        
    }
 
    new Human(prompt('Name: ', 'Peter'), prompt('Last name: ', 'Parker'), prompt('Gender: ', 'male'), Number(prompt('Age: ', 21)), Number(prompt('Calories: ', 200)));
});
