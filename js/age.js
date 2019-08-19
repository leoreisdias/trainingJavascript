function checking(){
    var data_year = new Date();
    var year = data_year.getFullYear();
    var formYear = document.getElementById('year');
    var res = document.querySelector('body section div#res');
    
    if(formYear.value == '' || formYear.value > year || Number(formYear.value) < 1900)
        alert('[ERROR] Verify the fields and try again...');
    else{
        var sex = document.getElementsByName('sex');
        var age = year - Number(formYear.value);
        var genre = '';
        if(sex[0].checked){
            genre = 'Man';
            var image = document.createElement('img');
            if(age <18)
                image.setAttribute('src','./img/boy.png');
            
            else if(age >=60)
                image.setAttribute('src','./img/oldman.png');

            else
                image.setAttribute('src','./img/homem.png');
        }
        else if(sex[1].checked){
            genre = 'Woman';
            var image = document.createElement('img');
            if(age <18)
                image.setAttribute('src','./img/girl.png');
        
            else if(age >=60)
                image.setAttribute('src','./img/oldwoman.png');

            else
                image.setAttribute('src','./img/mulher.png');
        }
        res.style.textAlign = 'center';
        res.innerHTML = `${genre} with ${age} years old.<br>`;
        res.appendChild(image);
    }
    formYear.focus();
};
const inputCheck = document.querySelector('input#check');
inputCheck.onclick = checking;

const typing = text =>{
    let element = text.innerHTML.split('');
    text.innerHTML = '';
    element.forEach((character,index) =>{
        setTimeout(() =>text.innerHTML += character,100*index);
    })
};
const h1El = document.querySelector('h1');

typing(h1El);
