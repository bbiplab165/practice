const arr = ['apple', 'oranges', ' ', 'mango', ' ', 'lemon']
const newArr = arr.map((i) => {
    if (i == " ") {
        return "empty string"
    }
    else {
        return i
    }
})
console.log(newArr)

