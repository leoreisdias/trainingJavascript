const typing = text => {
    let element = text.innerHTML.split('');
    text.innerHTML = '';
    element.forEach((character, index) => {
        setTimeout(() => text.innerHTML += character, 100 * index);
    })
};

export default typing;