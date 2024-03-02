

window.onload = function () {
    main()
}

//globals 

let result = 0;

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
    })

    decrementBtn.addEventListener('click', function () {
        const decrement = parseInt(decrementInp.value);
        result -= decrement;
        displayResult(output);
    });
}

function displayResult(output) {
    let finalResult = result;
    if (result < 10) {
        finalResult = `0${result}`
    }

    output.innerText = finalResult;
}



