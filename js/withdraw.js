/*
1.add event handler with the withdraw button
2.get the withdraw amount from the withdraw input field
*/
// step 1:
document.getElementById('btn-withdraw-field').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input-value');
    const withdrawInputValueShow = withdrawInput.value;
    const stringWithdrawValueShow = parseFloat(withdrawInputValueShow);
    //clen input value
    withdrawInput.value = '';
    if(isNaN(stringWithdrawValueShow)) {
        alert('Please provide a valid number');
        return;

    }
    // step 2:
    const withdraw = document.getElementById('withdraw-money');
    const withdrawTotalMoney = withdraw.innerText;
    const previousWithdrawMoney = parseFloat(withdrawTotalMoney);
    
    //step 3:
    const balnce = document.getElementById('balnace');
    const withdrawValueBalnace = balnce.innerText;
    const withdrawTotal = parseFloat(withdrawValueBalnace);

    if(stringWithdrawValueShow > withdrawTotal) {
        alert('tka nai');
        return;
    }
    // step 4:
    const currentWithdrawTotal = previousWithdrawMoney + stringWithdrawValueShow;
    withdraw.innerText = currentWithdrawTotal;
    
    //calculate
    const totalBalnce = withdrawTotal - stringWithdrawValueShow;
    balnce.innerText = totalBalnce;
    
   
})