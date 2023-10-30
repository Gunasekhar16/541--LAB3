const billTotalInput = document.getElementById("billTotal");
const tipInput = document.getElementById("tip");
const tipPercentageInput = document.getElementById("tipPercentage");
const tipAmountInput = document.getElementById("tipAmount");
const totalBillWithTipInput = document.getElementById("totalBillWithTip");

document.getElementById("tipCalculator").addEventListener("input", updateTip);

function updateTip() {
    // Get the bill total and tip percentage
    const billTotal = parseFloat(billTotalInput.value);
    const tipPercentage = parseFloat(tipInput.value);

    // Validate bill total input
    if (isNaN(billTotal)) {
        alert("Please enter a valid number for Bill Total.");
        billTotalInput.value = "";
        return;
    }

    // Calculate tip amount and total bill with tip
    const tipAmount = (billTotal * tipPercentage) / 100;
    const totalBillWithTip = billTotal + tipAmount;

    tipPercentageInput.value = tipPercentage.toFixed(2);
    tipAmountInput.value = tipAmount.toFixed(2);
    totalBillWithTipInput.value = totalBillWithTip.toFixed(2);
}

updateTip();
