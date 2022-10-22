const form = document.getElementById('addForm');
const mainList = document.getElementById('mainList');

form.addEventListener('submit',saveToLocal);
document.addEventListener('DOMContentLoaded',refresh);

function refresh(){
    axios
        .get('https://crudcrud.com/api/c526e549a5f34cdd826a48fcc247ece8/appointmentcrud1')
        .then((res) => {
            res.data.forEach(obj => {
                console.log(obj);
                showOnScreen(obj);
            })
        })
        .catch((err) => {'Error Block: ',err})
}

function saveToLocal(e){
    e.preventDefault();
    const amount = document.getElementById('amount').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
    const expense = {
        amount,
        description,
        category
    };
    axios
        .post('https://crudcrud.com/api/c526e549a5f34cdd826a48fcc247ece8/appointmentcrud1',expense)
        .then(() => {
            showOnScreen(expense);
        })
        .catch((err) => {console.log("Error Block: ",err);})
}

function showOnScreen(expObj){
    form.reset();
    removeExpenseFromScreen(expObj.description);
    const liHTML = `<li class="list-group-item" id="${expObj._id}"> Amount- Rs. ${expObj.amount}<br>Description- ${expObj.description}<br>Category- ${expObj.category}
                    <span id=${expObj.description} hidden>${expObj}</span>
                    <button id="del" onclick=deleteExpense('${expObj._id}') style="margin-left:5px">Delete</button>
                    <button id="edit" style="background-color:#f4f4f4; color:black" onclick=editExpense('${expObj.description}','${expObj.amount}','${expObj.category}','${expObj._id}')>Edit</button>                    
                    </li>`;
    mainList.innerHTML = mainList.innerHTML+liHTML; 
}

function deleteExpense(uniqID){  
        axios
            .delete(`https://crudcrud.com/api/c526e549a5f34cdd826a48fcc247ece8/appointmentcrud1/${uniqID}`)
            .then(() => {
                removeExpenseFromScreen(uniqID);
            })
            .catch((err) => {console.log(err);})
}

function editExpense(description,amount,category,uniqID){
    document.getElementById('amount').value = amount;
    document.getElementById('description').value = description;
    document.getElementById('category').value = category;
    deleteExpense(uniqID);
}

function removeExpenseFromScreen(uniqID){
    const expenseToBeDeleted = document.getElementById(`${uniqID}`);
    if(expenseToBeDeleted != null){
        mainList.removeChild(expenseToBeDeleted);
    }
}
