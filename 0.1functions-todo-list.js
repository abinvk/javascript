
const todoList = [{
    name:'make dinner',
    dueDate: '2024-06-30'
   },{
     name:'wash dishes',
     dueDate: '2024-06-25'
   }];
renderTdoList();
function renderTdoList () {
let todoListHTML = '';
todoList.forEach(function(todoObject, index){
 const { name, dueDate } = todoObject;
  const html =`
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
      todoList.splice(${index},1);
      renderTdoList();
    "class="delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
});
document.querySelector('.js-todo-list')
.innerHTML = todoListHTML;


}

function addTdo(){
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;
const inputElement = document.querySelector('.js-name-input');
const name = inputElement.value;
todoList.push({
    //name:name,
    //dueDate: dueDate,
    name,
    dueDate
} );
inputElement.value = '';
renderTdoList();

}
     