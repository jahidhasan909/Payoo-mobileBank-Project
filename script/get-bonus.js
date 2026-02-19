
document.getElementById('coupon-btn').addEventListener('click', function () {
    const myCoupon = getFromInput('coupon-input');
    const bonusAmount = 5000;
    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(bonusAmount);


    if (myCoupon === 'jahid999') {
        alert(`Add bonus ${bonusAmount}Tk ${new Date}`)
        setBalance(newBalance);
    } else {
        alert('Invalid coupon');
    }

    const container = document.getElementById('container');
    const div = document.createElement('div');
    div.innerHTML = `
    <i class="fa-solid fa-folder-plus" style="color: rgb(226, 180, 10);"></i>
    <article>
    <h3>Add bonus : ${bonusAmount}Tk</h3>
    <p>${new Date}</p>
    </article>
    `
    container.appendChild(div);
})