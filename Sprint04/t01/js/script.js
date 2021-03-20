

let child = document.getElementById('characters').children;

for (let i = 0; i < child.length; i++) {
  if (child[i].className === '')
    child[i].className = 'unknown'
  if (child[i].dataset.element === undefined)
    child[i].dataset.element = 'none'


  child[i].appendChild(document.createElement('br'));


  if (child[i].dataset.element.includes('fire')) {
    let a = document.createElement('DIV');
    child[i].appendChild(a)
    a.className = `elem fire`
  }
  if (child[i].dataset.element.includes('water')) {
    let a = document.createElement('DIV');
    child[i].appendChild(a)
    a.className = 'elem water'
  }
  if (child[i].dataset.element.includes('earth')) {
    let a = document.createElement('DIV');
    child[i].appendChild(a)
    a.className = 'elem earth'
  }
  if (child[i].dataset.element.includes('air')) {
    let a = document.createElement('DIV');
    child[i].appendChild(a)
    a.className = 'elem air'
  }

  if (child[i].childElementCount === 1) {
    let a = document.createElement('DIV');
    let b = document.createElement('DIV');
    b.className = 'line'
    a.appendChild(b)
    child[i].appendChild(a)
    a.className = 'elem'
  }

}
