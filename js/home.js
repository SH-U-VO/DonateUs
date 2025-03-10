console.log('hlw');
processDonation('donate-now-1', 'donate-amount-1', 'card-donate-amount-1', 'my-account', 'my-modal', 'Flood Relief in Feni, Bangladesh');


 processDonation('donate-now-2', 'donate-amount-2', 'card-donate-amount-2', 'my-account', 'my-modal', 'Flood Relief in Feni, Bangladesh');

processDonation('donate-now-3', 'donate-amount-3', 'card-donate-amount-3', 'my-account', 'my-modal', 'Aid for Injured in the Quota Movement, Bangladesh');

const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const main = document.getElementById('main');
const mainHTML = main.innerHTML;
const donationHistory = document.getElementById('donationHistory');

btn1.addEventListener('click', function() {
    btn1.style.backgroundColor = '#B4F461';
    btn2.style.backgroundColor = ''; 
    main.innerHTML = mainHTML;
    donationHistory.classList.add('hidden');

});

btn2.addEventListener('click', function() {
    btn2.style.backgroundColor = '#B4F461';
    btn1.style.backgroundColor = ''; 

    main.innerHTML = '';
    donationHistory.classList.remove('hidden');
});

