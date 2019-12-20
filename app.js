
//Definera första knappen
const incomeBtn = document.querySelector(".btn1");

//Här är funktionen som räknar inkomster
function showIncome(e) {
    e.preventDefault();
    const incomeNumber = document.querySelector(".incomeNumber").value;
    const incomeValue = document.querySelector(".incomeValue");

    incomeValue.innerHTML = "<li>" + incomeNumber + "</li>"

    const incomeTotal = document.querySelector(".incomeTotal");

    incomeTotal.innerHTML = (Number(incomeTotal.innerHTML)) + (Number(incomeNumber));

    const budgetResults = document.querySelector(".budgetValue");
    budgetResults.innerHTML = (Number(incomeTotal.innerHTML)) - (Number(expensesTotal.innerHTML));

}

//Här är en click funktion som aktiverar funktionen för räkning av inkomster
incomeBtn.addEventListener("click", showIncome);

//Definerar andra knappen
const expensesBtn = document.querySelector(".btn2");

//Här är funktionen för att räkna ut utgifterna
function showExpenses(e) {
    e.preventDefault();
    const expensesNumber = document.querySelector(".expensesNumber").value;
    const expensesValue = document.querySelector(".expensesValue");

    expensesValue.innerHTML = "<li>" + expensesNumber + "</li>"

    const expensesTotal = document.querySelector(".expensesTotal");

    expensesTotal.innerHTML = (Number(expensesTotal.innerHTML)) + (Number(expensesNumber));

    const budgetResults = document.querySelector(".budgetValue");
    budgetResults.innerHTML = (Number(incomeTotal.innerHTML)) - (Number(expensesTotal.innerHTML));

}

//click som aktiverar funktionenen som räknar utgifter
expensesBtn.addEventListener("click", showExpenses);

//Definera/hämta de olika värdena
const budgetValue = document.querySelector(".budgetValue");
const incomeTotal = document.querySelector(".incomeTotal");
const expensesTotal = document.querySelector(".expensesTotal");

//Uträkning av budget resultatet
budgetValue.innerHTML = (Number(incomeTotal.innerHTML)) - (Number(expensesTotal.innerHTML));