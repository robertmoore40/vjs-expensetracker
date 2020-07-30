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

  function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }

// App start
function init() {
    list.innerHTML = '';
  
    transactions.forEach(addTransactionDOM);
    updateValues();
  }