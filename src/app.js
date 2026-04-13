const input = document.querySelector('#bookmarkInput');
const addBtn = document.querySelector('#addBookmarkBtn');
const list = document.querySelector('#bookmarkList');

let myBox = [];


function create() {
  list.innerHTML = ""; 

  myBox.forEach((url) => {
    const li = `<li><a href="${url}">${url}</a></li>`;
    list.insertAdjacentHTML("beforeend", li);
  });
}

addBtn.addEventListener('click', (event) => {
  const url = input.value;


  myBox.push(url); 


  create(); 

  input.value = ""; 
});