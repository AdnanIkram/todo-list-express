// selects all the elements with the calss fa-trash
const deleteBtn = document.querySelectorAll('.fa-trash')

// selects all the span elements which are nested inside the item class
const item = document.querySelectorAll('.item span')

// selects all the span elements with the class completed which are nested inside the item class
const itemCompleted = document.querySelectorAll('.item span.completed')

// here we are creating an array of all the items collected in the deleteBtn variable so we can iterate through them

Array.from(deleteBtn).forEach((element)=>{
    element.addEventListener('click', deleteItem)
})

// here we are creating an array of all the items collected in the item variable so we can iterate through them
Array.from(item).forEach((element)=>{
    element.addEventListener('click', markComplete)
})

// here we are creating an array of all the itemcompleted collected in the deleteBtn variable so we can iterate through them
Array.from(itemCompleted).forEach((element)=>{
    element.addEventListener('click', markUnComplete)
})

// here we are creating an array of all the items collected in the deleteBtn variable so we can iterate through them
async function deleteItem(){

    // storing the inner text of the element which is the second element inside the parent node of the current element
    // here the parent node is the item class and child nodes are all the spans inside it
    const itemText = this.parentNode.childNodes[1].innerText

    // start of try 

    try{
    // await will wait for the promise made by the fetch call and will move ahead after a response  
    // fetch statement pointed towards the deleteItem route of the server
    // where method displays what we intend to do with the call
    // header describes our request type
    // body is our data which we are sending, here it is in json form, itemsFromJS: is the key value and itemText is the inner text of the html element we read
        const response = await fetch('deleteItem', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'itemFromJS': itemText
            })
          })
    // the response from our fetch will be stored here in const variable data
    // the await keyword makes sure we dont move ahead untill a response is received completely
        const data = await response.json()
    // console loging the data we just received
        console.log(data)
    // refreshing our page so that we can get the updated data on our html page        
        location.reload()
    // in case of any errors we console log the error
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const itemText = this.parentNode.childNodes[1].innerText
    try{
        const response = await fetch('markComplete', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'itemFromJS': itemText
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function markUnComplete(){
    const itemText = this.parentNode.childNodes[1].innerText
    try{
        const response = await fetch('markUnComplete', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'itemFromJS': itemText
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}