let btn = document.getElementById("btn");
let list = document.getElementById("list");
let input = document.getElementById("input");

btn.addEventListener("click", () => {
  if (input.value == "") {
    alert("invalid task!");
  } else {
    addToDo(input.value);
    input.value = "";
  }
});

input.addEventListener("keyup", (press) => {
  if (input.value == "") {
    alert("invalid task!");
  } else {
    if (press.key == "Enter") {
      addToDo(input.value);
      input.value = "";
    }
  }
});

const addToDo = (text) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
       ${text}
       <span style=" cursor:pointer; display: flex; float: right;" class="material-symbols-outlined">
       close
   </span>
  `;
  listItem.querySelector("span").addEventListener("click", function () {
    listItem.remove();
  });
  list.appendChild(listItem);
};
