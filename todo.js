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

//***************************
// Now that you have one element created and showing up on the screen, 
// put the same code inside a for loop and iterate over the length of the array. 
// But now just change out [0] for [i]! (Refer back to your for loop lesson if needed)

const populateTodos = () => {

    //these are the pieces I need to put the title in the ol
    let todoList = document.getElementById('todo-list') 

    //START For-Loop
    // To name a for-loop-counter: 1) assign start, 2) condition to stop, 3)then, increment by how many.
    for(let i=0; i < arrayOfTodos.length; i++) {
        
        let todoListItem = document.createElement('LI')
        let todoText = document.createTextNode(arrayOfTodos[i].title)

        //build the string of code
        todoListItem.appendChild(todoText) //puts the text in the Li
        todoList.appendChild(todoListItem) //puts the li in the ol


    } //END For-Loop
}


// const populateV2 = () => {

//     let todoList2 = document.getElementById('todo-list');
//     for (let i=0; i<arrayOfTodos.length; i++) {

//         let todoListItem = document.createElement('LI');
//         todoListItem.innerHTML = `<h3>${arrayOfTodos[i].title}</h> <p>${arrayOfTodos[i].completed}</p>`
//         todoList.appendChild(todoListItem);
//     }


// }
