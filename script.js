function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskText;

    // Complete Button
    let completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.onclick = function() {
        li.classList.toggle("completed");
    };

    // Delete Button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft= "5px";
    deleteBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";

}

