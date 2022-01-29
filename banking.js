
function addAmount(inputID, textValue) {
    // input value
    const inputAmount = document.getElementById(inputID);
    const inputAmountValue = inputAmount.value;
    const inputConvert = parseFloat(inputAmountValue);
    console.log(inputConvert);
    // innter text value
    const dipositText1 = document.getElementById(textValue);
    const textAmountValue = dipositText1.innerText;
    const textConvert = parseFloat(textAmountValue);
    console.log(textConvert);
    // total
    const totalAmount = inputConvert + textConvert;

    inputAmount.value = '';
    return totalAmount;
}

document.getElementById('diposite-btn').addEventListener('click', function () {

    //    const inputDiposite = document.getElementById('input-diposite');
    //    const inputDipoValue = inputDiposite.value;
    const inputDipoValue = addAmount('input-diposite','dipositText');

    // const dipositText1 = document.getElementById('dipositText');
    // dipositText1.innerText = parseFloat(inputDipoValue) + parseFloat(dipositText1.innerText);

    const balanceText1 = document.getElementById('balanceText');
    const balanceInner = balanceText1.innerText;
    balanceText1.innerText = parseFloat(balanceInner) + parseFloat(inputDipoValue);

    // inputDiposite.value = '';
})
document.getElementById('widthDraw-btn').addEventListener('click', function () {

    // const inputWidthDraw = document.getElementById('input-widthDraw');
    // const inputWidthValue = inputWidthDraw.value;
    const inputWidthValue = addAmount('input-widthDraw', 'widthdrowText');

    // const widthdrowText1 = document.getElementById('widthdrowText');
    // const widthdrowInner = widthdrowText1.innerText;
    // widthdrowText1.innerText = parseFloat(inputWidthValue) + parseFloat(widthdrowInner);

    const balanceText2 = document.getElementById('balanceText');
    const balanceInner3 = balanceText.innerText;
    balanceText2.innerText = parseFloat(balanceInner3) - parseFloat(inputWidthValue);

    // inputWidthDraw.value = '';
})


