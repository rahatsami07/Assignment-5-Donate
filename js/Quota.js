document.getElementById('quota-donate-btn')
.addEventListener('click', function(){
    
    // const inputDonateValue = document.getElementById('input-donate').value;
    // const inputDonateNumber = parseFloat(inputDonateValue);
    const inputDonate = getInputValueById('quota-input-donate');
    if(isNaN(inputDonate)){
        alert('Failed to Donate');
        hideModal('my_modal_3');
        window.location.reload();
        return;
    }
    if(inputDonate<0){
        alert('Failed to Donate.');
        hideModal('my_modal_3');
        window.location.reload();
        return;
    }
    
    // addding process
    const donateAmount = getTextAmountById('quota-donate-amount');

    const donateBalance = inputDonate + donateAmount;


    document.getElementById('quota-donate-amount').innerText = donateBalance;

    // available balance after donate

    const availableBalance =getAvailableById('available-balance');

    if(availableBalance<inputDonate){
        alert('Unsufficient Balance!!!!!!!!!!!!!!!');
        hideModal('my_modal_3');
        window.location.reload();
        return;
    }

    const remainigAvailableBalance = availableBalance - inputDonate;

    document.getElementById('available-balance').innerText = remainigAvailableBalance;
    
    // history

    // time

    const date = new Date();

    const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: 'Asia/Dhaka',
            dateStyle: 'full',
             timeStyle: 'long'
});

const currentTime = formatter.format(date);
console.log(currentTime)

    // end

    const title = document.getElementById('quota-title').innerText;

    const div = document.createElement('div');
    div.innerHTML = `
    
    <p class = "text-2xl font-bold">${inputDonate} Taka is ${title} <br/>
    <span class = "text-lg text-gray-500"> ${currentTime}</span>
    </p>
    

    `;

    document.getElementById('donation-history').appendChild(div)


})