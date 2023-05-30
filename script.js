// const element3 = document.getElementsByClassName("list-group-item");
// element3[2].style.backgroundColor = "green";
// for (let i = 0; i < element3.length; i++) {
//   element3[i].style.fontWeight = "bold";
// }

// const tag5=document.getElementsByTagName("li")
// tag5[4].style.border="1px solid lightgray";
// tag5[4].style.padding="10px";
// tag5[4].style.paddingLeft="20px"
// tag5[4].style.backgroundColor="lightgray"
// tag5[4].style.fontWeight="bold"

// const list=document.querySelectorAll("li")
// // list[1].style.backgroundColor="green"
// list[2].style.visibility="hidden"
// list[1].style.color="lightgreen"
// console.log(list.length);
// for(let i=0;i<list.length;i++)
// {
//     if(i%2==0)
//     {
//         list[i].style.backgroundColor="green"
//     }

// }

let form = document.getElementById("addForm");
const item = document.getElementById("items");
var filter = document.getElementById('filter');

form.addEventListener("submit", addItem);
item.addEventListener("click", deleteButton);
filter.addEventListener('keyup', filterItems);

function addItem(e) {
    e.preventDefault();

    let enterValue = document.getElementById("item").value;
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(enterValue));

    let delButton = document.createElement("button");
    delButton.className = "btn btn-danger btn-sm float-right delete";
    delButton.appendChild(document.createTextNode("X"));
    li.appendChild(delButton);

    item.appendChild(li);
    
    let storedItems = localStorage.getItem("items");
    let items = storedItems ? JSON.parse(storedItems) : [];
    items.push(enterValue);
    localStorage.setItem("items", JSON.stringify(items));
}

function deleteButton(e) {
    if (e.target.classList.contains("delete")) {
        let li = e.target.parentElement;
        item.removeChild(li);
    }
}
function filterItems(e) {
    var text = e.target.value.toLowerCase();
    var items = item.getElementsByTagName("li");
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
