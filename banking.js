// document.getElementById('diposite-btn').addEventListener('click', function(){

//     //update diposite
//     const dipoInput = document.getElementById('input-diposite').value;
//     const dipositTotal = document.getElementById('dipositText');
//     dipositTotal.innerText = parseFloat(dipoInput) + parseFloat(dipositTotal.innerText) ;

//     //update balance
//     const balance = document.getElementById('balanceText');
//     balance.innerText = parseFloat(dipoInput) + parseFloat(balance.innerText);
// })

//  //update withdraw
// document.getElementById('widthDraw-btn').addEventListener('click', function(){
        
//     const widthInput = document.getElementById('input-widthDraw').value;

//     const widthdrawTotal = document.getElementById('widthdrowText');
//     widthdrawTotal.innerText = parseFloat(widthInput) + parseFloat(widthdrawTotal.innerText);

//     //less balance
//    const balanceAce = document.getElementById('balanceText');
//    balanceAce.innerText = parseFloat(balanceAce.innerText) - parseFloat(widthInput);

//    widthInput = '';
// })
document.getElementById('diposite-btn').addEventListener('click', function(){

    const inputDiposite = document.getElementById('input-diposite');
    const inputDipo = inputDiposite.value;

    const dipoText = document.getElementById('dipositText');
    dipoText.innerText = parseFloat(inputDipo) + parseFloat(dipoText.innerText);

    const balanceText1 = document.getElementById('balanceText');
    balanceText1.innerText = parseFloat(inputDipo) + parseFloat(balanceText1.innerText);
})
document.getElementById('widthDraw-btn').addEventListener('click', function(){
    const inputWidthDraw = document.getElementById('input-widthDraw');
    const inputWidth = inputWidthDraw.value;

    const widthdrowText1 = document.getElementById('widthdrowText');
    widthdrowText1.innerText = parseFloat(inputWidth) + parseFloat(widthdrowText1.innerText);

    const balanceText1 = document.getElementById('balanceText');
    balanceText1.innerText = parseFloat(balanceText1.innerText) - parseFloat(inputWidth);

})