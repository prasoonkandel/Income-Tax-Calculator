form = document.getElementById("tax-form");
console.log("Hi");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let monthlysalary = parseFloat(document.getElementById("salary").value);
  let bonus = parseFloat(document.getElementById("bonus").value);
  let no_months = parseFloat(document.getElementById("months").value);
  const status = document.getElementById("status").value;

  let others = parseFloat(document.getElementById("others").value);
  let tax = 0;
  let epf = parseFloat(document.getElementById("epf").value);
  let cit = parseFloat(document.getElementById("cit").value);
  let insurance = parseFloat(document.getElementById("insurance").value);

  let salaryIncome = monthlysalary * no_months;
  let totalDeductions = epf + cit + insurance;
  let totalIncome = salaryIncome + bonus + others;
  if (isNaN(totalDeductions)) {
    totalDeductions = parseFloat(
      document.getElementById("totalDeductions").value
    );
  }
  if (isNaN(totalIncome)) {
    totalIncome = parseFloat(document.getElementById("totalIncome").value);
  }
  document.getElementById("totalDeductions").value = totalDeductions;
  document.getElementById("totalIncome").value = totalIncome;

  if (isNaN(totalDeductions)) {
    alert("Total deduction can't be empty");
    return;
  }
  if (isNaN(totalIncome)) {
    alert("Total income can't be empty");
    return;
  }

  let taxableAmount = totalIncome - totalDeductions;
  let totalTax = TaxCalculation(taxableAmount, status);

  const yearlyTax = totalTax;
  const monthlyTax = yearlyTax / 12;

  console.log("Yearly Tax:", yearlyTax);
  console.log("Monthly Tax:", monthlyTax);
  document.getElementById("ai").value = totalIncome.toFixed(2);
  document.getElementById("ad").value = totalDeductions.toFixed(2);
  document.getElementById("yt").value = yearlyTax.toFixed(2);
  document.getElementById("mt").value = monthlyTax.toFixed(2);
  let button = document.getElementById("close-btn");
  document.body.classList.toggle("pop");
  button.addEventListener("click", () => {
    document.body.classList.remove("pop");
  });
  function TaxCalculation(income, status) {
    let tax = 0;
    if (status === "m") {
      if (income <= 600000) tax = income * 0.01;
      else if (income <= 800000) tax = 600000 * 0.01 + (income - 600000) * 0.1;
      else if (income <= 1100000)
        tax = 600000 * 0.01 + 200000 * 0.1 + (income - 800000) * 0.2;
      else if (income <= 2000000)
        tax =
          600000 * 0.01 +
          200000 * 0.1 +
          300000 * 0.2 +
          (income - 1100000) * 0.3;
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
          500000 * 0.01 +
          200000 * 0.1 +
          300000 * 0.2 +
          (income - 1000000) * 0.3;
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
});
