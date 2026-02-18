
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
})