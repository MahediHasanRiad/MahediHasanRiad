function amount(inputAmmount){
    const inputAmount = document.getElementById(inputAmmount);
    const inpoValue = inputAmount.value;
    const valueConvert = parseFloat(inpoValue);

    inputAmount.value = '';
    return valueConvert;
}
function totalAmount(totalAmount, amountValue){
    const dipositText1 = document.getElementById(totalAmount);
    const dipoTextInner = dipositText1.innerText;
    const dipoInnerConvert = parseFloat(dipoTextInner);

    dipositText1.innerText = amountValue + dipoInnerConvert;
}
function totalBalance(balance,amountValue, boolean){
    const balance1 = document.getElementById(balance);
    if(boolean == true){
        balance1.innerText = amountValue + parseFloat(balance1.innerText);
    }else{
        balance1.innerText = parseFloat(balance1.innerText) - amountValue;
    }
    inputDiposite.value = '';
}

document.getElementById('diposite-btn').addEventListener('click', function(){

    const amountValue = amount('input-diposite');
    totalAmount('dipositText', amountValue);
    totalBalance('balanceText',amountValue, true);
    
})
document.getElementById('widthDraw-btn').addEventListener('click', function(){

    const amountValue = amount('input-widthDraw');
    totalAmount('widthdrowText', amountValue);
    totalBalance('balanceText',amountValue);
     
})