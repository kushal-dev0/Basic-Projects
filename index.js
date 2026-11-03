const balanceEl = document.getElementById("balance");
const incomeAmountEl = document.getElementById("income-amount");
const expenseAmountEl = document.getElementById("expense-amount");
const transactionListEl = document.getElementById("transaction-list");
const transactionFormEl = document.getElementById("transaction-form");
const descriptionEl = document.getElementById("description");
const amountEl = document.getElementById("amount");

let transactions= JSON.parse(localStorage.getItem("transactions")) ||[];


transactionFormEl.addEventListener("submit",addTransaction)

function addTransaction(e){
    e.preventDefault();

    // form values;

    const description = descriptionEl.value.trim();
   const amount = parseFloat(amountEl.value)
   
    console.log(typeof(amount) + amount);

    transactions.push({
        id:Date.now(),
        description,
        amount
    })

    localStorage.setItem("transactions",JSON.stringify(transactions))

    updateTransactionlist()
    updateSummary()

    transactionFormEl.reset()
}

function updateTransactionlist(){
    transactionListEl.innerText=""

    const sortedTransactions=[...transactions].reverse()

    sortedTransactions
}