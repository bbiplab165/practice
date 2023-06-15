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

    // const enterValue = expense + " - " + description + " - " + category;

    // const li = document.createElement("li");
    // li.appendChild(document.createTextNode(enterValue));

    let deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete Expense"));

    // Delete button
    // deleteBtn.addEventListener("click", function () {
    //     li.remove();
    //     const id=i._id
    //     axios.delete(`https://crudcrud.com/api/6e4d6de80b41438e921eca5e0dbc3601/user/${id}`)

    //     // let data = JSON.parse(localStorage.getItem("items")) || [];
    //     // let index = data.indexOf(enterValue);
    //     // if (index !== -1) {
    //     //     data.splice(index, 1);
    //     //     // localStorage.setItem("items", JSON.stringify(data));
    //     //     // axios.post("https://crudcrud.com/api/5bdfba8a52ae411f91f9f616b69bce81/user")
    //     // }
    // });

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


        }
    });


    const enterValue2 = { expense, description, category }
    let storedData = []
    axios.post("https://crudcrud.com/api/5916111abdc5446c86c469b76c8caf09/user", enterValue2)
        .then((response) => {
            console.log(response)
            storedData = response.data
            console.log(storedData.length);

            storedData.forEach(function (i) {
                console.log(i._id)

                const data = i.expense + " - " + i.description + " - " + i.category

                const li = document.createElement("li");
                li.appendChild(document.createTextNode(data));

                let deleteBtn = document.createElement("button");
                deleteBtn.appendChild(document.createTextNode("Delete Expense"));

                deleteBtn.addEventListener("click", function () {
                    li.remove();
                    const id = i._id
                    axios.delete(`https://crudcrud.com/api/5916111abdc5446c86c469b76c8caf09/user/${id}`)
                });
                li.appendChild(editBtn);
                li.appendChild(deleteBtn);
                item.appendChild(li);

            })
        })
        .catch((err) => console.log(err))
}

function loadStoredData() {
    let storedData = []
    axios.get("https://crudcrud.com/api/5916111abdc5446c86c469b76c8caf09/user")
        .then((response) => {

            storedData = response.data
            console.log(storedData.length);

            storedData.forEach(function (i) {
                console.log(i._id)

                const data = i.expense + " - " + i.description + " - " + i.category

                const li = document.createElement("li");
                li.appendChild(document.createTextNode(data));

                let deleteBtn = document.createElement("button");
                deleteBtn.appendChild(document.createTextNode("Delete Expense"));

                deleteBtn.addEventListener("click", function () {
                    li.remove();
                    const id = i._id
                    axios.delete(`https://crudcrud.com/api/5916111abdc5446c86c469b76c8caf09/user/${id}`)

                });

                let editBtn = document.createElement("button");
                editBtn.appendChild(document.createTextNode("Edit Button"));

                editBtn.addEventListener("click", function () {
                    let newExpense = prompt("Enter new expense");
                    let newDescription = prompt("Enter new description");
                    let newCategory = prompt("Enter new category");

                    if (newExpense && newDescription && newCategory) {
                        let updatedValue = newExpense + " - " + newDescription + " - " + newCategory;
                        const id = i._id;
                        axios.patch(`https://crudcrud.com/api/5916111abdc5446c86c469b76c8caf09/user/${id}`, {
                            expense: newExpense,
                            description: newDescription,
                            category: newCategory
                        })
                            .then((response) => {
                                console.log(response);
                                const updatedItem = response.data;
                                const updatedValue = `${updatedItem.expense} - ${updatedItem.description} - ${updatedItem.category}`;
                                li.firstChild.textContent = updatedValue;
                            })
                            .catch((err) => console.log(err));
                    }
                });

                li.appendChild(editBtn);
                li.appendChild(deleteBtn);
                item.appendChild(li);
            });
        })
        .catch((err) => console.log(err))

    console.log(storedData);

}