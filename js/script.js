document.addEventListener('DOMContentLoaded', function () {
    const luasForm = document.getElementById('Luas');
    const calculateButtonLuas = document.getElementById('calculateButtonLuas');
    const resetButtonLuas = document.getElementById('resetButtonLuas');
    const areaResultLuas = document.getElementById('areaResultLuas');
    const sideLengthInputLuas = document.getElementById('sideLengthLuas');

    luasForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const sideLength = parseFloat(sideLengthInputLuas.value);

        if (!isNaN(sideLength)) {
            const area = sideLength * sideLength;

            areaResultLuas.textContent = area + " cm^2";
            document.getElementById('resultContainerLuas').style.display = 'block';
        } else {
            alert('Masukkan panjang sisi yang valid.');
        }
    });

    resetButtonLuas.addEventListener('click', function () {
        sideLengthInputLuas.value = '';
        areaResultLuas.textContent = '';
        document.getElementById('resultContainerLuas').style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const kelilingForm = document.getElementById('Keliling');
    const calculateButtonKeliling = document.getElementById('calculateButtonKeliling');
    const resetButtonKeliling = document.getElementById('resetButtonKeliling');
    const perimeterResultKeliling = document.getElementById('perimeterResultKeliling');
    const sideLengthInputKeliling = document.getElementById('sideLengthKeliling');

    kelilingForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const sideLength = parseFloat(sideLengthInputKeliling.value);

        if (!isNaN(sideLength)) {
            const perimeter = 4 * sideLength;

            perimeterResultKeliling.textContent = perimeter + " cm";
            document.getElementById('resultContainerKeliling').style.display = 'block';
        } else {
            alert('Masukkan panjang sisi yang valid.');
        }
    });

    resetButtonKeliling.addEventListener('click', function () {
        sideLengthInputKeliling.value = '';
        perimeterResultKeliling.textContent = '';
        document.getElementById('resultContainerKeliling').style.display = 'none';
    });
});