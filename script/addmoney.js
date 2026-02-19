
document.getElementById('addmoney-btn').addEventListener('click', function () {
    const bankSelect = getFromInput('add-bank');

    if (bankSelect == 'Select Bank') {
        alert('please select bank');
        return;
    }

    const bankAccount = getFromInput('addmoney-account-number');

    if (bankAccount.length != 11) {
        alert('Invalid account number');
        return;
    }

    const addMoney = getFromInput('addmoney-amount');
    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(addMoney);

    const pin = getFromInput('addmoney-pin');

    if (pin == '1122') {
        alert(`Money Add from 
            ${bankSelect} :${addMoney}Tk
             ${new Date}`);
        setBalance(newBalance);
    } else {
        alert('wrong pin number');
    }



    const container = document.getElementById('container');
    const div = document.createElement('div');
    div.innerHTML = `
    <i class="fa-solid fa-folder-plus" style="color: rgb(226, 180, 10);"></i>
    <article>
    <h3>${bankSelect} :${addMoney}Tk</h3>
    <p>Money Add :: ${new Date}</p>
    </article>
    `
    container.appendChild(div);



})