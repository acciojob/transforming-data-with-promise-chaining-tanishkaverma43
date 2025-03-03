document.getElementById('btn').addEventListener('click', function() {
    let inputValue = Number(document.getElementById('ip').value); // Convert string to number

    // Start the promise chain
    new Promise((resolve, reject) => { 
        setTimeout(() => resolve(inputValue), 2000); 
    })
    // Rest of your code
    .then(value => {
        let multipliedValue = value * 2;
        document.getElementById('output').innerHTML = 'Result: ' + multipliedValue;
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(multipliedValue), 2000);
        });
    })
    .then(value => {
        let SubValue = value - 3;
        document.getElementById('output').innerHTML = 'Result: ' + SubValue;
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(SubValue), 1000);
        });
    })
    .then(value => {
        let divideValue = value / 2;
        document.getElementById('output').innerHTML = 'Result: ' + divideValue;
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(divideValue), 1000);
        });
    })
    .then(value => {
        let SumValue = value + 10;
        document.getElementById('output').innerHTML = 'Final Result: ' + SumValue;
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(SumValue), 1000);
        });
    });
});