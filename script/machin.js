
function getFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}


function getBalance() {
    const balance = document.getElementById('balance');
    const balanceS = balance.innerText;
    return Number(balanceS);
}

function setBalance(value) {
    const balance = document.getElementById('balance');
    balance.innerText = value;
}


function showOnly(id) {
    const addMoney = document.getElementById('addmoney');
    const cashOut = document.getElementById('cashout');
    const transferMoney = document.getElementById('money-transfer');
    const getBonus = document.getElementById('get-bonus');
    const payBill = document.getElementById('pay-bill');
    const transaction = document.getElementById('container');

    transaction.classList.add('hidden');
    payBill.classList.add('hidden');
    getBonus.classList.add('hidden');
    transferMoney.classList.add('hidden');
    addMoney.classList.add('hidden');
    cashOut.classList.add('hidden');

    const select = document.getElementById(id);
    select.classList.remove('hidden');

}

