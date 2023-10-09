const listForm = document.getElementById("listForm");
const buttonCross = document.getElementById("buttonCross");
const lists = [];

const clearInput = function (event) {
    event.target.list.value="";
};

listForm.addEventListener("submit", event => {
    event.preventDefault();

    const list = {
        list: event.target.list.value,
    };

    lists.push(list);

    const textItem = document.createElement("p");
    textItem.innerText = `Задание: ${list.list}`;
    toDoList.append(textItem);
    toDoList.classList.add("list");
    clearInput(event);
});

const crossBtn = function() {
    if(toDoList.hasChildNodes())  {
        toDoList.hasChildNodes.remove();
    }
};

buttonCross.addEventListener("click", crossBtn);


