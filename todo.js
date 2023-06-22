// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
}]

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)
}

// Start with getting just the first item and its title property.
// Then capture the ol item into a variable (getElementById)
// createElement to make a new LI
// createTextNode inside the li using the title property.
// Now append the text to the new element
// Then append the element to the ol element.
// Put all of that inside your populateTodos function.

// ****The Specifications/Specs:*****
// Now that you have one element created and showing up on the screen, 
// put the same code inside a for loop and iterate over the length of the array. 
// But now just change out [0] for [i]! (Refer back to your for loop lesson if needed)

const populateTodos = () => {

    for(let i=0; i<arrayOfTodos.length; i++){

        // Find OL by ID and put it in a variable
        let todoList = document.getElementById("todo-list")
      
        // Creat LI element
        let todoItem = document.createElement("LI")
      
        // Create text element for the title
        let todoTitle =  document.createTextNode(arrayOfTodos[i].title)
      
        // Put LI in the OL
        todoItem.appendChild(todoTitle)
        todoList.appendChild(todoItem)
      
    }
}   

const getByUser = () => {
  
    clearTodos()
  
    const numberInput = document.getElementById("num-input").valueAsNumber
  
    const filteredArray = arrayOfTodos.filter((arr) => arr.userId == numberInput)
  
    console.log(filteredArray)
    
    for(let i=0; i<filteredArray.length; i++){
  
        let todoList = document.getElementById("todo-list")
    
        let todoItem = document.createElement("LI")
    
        let todoTitle =  document.createTextNode(`User: ${filteredArray[i].userId} Title: ${filteredArray[i].title}`)
    
        todoItem.appendChild(todoTitle)
        todoList.appendChild(todoItem)
    
        }  
  }

const clearTodos = () => {

  let todos = document.getElementsByTagName("OL")
 
  for (i=0; i < todos.length; i++) {
      console.log(todos[i].id)
      todos[i].innerHTML = null
    }  
}



// ** Show Complete and Incomplete **

const showComplete = () => {

    clearTodos()
  
    const numberInput = document.getElementById("num-input").valueAsNumber
  
    const filteredArray = arrayOfTodos.filter((arr) => arr.userId == numberInput && arr.completed == true)
  
    console.log(filteredArray)
  
    for(let i=0; i<filteredArray.length; i++){
  
        let todoList = document.getElementById("todo-list")
    
        let todoItem = document.createElement("LI")
    
        let todoTitle =  document.createTextNode(`User: ${filteredArray[i].userId} Title: ${filteredArray[i].title}`)
    
        todoItem.appendChild(todoTitle)
        todoList.appendChild(todoItem)
    
        }  
  }
  
const showIncomplete = () => {

  clearTodos()

  const numberInput = document.getElementById("num-input").valueAsNumber

  const filteredArray = arrayOfTodos.filter((arr) => arr.userId == numberInput && arr.completed == false)

  console.log(filteredArray)

  for(let i=0; i<filteredArray.length; i++){

      let todoList = document.getElementById("todo-list")
  
      let todoItem = document.createElement("LI")
  
      let todoTitle =  document.createTextNode(`User: ${filteredArray[i].userId} Title: ${filteredArray[i].title}`)
  
      todoItem.appendChild(todoTitle)
      todoList.appendChild(todoItem)
  
      }
}
