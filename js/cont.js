const couting = ()=>{
    var inputEl = document.querySelector('input#ini');
    var inputElFim = document.querySelector('input#fim');
    var inputElPas = document.querySelector('input#pas');
    var contagem = document.querySelector('div#cont');
    if(inputEl.value == 0 || inputElFim.value == 0 || inputElPas.value == 0){
        alert('Type a number above zero');
    }
    else{
    contagem.innerHTML = '';
    for(var c=Number(inputEl.value);c<=Number(inputElFim.value);c+=Number(inputElPas.value)){
        contagem.innerHTML += c + '\u{1F449}';
    }
    contagem.innerHTML += '\u{1F3C1}';
    }
    inputEl.focus();
}
document.querySelector('input#cont').onclick = couting;

const typing = text =>{
    let element = text.innerHTML.split('');
    text.innerHTML = '';
    element.forEach((character,index) =>{
        setTimeout(() =>text.innerHTML += character,100*index);
    })
};
const h1El = document.querySelector('h1');

typing(h1El);