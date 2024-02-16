
// const container =document.querySelector(".grocery-items-container")
const olItem = document.querySelectorAll("ol")
// console.log(olItem);
const enterbox=document.querySelector(".enter-box")
const input =document.querySelector(".inputText");
const ul= document.querySelector(".grocery-list");

for (let i = 0; i < olItem[0].children.length; i++) {
  // console.log("hello");
  olItem[0].children[i].onclick=()=>{
    items1= olItem[0].children[i].textContent
    input.value = items1;
  }
 
  olItem[1].children[i].onclick=()=>{
    input.value =olItem[1].children[i].textContent
    }

  olItem[2].children[i].onclick=()=>{
    input.value =olItem[2].children[i].textContent
  }

  olItem[3].children[i].onclick=()=>{
    input.value =olItem[3].children[i].textContent
    }

  olItem[4].children[i].onclick=()=>{
    input.value =olItem[4].children[i].textContent
    }
}

function sub() {
  if (input.value) {
    addList(input.value)   // here call the fun of addList nad pass the input.value
  }
else{
  alert("Before Add. Please Enter OR Select item")

}
    input.value='';
  }


  function addList(input) {
    // e.preventDefault();
    let list =document.createElement("li") ;   // here create Elemenet of li 
    list.innerHTML=`
       <span class="item">${input}</span>
    <div class="item-button">
        <button class="grocery-btn done">Done</button>
        <button class="grocery-btn remove">Remove</button>
    </div>`
ul.appendChild(list)

  }


  ul.addEventListener("click", (e)=> {
  
    if (e.target.classList.contains("done")) {
      const liSpan =e.target.parentNode.previousElementSibling;
      liSpan.style.color ="blue"
    }
    if (e.target.classList.contains("remove")) {
      const targetLi =e.target.parentNode.parentNode;   // here parentNode.parentNode means 
      targetLi.remove();
    }
    
  })
  
 