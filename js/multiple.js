import typing from './typingEffect.js'

const table = () => {
    var inputEltab = document.querySelector('input#num');
    var tab = document.querySelector('div select#tab');

    if (inputEltab.value == 0) {
        alert('Please, type a number above zero');
    } else {
        tab.innerHTML = '';
        for (let c = 1; c <= 9; c++) {
            let item = document.createElement('option');
            item.appendChild(document.createTextNode(`${inputEltab.value} x ${c} = ${Number(inputEltab.value)*c}`));
            tab.appendChild(item);
        }
    }
    inputEltab.value = '';
    inputEltab.focus();
}
document.querySelector('input#tab').onclick = table;

const h1El = document.querySelector('h1');

typing(h1El);