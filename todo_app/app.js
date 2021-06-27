//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo')

//event listeners
todoButton.addEventListener('click',addTodo)
todoList.addEventListener('click',deleteCheck)
filterOption.addEventListener('click',filterTodo)
//functions

function addTodo(event){

    //prevent form from submitting
    event.preventDefault();

    //todo DIV
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    //create li
    const newTodo = document.createElement('li')
    newTodo.innerText= todoInput.value
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)
    //check mark button
    const completedButton= document.createElement('button')
    completedButton.innerHTML= 'checked'
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton)
        //trash mark button
    const trashButton= document.createElement('button')
    trashButton.innerHTML= 'trash'
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)
    //Append to List
    todoList.appendChild(todoDiv)
    //clear todo input value
    todoInput.value=""
}

function deleteCheck(e){
    const item = e.target
    //delete todo
    if(item.classList[0]==='trash-btn'){
        const todo = item.parentElement
        //animation
        todo.classList.add('fall')
        todo.addEventListener('transitionend',function(){
            todo.remove()
        })
        // todo.remove()
    }
    if(item.classList[0]==='complete-btn'){
        const todo = item.parentElement
        todo.classList.toggle("completed")
    }
}

function filterTodo(e){
    const todos = todoList.childNodes
    todos.forEach(function(todo){
        // switch(e.target.value){
        //     case "all":
        //         todo.style.display="none"
        //         break;
            // case "completed":
            //     if(todo.classList.contains('completed')){
            //         todo.style.display='flax'
            //     }
            //     else{
            //         todo.style.display="none"
            //     }
               
            // case "uncompleted":
            //     if(!todo.classList.contains('completed')){
            //         todo.style.display="flex"
            //     }
            //     else{
            //         todo.style.display="none"
            //     }
            // }
    })
}