const submit = document.getElementById('submit')

submit.addEventListener('click', handleSubmit)

//window.addEventListener("load", fetchData);

const URL = "https://crudcrud.com/api/c36a828399034b2e98eeeb4fa2353221/message"
async function handleSubmit(e) {
    try {

        e.preventDefault()
        const message=document.getElementById('message').value
        console.log(message);
        //await saveData(message)
    }
    catch (err) {
        console.log("Error : ", err);
    }
}

async function fetchData()
{
    try{
        const response=await axios.get(URL)
        console.log(response.data);
    }
    catch (err) {
        console.log("Error : ", err);
    }
}
async function saveData(data)
{
    try{
        const data=await axios.post(URL,{message:data})
    }
    catch (err) {
        console.log("Error : ", err);
    }
}