window.onload = function () {
    var counter = 0;
    var list = document.getElementById("list");
    document.getElementById("add-button").addEventListener("click", function () {
        var newTaskInput = document.getElementById("new-task-input");

        var deleteButton = document.createElement("input");
        deleteButton.setAttribute("type", "button");
        deleteButton.setAttribute("value", "X");
        deleteButton.setAttribute("id", counter);
        deleteButton.setAttribute("class", "delete-button");
        deleteButton.addEventListener("click", function () {
            var itemNumber = deleteButton.getAttribute("id");
            list.removeChild(document.getElementById("item" + itemNumber));
        });

        var newTask = document.createElement("el");
        newTask.innerText = newTaskInput.value;

        var newListItem = document.createElement("li");
        newListItem.setAttribute("id", "item" + counter);
        newListItem.appendChild(deleteButton);
        newListItem.appendChild(newTask);
        list.appendChild(newListItem);

        newTaskInput.value = "";
        counter++;
    })
};