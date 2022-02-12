import '../index.html';
import '../css/styles.css';

// define UI variables

const error = document.querySelector('.helper-text');
const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task')
const filter = document.querySelector('#filter');
const clearBtn = document.querySelector('.clear-tasks');
const taskList = document.querySelector('.collection');

// load all eventlisteners

loadAllEventListeners ();

// load all eventlisteners function

function loadAllEventListeners (){

    // add task event
    form.addEventListener('submit', addTask);

    //DOM load event
    document.addEventListener('DOMContentLoaded', getTasks)

    // remove task event
    taskList.addEventListener('click', removeTask);

    // clear task event
    clearBtn.addEventListener('click', clearTasks);

    // filter tasks event
    filter.addEventListener('keyup', filterTasks);

}

// show error
function showError (){
error.classList.remove('white-text');
error.classList.add('red-text');
setTimeout(()=>{
    this.clearError();
}, 2000)
}

// clear error

function clearError (){
    error.classList.remove('red-text');
    error.classList.add('white-text');
    }
// add task function

function addTask (event){

    if (taskInput.value === ''){
        showError();
                
    } else {       
        clearError();
    // create li element
    const li = document.createElement('li');

    // add class
    li.className = 'collection-item';

    // create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));

    // create new link element
    const link = document.createElement('a');

    // add class
    link.className = 'delete-item secondary-content';

    // add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';

    // append the link to the li
    li.appendChild(link);
    
    // append li to the ul
    taskList.appendChild(li);

    // store ul in Local Storage
    storeTaskInLocalStorage(taskInput.value);
    
    // enable clear button
    clearBtn.classList.remove('disabled');

    // clear input
    taskInput.value = '';
    }

    event.preventDefault();
}

// storeTaskInLocalStorage function
function storeTaskInLocalStorage (task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

// remove task from local storage function
function removeTaskFromLocalStorage(taskItem){   
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// clear text from local starage function
function clearTextFromLocalStorage(){
    localStorage.clear();
}

// get tasks function
function getTasks() {
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach(function(task){
        // create li element
        const li = document.createElement('li');

        // add class
        li.className = 'collection-item';

        // create text node and append to li
        li.appendChild(document.createTextNode(task));

        // create new link element
        const link = document.createElement('a');

        // add class
        link.className = 'delete-item secondary-content';

        // add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>';

        // append the link to the li
        li.appendChild(link);
        
        // append li to the ul
        taskList.appendChild(li);
    });
}



// remove task function
function removeTask (event) {
   
    if(event.target.parentElement.classList.contains('delete-item')) {
        event.target.parentElement.parentElement.remove();
        // remove task from the local storage
        removeTaskFromLocalStorage(event.target.parentElement.parentElement);
    }    
    if(!taskList.hasChildNodes()){
        clearBtn.classList.add('disabled');
    }
}

// clear tasks function
function clearTasks() {
    
    // lower method
    // taskList.innerHTML = '';

    //faster method
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
    
    //clear tasks from local storage
    clearTextFromLocalStorage();

    // disable clear button
    clearBtn.classList.add('disabled');
}

// filter task function
function filterTasks(event) {
    const text = event.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        // first method by using includes 
        
        // if (item.toLowerCase().includes(text) === true) {
        //     console.log('true')
        //     task.style.display = 'block';
        // } else {
        //     console.log('false')
        //     task.style.display = 'none';
        // }       

        //second method by using indexOf
        if (item.toLowerCase().indexOf(text) !== -1){
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}