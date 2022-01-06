
var addtocontainer = document.getElementById("todos")
var addelement=document.querySelector(".todo_input");
var addbtn = document.querySelector(".add-item");
var deletebtn = document.querySelector(".deleteBtn");

addbtn.addEventListener("click",function(){

/* element related to to-do-list which are added*/

if(addelement.value.trim()){
    /* ul - tag */
    var ultag = document.createElement('ul');
    ultag.classList.add('todo-list-container');

    /* Todo list div */
    var todoList = document.createElement('div');
    todoList.classList.add('todo-list');

    /* li - tag */
    var litag = document.createElement('li');
    litag.innerText = addelement.value;
    litag.classList.add('todo-item');

    /* Button Div */
    var buttonDiv = document.createElement('div');
    buttonDiv.classList.add('button');

    /* completed button */
    var completebtn = document.createElement('button');
    completebtn.classList.add('completed');
    completebtn.innerHTML = '<i class="fas fa-check"></i>';

    /* Edit Button */
    var editbtn = document.createElement('button');
    editbtn.classList.add('editBtn');
    editbtn.innerHTML = '<i class="far fa-edit"></i>';
    
    /* delete button */
    var delbtn = document.createElement('button');
    delbtn.classList.add('trash');
    delbtn.innerHTML = '<i class="fas fa-trash"></i>';
    
    /* append all element according to related parents */
    ultag.appendChild(todoList);
    todoList.appendChild(litag);
    todoList.appendChild(buttonDiv);
    buttonDiv.appendChild(completebtn);
    buttonDiv.appendChild(editbtn);
    buttonDiv.appendChild(delbtn);
   
    /* append all element(ul-tag) with main container */
    addtocontainer.appendChild(ultag);

}
})
