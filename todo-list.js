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
for(let i = 0; i<todoList.length; i++){
    const todoObject =todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `<p>${todo}
    <button onclick="
    todoList.splice(${i},1);
    renderTdoList();
    ">Delete</button></P>`;
    todoListHTML += html;

}
console.log(todoListHTML);

document.querySelector('.js-todo-list')
.innerHTML = todoListHTML;
}

function addTdo(){

const inputElement = document.querySelector('.js-name-input');
const name = inputElement.value;
todoList.push(name);
console.log(todoList);
inputElement.value = '';
renderTdoList();

}
     