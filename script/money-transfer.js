

document.getElementById('transfer-btn').addEventListener('click', function () {
    const transferAccount = getFromInput('money-transfer-number');

    if (transferAccount.length != 11) {
        alert('Invalid account number');
        return;
    }

    const transferAmount = getFromInput('transfer-amount');
    const currentBalance = getBalance();
    const newBalance = currentBalance - Number(transferAmount);
    if (newBalance < 0) {
        alert('Invalid Amount');
    } else {
        const pin = getFromInput('transfer-pin');
        if (pin === '1122') {
            alert(`Money Transfer from ${transferAccount} :${transferAmount} Tk 
                ${new Date} 
                `)
            setBalance(newBalance);
        } else {
            alert('wrong pin');
        }
    }
})