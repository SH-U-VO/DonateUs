function processDonation(donateNowId, donateAmountId, cardDonateAmountId, myAccountID) {
    const donateNow = document.getElementById(donateNowId);
    const myAccountText = document.getElementById(myAccountID).innerText;
    const myAccount = parseFloat(myAccountText.replace(/[^0-9.]/g, ''), 10);

    donateNow.addEventListener('click', function () {
        const donateAmountText = document.getElementById(donateAmountId).value;
        const donateAmount = parseFloat(donateAmountText);
        console.log(donateAmount);

        if (myAccount < donateAmount) {
            alert("Earn Money First");
            return;
        }

        if (donateAmount <= 0) {
            alert("Churor ar bacca chor");
            return;
        }

        const cardDonateAmountText = document.getElementById(cardDonateAmountId).textContent;
        const cardDonateAmount = parseFloat(cardDonateAmountText.replace(/[^0-9.]/g, ''));
        console.log(cardDonateAmount);

        if (!isNaN(donateAmount) && !isNaN(cardDonateAmount)) {
            const cardTotalDonateAmount = cardDonateAmount + donateAmount;
            console.log(cardTotalDonateAmount);

            document.getElementById(cardDonateAmountId).textContent = cardTotalDonateAmount + " BDT";

            document.getElementById(donateAmountId).value = '';

        } else {
            alert("Invalid input: Please enter a valid Number");
            document.getElementById(donateAmountId).value = '';
        }
        const returnAmount = myAccount - donateAmount;
        document.getElementById(myAccountID).innerText = returnAmount + " BDT";

    });
}