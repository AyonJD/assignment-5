//Capture Input value
function getInputValue(inputId) {
  const inputField = document.querySelector(inputId);
  const inputValue = parseInt(inputField.value);
    return inputValue;
}

//Get Total Spending amount
function getTotalSpend() {
  const forFood = getInputValue("#input-food");
  const forRent = getInputValue("#input-rent");
  const forOther = getInputValue("#input-other");
  const totalSpending = forFood + forRent + forOther;
  return totalSpending;
}

document.getElementById("calculate-btn").addEventListener("click", () => {
    //Error handling for Empty + String + negative input
    // if ((totalEarning < 0 || totalEarning !== "number") || (totalSpending < 0 || totalSpending > totalEarning || totalSpending !== 'number')) {
    //     alert('Please enter a valid amount')
    // }
    const totalEarning = getInputValue("#input-income");
    const totalSpending = getTotalSpend();

    //Updating total spending to the Total Spending Field
    const totalSpendField = document.getElementById('total-spend');
    totalSpendField.classList.remove('d-none')
    totalSpendField.innerText = totalSpending;

    //Updating New balance to the New Balance Field
    const newBalance = totalEarning - totalSpending;
    const newBalanceField = document.getElementById('new-balance');
    newBalanceField.classList.remove('d-none');
    newBalanceField.innerText = newBalance;
});
document.getElementById('saving-button').addEventListener('click', () => {
    //Getting the New Balance
    const newBalanceField = document.getElementById('new-balance');
    const newBalance = parseInt(newBalanceField.innerText);

    //Updating the saving amount
    const savingParcent = getInputValue("#saving-parcent");
    const savingAmount = newBalance * (savingParcent / 100);
    const savingField = document.getElementById('total-save');
    savingField.innerText = savingAmount;

    //Updating Remaining Balance
    const remainingBalance = newBalance - savingAmount;
    const remainingBanalceField = document.getElementById('remaining-balance');
    remainingBanalceField.innerText = remainingBalance;
})
