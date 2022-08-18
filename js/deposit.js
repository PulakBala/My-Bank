// step 1: add event listener to the deposit button 
document.getElementById('btn-deposit-field').addEventListener('click', function(){
    //step 2: get the deposit amount from the depost input field
    //for input field use .value to the value inside the input field
    const inputValue = document.getElementById('deposit-input-value');
    const inputValueShow = inputValue.value;
    const stringInputValueShow = parseInt(inputValueShow);
   
    // step 3: get the current depost money
    //for non-input (element other than input , textarea) use innerText to get the text

    const monyeDeposit = document.getElementById('money');
    const monyeDepositValue = monyeDeposit.innerText;
    const stringMoneyDepositValue = parseInt(monyeDepositValue);
    
    monyeDeposit.innerText  = stringInputValueShow ;
    const total = stringMoneyDepositValue + stringInputValueShow;
    monyeDeposit.innerText = total;
    
    
    const balnaceValue = document.getElementById('balnace');
    const currentBalnaceValue = balnaceValue.innerText;
    const stringCurrentBalnaceValue = parseInt(currentBalnaceValue);
    const totalBalnce = stringCurrentBalnaceValue + total;
    balnaceValue.innerText = totalBalnce;
    
    //step 4: clear the depost field
    inputValue.value = '';   
    
});