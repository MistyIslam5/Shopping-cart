document.getElementById('cas-increase').addEventListener('click', function(){
    handleProdudctChanger(true);
});

document.getElementById('case-decrease').addEventListener('click', function(){
    handleProdudctChanger(false);
});

function handleProdudctChanger(inIncrease){
    const caseInput = document.getElementById('case-count');
    const caseCount = parseInt(caseInput.value);
    let caseNewCount = caseCount;
    if(inIncrease == true){
        caseNewCount = caseCount + 1;
    }
    if(inIncrease == false && caseCount>0){
        caseNewCount = caseCount - 1;
    }
    caseInput.value = caseNewCount;
    const caseTotal = caseNewCount * 59;
    document.getElementById('case-total').innerText = '$'+caseTotal;
    calculatTotal();
}
document.getElementById('phone-increase').addEventListener('click', function(){
    handleProdudct(true);
});

document.getElementById('phone-decrease').addEventListener('click', function(){
    handleProdudct(false);
});



function handleProdudct(inIncrease){
    const phoneInput = document.getElementById('phone-count');
    const phoneCount = parseInt(phoneInput.value);
    let phoneNewCount = phoneCount;
    if(inIncrease == true){
        phoneNewCount = phoneCount + 1;
    }
    if(inIncrease == false && phoneCount>0){
        phoneNewCount = phoneCount - 1;
    }
    phoneInput.value = phoneNewCount;
    const phoneTotal = phoneNewCount * 1219;
    document.getElementById('phone-total').innerText = '$'+phoneTotal;
    calculatTotal();
}
function calculatTotal(){
    const phoneInput = document.getElementById('phone-count');
    const phoneCount = parseInt(phoneInput.value);

    const caseInput = document.getElementById('case-count');
    const caseCount  = parseInt(caseInput.value);

    const totalPrice = phoneCount * 1219 + caseCount * 59;
    document.getElementById('total-price').innerText = '$'+totalPrice;
}







