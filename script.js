function calculateTax() {
  let monthlyincome = parseFloat(document.getElementById("income").value);
  let bonus = parseFloat(document.getElementById("bonus").value);
  let no_months = parseFloat(document.getElementById("months").value);
  const status = document.getElementById("status").value;

  let tax = 0;

  if (isNaN(monthlyincome) || monthlyincome < 0) {
    document.getElementById("result").innerText =
      "Please enter a valid income.";
    return;
  }
  let salaryIncome = monthlyincome * no_months;
  let totalIncome = salaryIncome + bonus;
  let salaryTax = TaxCalculation(salaryIncome, status);
  let totalTax = TaxCalculation(totalIncome, status);

  let bonusTax = totalTax - salaryTax;
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

  const yearlyTax = totalTax;
  const monthlyTax = salaryTax / 12;

  document.getElementById("result").innerHTML = `
            <small>Note: Bonus tax is included in yearly tax but not in monthly tax!</small>
            <br />
          <p><strong>Yearly Tax:</strong> NPR ${yearlyTax.toFixed(2)}</p>
          <p><strong>Monthly Tax:</strong> NPR ${monthlyTax.toFixed(2)}</p>
             <p><strong>Bonus Tax:</strong> NPR ${bonusTax.toFixed(2)}</p>
         
        `;
}

document.getElementById("year").innerText = new Date().getFullYear();
