window.onload = (event) => {


    let state = {
        offsetX: 0,
        offsetY: 0,
        target: null
    }
    document.querySelectorAll('body').forEach(() => {
        addEventListener('dblclick', (event) => {

            if (event.target.getAttribute('value') === 'off') {
                event.target.setAttribute('value', 'on') 
                event.target.style.border = 'none'
            }
            else {
                event.target.setAttribute('value', 'off')
                event.target.style.border = '2px dotted grey'
                event.target.style.position = 'absolute'
            }             
        });
        addEventListener('mousemove', (event) => {
            
            if (state.target) {
                
                state.target.style.left = (event.pageX - state.offsetX) + 'px';
                state.target.style.top = (event.pageY - state.offsetY) + 'px';
            }
        });
        addEventListener('mousedown', (event) => {

            if (event.target.getAttribute('value') === 'on') {
                state.target = event.target;
                state.offsetX = event.offsetX;
                state.offsetY = event.offsetY;
            }        
        });
        addEventListener('mouseup', () => {
            state.target = null;
        });
    });
}

// let box = document.getElementById('container')
// let state = {
//     offsetX: 0,
//     offsetY: 0,
//     target: null
// }
// box.addEventListener('dblclick', event => {
//     const target = event.target;
//     if (target && target.classList.contains('box')) {
//         if (target.getAttribute('value') === 'on') {
//             target.setAttribute('value', 'off');
//         } else {
//             target.setAttribute('value', 'on');
//         }
//     }
// });
// box.addEventListener('mousedown', event => {
//     if (event.target && event.target.classList.contains('box') &&
//         event.target.getAttribute('value') === 'on') {
//         state.target = event.target;
//         state.offsetX = event.offsetX;
//         state.offsetY = event.offsetY;
//     }
// });
// box.addEventListener('mouseup', () => {
//     state.target = null;
// });
// box.addEventListener('mousemove', e => {
//     if (state.target) {
//         state.target.style.left = (e.pageX - state.offsetX) + 'px';
//         state.target.style.top = (e.pageY - state.offsetY) + 'px';
//     }
// });