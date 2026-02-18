

// document.getElementById('cashout-btn').addEventListener('click', function () {
//     const number = document.getElementById('CashOut-number');
//     const cashOutNumber = number.value;
//     if (cashOutNumber.length !== 11) {
//         alert('Invalid Number');
//         return;
//     }

//     const pin = document.getElementById('cashout-pin');
//     const cashOutPin = pin.value;

//     if (cashOutPin === '1122') {
//         const amount = document.getElementById('Cashout-amount');
//         const cashOutAmount = amount.value;

//         const balance = document.getElementById('balance');
//         const balanceS = balance.innerText;

//         const newBalance = Number(balanceS) - Number(cashOutAmount);

//         if (newBalance < 0) {
//             alert('Invalid amount');
//         } else {
//             balance.innerText = newBalance;
//             alert('cashOut successful')
//         }
//     } else {
//         alert('Invalid Pin')
//         return;
//     }
// })





document.getElementById('cashout-btn').addEventListener('click', function () {
    const cashOutNumber = getFromInput('CashOut-number');
    if (cashOutNumber.length != 11) {
        alert('Invalid Number');
        return;
    }
    const cashOutAmount = getFromInput('Cashout-amount');

    const currentBalance = getBalance();
    const newBalance = currentBalance - Number(cashOutAmount);

    const pin = getFromInput('cashout-pin');
    if (pin === '1122') {
        if (newBalance < 0) {
            alert('Invalid balance')
            return;
        } else {
            setBalance(newBalance);
            alert(`CashOut from ${cashOutNumber}: ${cashOutAmount}Tk 
                at ${new Date}`)
        }
    } else {
        alert('Invalid pin')
        return;
    }
})