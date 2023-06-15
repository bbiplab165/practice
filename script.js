const addExpense = document.getElementById("addform");
const item = document.getElementById("item");

// Load existing data on page load
window.addEventListener("DOMContentLoaded", function () {
    loadStoredData();
});

// Submit event listener for adding new items
addExpense.addEventListener("submit", addItems);

function addItems(e) {
    e.preventDefault();
    const expense = document.getElementById("expense").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;

    const enterValue = expense + " - " + description + " - " + category;

    const li = document.createElement("li");
    li.appendChild(document.createTextNode(enterValue));

    let deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete Expense"));

    // Delete button
    deleteBtn.addEventListener("click", function () {
        li.remove();

        let data = JSON.parse(localStorage.getItem("items")) || [];
        let index = data.indexOf(enterValue);
        if (index !== -1) {
            data.splice(index, 1);
            // localStorage.setItem("items", JSON.stringify(data));
            // axios.post("https://crudcrud.com/api/5bdfba8a52ae411f91f9f616b69bce81/user")
        }
    });

    // Edit button
    let editBtn = document.createElement("button");
    editBtn.appendChild(document.createTextNode("Edit Button"));

    editBtn.addEventListener("click", function () {
        let newExpense = prompt("Enter new expense");
        let newDescription = prompt("Enter new description");
        let newCategory = prompt("Enter new category");

        if (newExpense && newDescription && newCategory) {
            let updatedValue = newExpense + " - " + newDescription + " - " + newCategory;
            li.firstChild.textContent = updatedValue;

            let data = JSON.parse(localStorage.getItem("items")) || [];
            let index = data.indexOf(enterValue);
            if (index !== -1) {
                data[index] = updatedValue;
                // localStorage.setItem("items", JSON.stringify(data));
                // axios.post("https://crudcrud.com/api/5bdfba8a52ae411f91f9f616b69bce81/user")
            }
        }
    });

    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    item.appendChild(li);

    let storedData = JSON.parse(localStorage.getItem("items")) || [];
    storedData.push(enterValue);
    // localStorage.setItem("items", JSON.stringify(storedData));

    const enterValue2 = {expense ,description , category}
    axios.post("https://crudcrud.com/api/5bdfba8a52ae411f91f9f616b69bce81/user",enterValue2)
    .then((response)=> console.log(response))
    .catch((err)=>console.log(err))
}

function loadStoredData() {
    let storedData = JSON.parse(localStorage.getItem("items")) || [];
    storedData.forEach(function (i) {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(i));

        let deleteBtn = document.createElement("button");
        deleteBtn.appendChild(document.createTextNode("Delete Expense"));

        deleteBtn.addEventListener("click", function () {
            li.remove();

            let data = JSON.parse(localStorage.getItem("items")) || [];
            let index = data.indexOf(i);
            if (index !== -1) {
                data.splice(index, 1);
                localStorage.setItem("items", JSON.stringify(data));
            }
        });

        let editBtn = document.createElement("button");
        editBtn.appendChild(document.createTextNode("Edit Button"));

        editBtn.addEventListener("click", function () {
            let newExpense = prompt("Enter new expense");
            let newDescription = prompt("Enter new description");
            let newCategory = prompt("Enter new category");

            if (newExpense && newDescription && newCategory) {
                let updatedValue = newExpense + " - " + newDescription + " - " + newCategory;
                li.firstChild.textContent = updatedValue;

                let data = JSON.parse(localStorage.getItem("items")) || [];
                let index = data.indexOf(item);
                if (index !== -1) {
                    data[index] = updatedValue;
                    localStorage.setItem("items", JSON.stringify(data));
                }
            }
        });

        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        item.appendChild(li);
    });
}
