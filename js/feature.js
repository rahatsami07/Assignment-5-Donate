document.getElementById('show-donation')
.addEventListener('click', function(){
    document.getElementById('show-donation').classList.add('bg-[#B4F461]')
    document.getElementById('show-history').classList.remove('bg-[#B4F461]')
    showDonationById('donation-section');
    
})
document.getElementById('show-history')
.addEventListener('click', function(){
    document.getElementById('show-history').classList.add('bg-[#B4F461]')
    document.getElementById('show-donation').classList.remove('bg-[#B4F461]')
    showDonationById('history-section')
})