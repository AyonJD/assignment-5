//Capture Input value
function getInputValue(inputId) {
  const inputField = document.querySelector(inputId);
  const inputValue = parseInt(inputField.value);
  inputField.value = "";
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
  const totalEarning = getInputValue("#input-income");
  const totalSpending = getTotalSpend();

  //Error Handling for Negative and Earning < Spend
  if (totalEarning <= 0) {
    alert("Please enter a valid amount");
  } else if (totalEarning < totalSpending) {
    alert("You can't spend more than you Eanr");
  } else {
    //Updating total spending to the Total Spending Field
    const totalSpendField = document.getElementById("total-spend");
    totalSpendField.innerText = totalSpending;

    //Updating New balance to the New Balance Field
    const newBalance = totalEarning - totalSpending;
    const newBalanceField = document.getElementById("new-balance");
    newBalanceField.innerText = newBalance;
  }
});

document.getElementById("saving-button").addEventListener("click", () => {
  //Getting the New Balance
  const newBalanceField = document.getElementById("new-balance");
  const newBalance = parseInt(newBalanceField.innerText);

  //Updating the saving amount
  const savingParcent = getInputValue("#saving-parcent");
  const savingAmount = newBalance * (savingParcent / 100);

  //Error handling for Saving Button and Saving Amount
  if (savingParcent < 0) {
    alert("Please enter a positive amount you want to save");
  } else if (newBalance < savingAmount) {
    alert("You can't save more than you Earn");
  } else {
    const savingField = document.getElementById("total-save");
    savingField.innerText = savingAmount;

    //Updating Remaining Balance
    const remainingBalance = newBalance - savingAmount;
    const remainingBanalceField = document.getElementById("remaining-balance");
    remainingBanalceField.innerText = remainingBalance;
  }
});
