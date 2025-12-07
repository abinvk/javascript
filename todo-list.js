const todoList = ['make dinner', 'wash dishes'];

renderTdoList();

function renderTdoList () {

let todoListHTML = '';
for(let i = 0; i<todoList.length; i++){
    const todo =todoList[i];
    const html = `<p>${todo}</P>`;
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
