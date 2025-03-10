function processDonation(donateNowId, donateAmountId, cardDonateAmountId, myAccountID, myModalID, donationTitle) {
    const donateNow = document.getElementById(donateNowId);
    
    const modal = document.getElementById(myModalID);

    donateNow.addEventListener('click', function () {
        const myAccountText = document.getElementById(myAccountID).innerText;
    const myAccount = parseFloat(myAccountText.replace(/[^0-9.]/g, ''), 10); 

        const donateAmountText = document.getElementById(donateAmountId).value;
        const donateAmount = parseFloat(donateAmountText);
        console.log(donateAmount);

        // Donation history
        addDonationHistory(donateAmount, donationTitle);

        if (myAccount < donateAmount) {
            alert("Earn Money First");
            return;
        }

        if (donateAmount <= 0) {
            alert("Churor ar bacca chor");
            return;
        }

        const cardDonateAmountText = document.getElementById(cardDonateAmountId).textContent;
        const cardDonateAmount = parseFloat(cardDonateAmountText.replace(/[^0-9.]/g, ''), 10);
        console.log(cardDonateAmount);

        if (!isNaN(donateAmount) && !isNaN(cardDonateAmount)) {
            const cardTotalDonateAmount = cardDonateAmount + donateAmount;
            console.log(cardTotalDonateAmount);

            document.getElementById(cardDonateAmountId).textContent = cardTotalDonateAmount + " BDT";

            document.getElementById(donateAmountId).value = '';
            success = true;

        } else {
            alert("Invalid input: Please enter a valid Number");
            document.getElementById(donateAmountId).value = '';
            success = false;
        }

        // modal
        const returnAmount = myAccount - donateAmount;
        document.getElementById(myAccountID).innerText = returnAmount + " BDT";

        if (success) {
            modal.showModal();
        }

    });
}

function addDonationHistory(amount, title) {
    const historyContainer = document.getElementById('donationHistory');
    const date = new Date();

    const historyItem = `
    <div tabindex="0" class="collapse collapse-open bg-base-100 border-base-300 border my-3">
        <div class="collapse-title font-semibold">${amount} Taka is Donated for ${title}</div>
        <div class="collapse-content text-sm">
            Date : ${date.toString()}
        </div>
    </div>
`;

    historyContainer.innerHTML += historyItem;
}