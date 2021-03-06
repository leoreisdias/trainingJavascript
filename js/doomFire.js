const firePixelsArray = [];
const fireWidth = 50;
const fireHeight = 50;
var firePower = 4;
const normalColorsPalette = [{ "r": 7, "g": 7, "b": 7 }, { "r": 31, "g": 7, "b": 7 }, { "r": 47, "g": 15, "b": 7 }, { "r": 71, "g": 15, "b": 7 }, { "r": 87, "g": 23, "b": 7 }, { "r": 103, "g": 31, "b": 7 }, { "r": 119, "g": 31, "b": 7 }, { "r": 143, "g": 39, "b": 7 }, { "r": 159, "g": 47, "b": 7 }, { "r": 175, "g": 63, "b": 7 }, { "r": 191, "g": 71, "b": 7 }, { "r": 199, "g": 71, "b": 7 }, { "r": 223, "g": 79, "b": 7 }, { "r": 223, "g": 87, "b": 7 }, { "r": 223, "g": 87, "b": 7 }, { "r": 215, "g": 95, "b": 7 }, { "r": 215, "g": 95, "b": 7 }, { "r": 215, "g": 103, "b": 15 }, { "r": 207, "g": 111, "b": 15 }, { "r": 207, "g": 119, "b": 15 }, { "r": 207, "g": 127, "b": 15 }, { "r": 207, "g": 135, "b": 23 }, { "r": 199, "g": 135, "b": 23 }, { "r": 199, "g": 143, "b": 23 }, { "r": 199, "g": 151, "b": 31 }, { "r": 191, "g": 159, "b": 31 }, { "r": 191, "g": 159, "b": 31 }, { "r": 191, "g": 167, "b": 39 }, { "r": 191, "g": 167, "b": 39 }, { "r": 191, "g": 175, "b": 47 }, { "r": 183, "g": 175, "b": 47 }, { "r": 183, "g": 183, "b": 47 }, { "r": 183, "g": 183, "b": 55 }, { "r": 207, "g": 207, "b": 111 }, { "r": 223, "g": 223, "b": 159 }, { "r": 239, "g": 239, "b": 199 }, { "r": 0, "g": 0, "b": 0 }]
const blackColorsPalette = [{ "r": 0, "g": 0, "b": 0 }, { "r": 0, "g": 0, "b": 0 }, { "r": 0, "g": 0, "b": 0 }, { "r": 0, "g": 0, "b": 0 }, { "r": 0, "g": 0, "b": 0 }, { "r": 0, "g": 0, "b": 0 }, { "r": 0, "g": 0, "b": 0 }, { "r": 0, "g": 0, "b": 0 }, { "r": 0, "g": 0, "b": 0 }, { "r": 0, "g": 0, "b": 0 }, { "r": 0, "g": 0, "b": 0 }, { "r": 0, "g": 0, "b": 0 }, { "r": 0, "g": 0, "b": 0 }, { "r": 0, "g": 0, "b": 0 }, { "r": 0, "g": 0, "b": 0 }, { "r": 0, "g": 0, "b": 0 }, { "r": 0, "g": 0, "b": 0 }, { "r": 0, "g": 0, "b": 0 }, { "r": 0, "g": 0, "b": 0 }, { "r": 0, "g": 0, "b": 0 }, { "r": 0, "g": 0, "b": 0 }, { "r": 0, "g": 0, "b": 0 }, { "r": 0, "g": 0, "b": 0 }, { "r": 0, "g": 0, "b": 0 }, { "r": 0, "g": 0, "b": 0 }, { "r": 0, "g": 0, "b": 0 }, { "r": 0, "g": 0, "b": 0 }, { "r": 0, "g": 0, "b": 0 }, { "r": 0, "g": 0, "b": 0 }, { "r": 0, "g": 0, "b": 0 }, { "r": 0, "g": 0, "b": 0 }, { "r": 105, "g": 105, "b": 105 }, { "r": 128, "g": 128, "b": 128 }, { "r": 169, "g": 169, "b": 169 }, { "r": 192, "g": 192, "b": 192 }, { "r": 211, "g": 211, "b": 211 }, { "r": 220, "g": 220, "b": 220 }]
const blueColorsPalette = [{ "r": 119, "g": 136, "b": 153 }, { "r": 119, "g": 136, "b": 153 }, { "r": 112, "g": 128, "b": 144 }, { "r": 112, "g": 128, "b": 144 }, { "r": 70, "g": 130, "b": 180 }, { "r": 70, "g": 130, "b": 180 }, { "r": 65, "g": 105, "b": 225 }, { "r": 65, "g": 105, "b": 225 }, { "r": 100, "g": 149, "b": 237 }, { "r": 100, "g": 149, "b": 237 }, { "r": 30, "g": 144, "b": 255 }, { "r": 30, "g": 144, "b": 255 }, { "r": 0, "g": 191, "b": 255 }, { "r": 0, "g": 191, "b": 255 }, { "r": 135, "g": 206, "b": 235 }, { "r": 135, "g": 206, "b": 235 }, { "r": 135, "g": 206, "b": 250 }, { "r": 135, "g": 206, "b": 250 }, { "r": 173, "g": 216, "b": 230 }, { "r": 173, "g": 216, "b": 230 }, { "r": 173, "g": 216, "b": 230 }, { "r": 255, "g": 255, "b": 255 }, { "r": 255, "g": 255, "b": 255 }, { "r": 255, "g": 255, "b": 255 }, { "r": 255, "g": 255, "b": 255 }, { "r": 255, "g": 255, "b": 255 }, { "r": 255, "g": 255, "b": 255 }, { "r": 255, "g": 255, "b": 255 }, { "r": 255, "g": 255, "b": 255 }, { "r": 255, "g": 255, "b": 255 }, { "r": 255, "g": 255, "b": 255 }, { "r": 255, "g": 255, "b": 255 }, { "r": 255, "g": 255, "b": 255 }, { "r": 255, "g": 255, "b": 255 }, { "r": 255, "g": 255, "b": 255 }, { "r": 255, "g": 255, "b": 255 }, { "r": 255, "g": 255, "b": 255 }]
var fireColorsPalette = normalColorsPalette;

