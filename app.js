

window.onload = function () {
    main()
}

//globals 

let result = 0;
let sound = new Audio('./src_project-10_copy-sound.wav')

function main() {
    const output = document.getElementById('output');
    const incrementBtn = document.getElementById('increment-btn');
    const incrementInp = document.getElementById('increment-inp');

    const decrementBtn = document.getElementById('decrement-btn');
    const decrementInp = document.getElementById('decrement-inp');

    displayResult(output);



    incrementBtn.addEventListener('click', function () {
        const increment = parseInt(incrementInp.value);
        result += increment;
        displayResult(output);
    });

    decrementBtn.addEventListener('click', function () {
        const decrement = parseInt(decrementInp.value);
        result -= decrement;
        displayResult(output);
    });


    incrementInp.addEventListener('keyup', handelInput);
    decrementInp.addEventListener('keyup', handelInput);

}

function displayResult(output) {
    if (result < 0) {
        result = 0
        sound.play()
        alert('Result can not be negative');
    };
    let finalResult = result;
    if (result < 10) {
        finalResult = `0${result}`
    }

    output.innerText = finalResult;
}

function handelInput(e) {
    if (parseInt(e.target.value) > 100) {
        e.target.value = 100;
    }

    if (parseInt(e.target.value) < 0) {
        e.target.value = 0;
    }
}

