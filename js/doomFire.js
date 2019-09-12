const firePixelsArray = [];
const fireWidth = 6;
const fireHeight = 6;

const start = () => {
    createFireDataStructure();
    createFire();
    renderFire();

    setInterval(calculateFirePropagation, 1000);
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

    const decay = 1;
    const belowFireIntensity = firePixelsArray[pixelIndexBelow];
    const newFireIntensity = belowFireIntensity - decay;

    firePixelsArray[currentPixelIndex] = newFireIntensity;
}

const calculateFirePropagation = () => {
    for (let column = 0; column < fireWidth; column++) {
        for (let row = 0; row < fireHeight; row++) {
            const pixelIndex = column + fireHeight * row

            updateFireIntensity(pixelIndex);
        }
    }
    renderFire();
}

const renderFire = () => {
    let html = '<table cellpadding=0 cellspacing=0>';

    for (let row = 0; row < fireHeight; row++) {
        html += '<tr>';
        for (let column = 0; column < fireWidth; column++) {
            const pixelIndex = column + (fireWidth * row);
            const fireIntensity = firePixelsArray[pixelIndex];

            html += '<td>';
            html += `<div class=pixelIndex>${pixelIndex}</div>`;
            html += fireIntensity;
            html += '</td>';
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

start();