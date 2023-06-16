const submit=document.getElementById("submit")
const body=document.getElementById("body")

submit.addEventListener("submit",handleSubmit)

function handleSubmit(e){
    e.preventDefault()
    let itemName=document.getElementById("itemName").value
    let description =document.getElementById("description").value
    let price =document.getElementById("price").value
    let quantity =document.getElementById("quantity").value
    const data={
        itemName,
        description,
        price,
        quantity
    }
    console.log(itemName)
    detail(data)
}

function detail(data) {
    let { itemName, description, price, quantity } = data;
    console.log(data);
    let li = document.createElement("li");

    let buy1 = document.createElement("button");
    buy1.appendChild(document.createTextNode("buy 1"));

    let buy2 = document.createElement("button");
    buy2.appendChild(document.createTextNode("buy 2"));

    let buy3 = document.createElement("button");
    buy3.appendChild(document.createTextNode(" buy 3"));

    function decreaseQuantity() {
        quantity--;
        data.quantity = quantity;
        quantityText.nodeValue = quantity.toString();
    }

    function decreaseQuantityBy2() {
        quantity-=2;
        data.quantity = quantity;
        quantityText.nodeValue = quantity.toString();
    }

    function decreaseQuantityBy3() {
        quantity-=3;
        data.quantity = quantity;
        quantityText.nodeValue = quantity.toString();
    }

    buy1.addEventListener("click", decreaseQuantity);
    buy2.addEventListener("click", decreaseQuantityBy2);
    buy3.addEventListener("click", decreaseQuantityBy3);

    let items = itemName.toString() + " " + description.toString() + " " + price.toString() + " ";
    let quantityText = document.createTextNode(quantity.toString());
    li.appendChild(document.createTextNode(items));
    li.appendChild(quantityText);

    li.appendChild(buy1);
    li.appendChild(buy2);
    li.appendChild(buy3);
    document.body.appendChild(li);
}
