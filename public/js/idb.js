// keep DB conection open
let dbON;
// Request the Budget_Tracker DB
const dbRequest = indexedDB.open('budget-tracker',1);
//checks for version change
dbRequest.onupgradeneeded = function(event){
    const dbON = event.target.result;
    dbON.createObjectStore('new_transaction',{ autoIncrement: true });
};
//checks if the app is online if above true
dbRequest.onsuccess = function(event){
    dbON = event.target.result;
    if(navigator.onLine){
        uploadTransaction();
    }
};
//if Err then error message :) 
dbRequest.onerror = function(event){
    console.log(event.target.errorCode);
};
//Save new Transaction
function saveRecord(record){
    const transaction = dbON.transaction(['new_transaction'], 'readwrite');
    const budgetObjectStore = transaction.objectStore('new_transaction');

    budgetObjectStore.add(record)
};
// Collect the transaction data
function uploadTransaction(){
    const transaction = dbON.transaction(['new_transaction'],'readwrite');
    const budgetObjectStore = transaction.objectStore('new_transaction');
    const getAll = budgetObjectStore.getAll();

    getAll.onsuccess = function() {
        //checks if data is available
        if (getAll.result.lenght > 0){
            fetch('/api/transaction', {
                method: 'POST',
                body: JSON.stringify(getAll,result),
                headers:{
                    Accept:'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(serverResponse => {
                if (serverResponse.message){
                    throw new Error(serverResponse);
                }
                const transaction = dbON.transaction(['new_transaction'], 'readwrite');
                const budgetObjectStore = transaction.objectStore('new_transaction');
                //clear store
                budgetObjectStore.clear();

                alert('All your transactions saved');
            })
            .catch(err => {
                console.log(err);
            });
        }
    }
}
//listens for app to come back online
window.addEventListener('online', uploadTransaction);