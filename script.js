const form = document.getElementById("tax-form");
document.getElementById("totalIncome").value = 0.0;
document.getElementById("totalDeductions").value = 0.0;
form.addEventListener("input", calculateTotals);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { totalIncome, totalDeductions } = calculateTotals();
  const status = document.getElementById("status").value;

  if (totalIncome <= 0) {
    alert("Total income can't be empty or zero");
    return;
  }

  const taxableAmount = totalIncome - totalDeductions;
  const totalTax = TaxCalculation(taxableAmount, status);
  const monthlyTax = totalTax / 12;

  document.getElementById("ai").value = totalIncome.toFixed(2);
  document.getElementById("ad").value = totalDeductions.toFixed(2);
  document.getElementById("yt").value = totalTax.toFixed(2);
  document.getElementById("mt").value = monthlyTax.toFixed(2);

  document.body.classList.toggle("pop");

  const button = document.getElementById("close-btn");
  if (button) {
    button.addEventListener("click", () => {
      document.body.classList.remove("pop");
    });
  }
});

function calculateTotals() {
  const monthlySalary =
    parseFloat(document.getElementById("salary").value) || 0;
  const bonus = parseFloat(document.getElementById("bonus").value) || 0;
  const festival = parseFloat(document.getElementById("festival").value) || 0;
  const others = parseFloat(document.getElementById("others").value) || 0;
  const epfPercent = parseFloat(document.getElementById("epf").value) || 0;
  const cit = parseFloat(document.getElementById("cit").value) || 0;
  const insurance = parseFloat(document.getElementById("insurance").value) || 0;

  const noMonths = 12;
  const salaryIncome = monthlySalary * noMonths;

  const epf = (epfPercent / 100) * salaryIncome;
  const totalDeductions = epf + cit + insurance;
  const totalIncome = salaryIncome + bonus + festival + others;

  document.getElementById("totalIncome").value = totalIncome.toFixed(2);
  document.getElementById("totalDeductions").value = totalDeductions.toFixed(2);

  return { totalIncome, totalDeductions };
}
function TaxCalculation(income, status) {
  let tax = 0;
  if (status === "m") {
    if (income <= 600000) tax = income * 0.01;
    else if (income <= 800000) tax = 600000 * 0.01 + (income - 600000) * 0.1;
    else if (income <= 1100000)
      tax = 600000 * 0.01 + 200000 * 0.1 + (income - 800000) * 0.2;
    else if (income <= 2000000)
      tax =
        600000 * 0.01 + 200000 * 0.1 + 300000 * 0.2 + (income - 1100000) * 0.3;
    else if (income <= 5000000)
      tax =
        600000 * 0.01 +
        200000 * 0.1 +
        300000 * 0.2 +
        900000 * 0.3 +
        (income - 2000000) * 0.36;
    else
      tax =
        600000 * 0.01 +
        200000 * 0.1 +
        300000 * 0.2 +
        900000 * 0.3 +
        3000000 * 0.36 +
        (income - 5000000) * 0.39;
  } else {
    if (income <= 500000) tax = income * 0.01;
    else if (income <= 700000) tax = 500000 * 0.01 + (income - 500000) * 0.1;
    else if (income <= 1000000)
      tax = 500000 * 0.01 + 200000 * 0.1 + (income - 700000) * 0.2;
    else if (income <= 2000000)
      tax =
        500000 * 0.01 + 200000 * 0.1 + 300000 * 0.2 + (income - 1000000) * 0.3;
    else if (income <= 5000000)
      tax =
        500000 * 0.01 +
        200000 * 0.1 +
        300000 * 0.2 +
        1000000 * 0.3 +
        (income - 2000000) * 0.36;
    else
      tax =
        500000 * 0.01 +
        200000 * 0.1 +
        300000 * 0.2 +
        1000000 * 0.3 +
        3000000 * 0.36 +
        (income - 5000000) * 0.39;
  }
  return tax;
}
