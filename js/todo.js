const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    //JSON.stringify()   ----> object나 array 또는 어떤 js코드건 string으로 만들어줌 
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));  
    saveToDos(); 
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;  //input의 현재 value를 새로운 변수에 복사하는 것 
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    //console.log(parsedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    //parsedToDos.forEach((item) => console.log("this is the turn of ", item)); 
    //forEach는 array의 각 item에 대해 function을 실행하게 해줌 
    //화살표 함수 해석: parsedToDos에 있는 각각의 item에 대해서 console.log할거임 item을 
}

function sexyFilter(){

}