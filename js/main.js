const typing = text =>{
    let element = text.innerHTML.split('');
    text.innerHTML = '';
    element.forEach((character,index) =>{
        setTimeout(() =>text.innerHTML += character,100*index);
    })
};
const h1El = document.querySelector('h1');

typing(h1El);

