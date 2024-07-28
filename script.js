function findPairs() {
    const number = parseInt(document.getElementById('numberInput').value);
    const resultDiv = document.getElementById('result');
    let result = '';

    if (isNaN(number) || number <= 0) {
        resultDiv.innerHTML = 'Please enter a valid positive number.';
        return;
    }

    for (let i = 1; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            const pair = number / i;
            result += `(${i}, ${pair})<br>`;
        }
    }

    resultDiv.innerHTML = result || 'No pairs found.';
}