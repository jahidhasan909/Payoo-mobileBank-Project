
document.getElementById('payBill-btn').addEventListener('click', function () {
    const selectBill = getFromInput('add-bill');

    if (selectBill == 'Select Bill') {
        alert('Select Bill');
        return;
    }
    const payAccNumber = getFromInput('pay-bill-accNumber');
    if (payAccNumber.length != 11) {
        alert('Invalid Account Number');
        return;
    }

    const billAmount = getFromInput('payBill-amount');
    const currentBalance = getBalance();
    const newBalance = currentBalance - Number(billAmount);
    if (newBalance < 0) {
        alert('Invalid Amount');
        return;
    }
    const pin = getFromInput('payBill-pin');
    if (pin === '1122') {
        alert(`${selectBill} :${billAmount}Tk ${new Date} pay successful`)
        setBalance(newBalance);
    } else {
        alert('Invalid pin');
    }
    const container = document.getElementById('container');
    const div = document.createElement('div');
    div.innerHTML = `
    <i class="fa-solid fa-folder-plus" style="color: rgb(226, 180, 10);"></i>
    <article>
    <h3>${selectBill} : ${billAmount}Tk</h3>
    <p>${new Date}</p>
    </article>
    
    `
    container.appendChild(div);
})