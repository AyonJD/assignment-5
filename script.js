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
  const totalSpendField = document.getElementById("total-spend");
  const totalSpending = forFood + forRent + forOther;
  if (
    isNaN(forFood) ||
    isNaN(forRent) ||
    isNaN(forOther) ||
    forFood < 0 ||
    forRent < 0 ||
    forOther < 0
  ) {
    // alert("Please Enter a valid amount");
    totalSpendField.innerText = "";
  } else {
    return totalSpending;
  }
}

document.getElementById("calculate-btn").addEventListener("click", () => {
  const totalEarning = getInputValue("#input-income");
  const totalSpending = getTotalSpend();
  //Error Handling for Negative and Earning < Spend
  if (totalEarning <= 0) {
    alert("Please enter a valid amount");
  } else if (isNaN(totalEarning) || totalSpending == undefined) {
    alert('Please enter a valid amount')
  } else if (totalEarning < totalSpending) {
    alert("You can't spend more than you Earn");
    const totalSpendField = document.getElementById("total-spend");
      totalSpendField.innerText = '';
  } else {
    if (typeof totalSpending !== "number") {
    } else {
      //Updating total spending to the Total Spending Field
      const totalSpendField = document.getElementById("total-spend");
      totalSpendField.innerText = totalSpending;

      //Updating New balance to the New Balance Field
      const newBalance = totalEarning - totalSpending;
      const newBalanceField = document.getElementById("new-balance");
      newBalanceField.innerText = newBalance;
    }
  }
});

document.getElementById("saving-button").addEventListener("click", () => {
  //Getting the New Balance
  const newBalanceField = document.getElementById("new-balance");
  const newBalance = parseInt(newBalanceField.innerText);
  const totalEarning = getInputValue("#input-income");
  const totalSpendField = document.getElementById("total-spend");
  const totalSpending = parseInt(totalSpendField.innerText);

  //Updating the saving amount
  const savingParcent = getInputValue("#saving-parcent");
  const savingAmount = totalEarning * (savingParcent / 100);

  // Updating Remaining Balance
  const remainingBalance = newBalance - savingAmount;

  //Error handling for Saving Button and Saving Amount
  if (savingParcent < 0) {
    alert("Please enter a positive amount you want to save");
  } else if (totalEarning < savingAmount) {
    alert("You can't save more than you Earn");
  } else if (
    isNaN(totalEarning) ||
    isNaN(savingParcent) ||
    isNaN(totalSpending)
  ) {
    alert("Please fill the above field");
  } else if (remainingBalance < 0) {
    alert("You don't have enougn balance to save");
  } else {
    const savingField = document.getElementById("total-save");
    savingField.innerText = savingAmount.toFixed(2);
    const remainingBanalceField = document.getElementById("remaining-balance");
    remainingBanalceField.innerText = remainingBalance;
  }

  //Clearing all input field
  const input = Array.from(document.querySelectorAll("input"));
  input.forEach((e) => {
    e.value = "";
  });
});