document.querySelector('button.normalFire').disabled = true;

const start = () => {
    createFireDataStructure();
    createFire();
    renderFire();

    setInterval(calculateFirePropagation, 5);
}

const createFireDataStructure = () => {
    const numberOfPixels = fireWidth * fireHeight;

    for (let i = 0; i < numberOfPixels; i++) {
        firePixelsArray[i] = 0;
    }
}

const updateFireIntensity = currentPixelIndex => {
    const pixelIndexBelow = currentPixelIndex + fireWidth;

    if (pixelIndexBelow >= fireHeight * fireHeight) {
        return;
    }

    const decay = Math.floor(Math.random() * firePower);
    const belowFireIntensity = firePixelsArray[pixelIndexBelow];
    const newFireIntensity = belowFireIntensity - decay >= 0 ? belowFireIntensity - decay : 0;

    firePixelsArray[currentPixelIndex - decay] = newFireIntensity;
}

const calculateFirePropagation = () => {
    for (let column = 0; column < fireWidth; column++) {
        for (let row = 0; row < fireHeight; row++) {
            const pixelIndex = column + fireHeight * row

            updateFireIntensity(pixelIndex);
        }
    }
    renderFire();
    setNormalFireButtonVisibility();
}

const renderFire = () => {
    const debug = false;
    let html = '<table cellpadding=0 cellspacing=0>';

    for (let row = 0; row < fireHeight; row++) {
        html += '<tr>';
        for (let column = 0; column < fireWidth; column++) {
            const pixelIndex = column + (fireWidth * row);
            const fireIntensity = firePixelsArray[pixelIndex];

            if (debug === true) {
                html += '<td>';
                html += `<div class=pixelIndex>${pixelIndex}</div>`;
                html += fireIntensity;
                html += '</td>';
            } else {
                const color = fireColorsPalette[fireIntensity];
                const coloString = `${color.r},${color.g},${color.b}`;
                html += `<td class="pixel" style="background-color: rgb(${coloString})">`;
                html += '</td>';
            }
        }
        html += '</tr>';
    }
    document.querySelector('.fireCanvas').innerHTML = html;
}

const createFire = () => {
    for (let column = 0; column <= fireWidth; column++) {
        const overFlowIndex = fireWidth * fireHeight;
        const pixelIndex = (overFlowIndex - fireWidth) + column;

        firePixelsArray[pixelIndex] = 36;
    }
}

const turnOffFire = () => {
    fireColorsPalette = blackColorsPalette;
}

const setFireBlue = () => {
    fireColorsPalette = blueColorsPalette;
}

const setNormalFire = () => {
    fireColorsPalette = normalColorsPalette;
}

const setNormalFireButtonVisibility = () => {
    if (fireColorsPalette != normalColorsPalette) {
        document.querySelector('button.normalFire').disabled = false;
    }
    if (fireColorsPalette == normalColorsPalette) {
        document.querySelector('button.normalFire').disabled = true;
    }
}

const decreaseFirePower = () => {
    firePower++;
}
const increaseFirePower = () => {
    firePower--;
}

document.querySelector('button.stopFireButton').onclick = turnOffFire;
document.querySelector('button.blueFire').onclick = setFireBlue;
document.querySelector('button.normalFire').onclick = setNormalFire;
document.querySelector('button.fireDown').onclick = decreaseFirePower;
document.querySelector('button.fireUp').onclick = increaseFirePower;


start();