// const input = document.querySelector('#bookmarkInput');
// const addBtn = document.querySelector('#addBookmarkBtn');
// const list = document.querySelector('#bookmarkList');

// let myBox = [];


// function create() {
//   list.innerHTML = ""; 

//   myBox.forEach((url) => {
//     const li = `<li><a href="${url}">${url}</a></li>`;
//     list.insertAdjacentHTML("beforeend", li);
//   });
// }

// addBtn.addEventListener('click', (event) => {
//   const url = input.value;


//   myBox.push(url); 


//   create(); 

//   input.value = ""; 
  
// });




const input = document.querySelector('#bookmarkInput');
const addBtn = document.querySelector('#addBookmarkBtn');
const list = document.querySelector('#bookmarkList');
let myBox = JSON.parse(localStorage.getItem("bookmarks"));
if (myBox === null) { myBox = []; }

render();

function render() {
  list.innerHTML = "";
  myBox.forEach((url, index) => {
    // Додаємо посилання + кнопку видалення (клас .delete зі стилів)
    list.innerHTML += `
      <li>
        <a href="${url}" target="_blank">${url}</a>
        <button class="delete" onclick="remove(${index})">X</button>
      </li>`;
  });
}

addBtn.addEventListener('click', () => {
  if (input.value) {
    myBox.push(input.value);
    localStorage.setItem("bookmarks", JSON.stringify(myBox));
    render();
    input.value = "";
  }
});


window.remove = (index) => {
  myBox.splice(index, 1);
  localStorage.setItem("bookmarks", JSON.stringify(myBox));
  render();
};

// ЗАВДАННЯ 2
const nameEl = document.querySelector("#username");
const passwordEl = document.querySelector("#password");
const saveEl = document.querySelector("#saveBtn");

saveEl.addEventListener("click", () => {
  localStorage.setItem("login", nameEl.value);
  localStorage.setItem("password", passwordEl.value);
  alert("Дані форми збережено!");
});


nameEl.value = localStorage.getItem("login") || "";
passwordEl.value = localStorage.getItem("password") || "";