const inputText = document.getElementById('input-text');

// console.log('inputText ====>',inputText);
const btn = document.querySelector('.btn')
const addRemoveDiv = document.querySelector('.button')
console.log('btn ===>',btn);

const todolist = document.querySelector('.todo-list')


let todoArr = []
let id = 1

btn.addEventListener('click',function() {
    // console.log('inputText ====>',inputText);
    const inputValue = inputText.value
    if(!inputValue) {
        alert('plzz feild input vale')
        return 
    }
    console.log('inputValue ====>',inputValue);
    todoList(inputValue)
    todoArr.push(inputValue)
    localStorage.setItem('data',JSON.stringify(todoArr))
    inputText.value = ''
})

function todoList(item) {
    const li = document.createElement('li')
    li.innerHTML = `<div>  
    <span id="text">${item}</span>
  </div>
  <div class="button">
    <button class="add" title="Mark To Done">&#10003;</button>
    <button class="remove" title="Remove Item">&#10007;</button>
  </div>`
  li.children[1].addEventListener('click',addRemoveButton)
  console.log('li childeren =====>',li.children[1]);
  todolist.append(li)
}

function addRemoveButton(event) {
  if(event.target.classList.contains('add')) {
    const addItem = event.target.parentNode.parentNode
    console.log('addItem ====>',addItem);
    addItem.style.textDecoration = 'line-through'
  }

  if(event.target.classList.contains('remove')) {
    const removeItem = event.target.parentNode.parentNode
    console.log(' removeItem ==>',removeItem);
    const clickItem = event.target.parentNode.parentNode.firstElementChild.firstElementChild.innerHTML
    console.log('clickItem =====>',clickItem);
    let dataArr = JSON.parse(localStorage.getItem('data'))
    console.log('dataArr ====>',dataArr);

    let selectItem = dataArr.filter((item) => {
      return item != clickItem
    })
    console.log('selectItem ====>',selectItem);
    localStorage.setItem('data',JSON.stringify(selectItem))
    removeItem.remove()
  }
}

window.addEventListener('load',function() {
  const data = JSON.parse(localStorage.getItem('data')) || []
  todoArr = data
  data.map((item) => {
    console.log('item is =>>>>',item);
    todoList(item)
  })
}) 

