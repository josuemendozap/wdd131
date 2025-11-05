const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", function () {
    if (input.value.trim() !== "") {

        const li = document.createElement("li");

        const deleteBtn = document.createElement("button");

        li.textContent = input.value;

        deleteBtn.textContent = "❌ Delete ❌";

        li.append(deleteBtn);

        list.append(li);

        deleteBtn.addEventListener("click", function () {
            list.removeChild(li);
            input.focus();
        });

        input.value = "";

        input.focus();
    }
    else {
        input.focus();
    }
});
