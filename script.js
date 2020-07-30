const localStorageTransactions = JSON.parse(
  localStorage.getItem('transactions')
);

let transactions =
  localStorage.getItem('transactions') !== null ? localStorageTransactions : [];


// Remove transaction by ID
function removeTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);
  
    updateLocalStorage();
  
    init();
  }

// App start
function init() {
    list.innerHTML = '';
  
    transactions.forEach(addTransactionDOM);
    updateValues();
  }