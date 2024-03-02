

window.onload = function () {
    main()
}

//globals 

let result = 0;

function main() {
    const output = document.getElementById('output');
    const incrementInp = document.getElementById('increment-inp');
    const decrementInp = document.getElementById('decrement-inp');

    const incrementBtn = document.getElementById('increment-btn');
    const decrementBtn = document.getElementById('decrement-btn');

    displayResult(output);
}

function displayResult(output) {
    let finalResult = null;
    if (result < 10) {
        finalResult = `0${result}`
    }

    output.innText = finalResult;
}



