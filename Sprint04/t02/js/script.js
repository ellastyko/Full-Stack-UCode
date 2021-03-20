// Empty
document.getElementById('placeholder').style.display = 'none';
document.getElementById('notification').style.display = 'none';

let table_div = document.createElement('div');
let result_div = document.createElement('div');

result_div.appendChild(document.createTextNode('Sorting by Name, order ASC'));

result_div.style.margin = '30px auto'
result_div.style.background = 'grey'
result_div.style.borderRadius = '15px'
result_div.style.width = '250px'
result_div.style.height = '30px'
result_div.style.textAlign = 'center'
result_div.style.lineHeight = '30px'

document.body.appendChild(result_div)
document.body.appendChild(table_div)

let th_list = ['Name', 'Strength', 'Age']
let td_list = [  
            ['Black Panther', 66, 53],
            ['Captain America', 79, 137],
            ['Captain Marvel', 97, 26],
            ['Hulk', 80, 49],
            ['Iron Man', 88, 48],
            ['Spider-Man', 78, 16],
            ['Thanos', 99, 1000],
            ['Thor', 95, 1000],
            ['Yon-Rogg', 73, 52],
        ]



let table = document.createElement('table');
table_div.appendChild(table);

for (let i = 0; i < 9; i++) {

    let el = document.createElement('tr');
    let elem = document.createElement('tr');

    for (let j = 0; j < 3; j++) {
             
        if (i === 0) {
            
            let the = document.createElement('th');
            let be = document.createTextNode(`${th_list[j]}`)
            the.appendChild(be)
            elem.appendChild(the)          
        }  
        let td = document.createElement('td');
        let b = document.createTextNode(`${td_list[i][j]}`);
        td.appendChild(b)
        el.appendChild(td)        
    }
    if (i === 0)
        table.appendChild(elem); 
    table.appendChild(el);
}

let th = document.querySelectorAll('th');
for (let i of th)
    i.setAttribute('value' , 'ASC');

let td = document.getElementsByTagName('td');

for (let i of th) {
    i.addEventListener('click', (event) => {
        let header = event.target;
        let list = []
        if (header.getAttribute('value') === 'ASC') {

            if (header.textContent === 'Name') {
                result_div.innerHTML = 'Sorting Name By DESC'   
                td_list.reverse()
            }           
            if (header.textContent === 'Strength') {    
                result_div.innerHTML = 'Sorting Strength By DESC'
                for (let i = 0; i < 9; i++)  {
                    list.push(td_list[i][1])
                }
                list.sort((a, b) => b - a);     
            }                
            if (header.textContent === 'Age') {
                result_div.innerHTML = 'Sorting Age By DESC' 
                for (let i = 0; i < 9; i++)  {
                    list.push(td_list[i][2])
                }
                list.sort((a, b) => b - a);     
            }             
            header.setAttribute('value', 'DESC')           
        }                
        else {
            if (header.textContent === 'Name') {
                result_div.innerHTML = 'Sorting Name By ASC'   
                td_list.sort()
            }           
            if (header.textContent === 'Strength') {
                result_div.innerHTML = 'Sorting Strength By ASC'
                 
                for (let i = 0; i < 9; i++)  {
                    list.push(td_list[i][1])
                }
                list.sort((a, b) => a - b);   
            }             
            if (header.textContent === 'Age') {
                result_div.innerHTML = 'Sorting Age By ASC'
                for (let i = 0; i < 9; i++)  {
                    list.push(td_list[i][2])
                }
                list.sort((a, b) => a - b);                         
            }           
            header.setAttribute('value', 'ASC')         
        }   
        if (header.textContent === 'Name' ) {  
            let j = 0;
            for (let i = 0; i < 22; i+=3) {
                td[i].innerHTML = td_list[j][0]
                j++
            }
        }
        else if (header.textContent === 'Strength') {
 
            let j = 0;
            for (let i = 1; i < 23; i+=3) {
                
                td[i].innerHTML = list[j]
                j++
            }
        }
        else if (header.textContent === 'Age') {
            let j = 0;
            for (let i = 2; i < 24; i+=3) {
                td[i].innerHTML = list[j]
                j++
            }
        }
    });
}
    



table_div.appendChild(table);
