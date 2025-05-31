function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);

    return inputNumber;
}


// 

function getTextAmountById(id){
    const textAmount =  document.getElementById(id).innerText;
    const textNumber= parseFloat(textAmount)
    return textNumber;
}

function getAvailableById(id){
    const textAmount =  document.getElementById(id).innerText;
    const textNumber= parseFloat(textAmount)
    return textNumber;
}


function hideModal(id){
    const hideModal = document.getElementById(id).classList.add('hidden');
    return hideModal;
}


function showDonationById(id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById(id).classList.remove("hidden");
}