// alert("hello")
const humbarger=document.querySelector('.humbarger');
const listItem = document.querySelector('.list-menu');

humbarger.addEventListener('click', ()=>{
    humbarger.classList.toggle("active");
    listItem.classList.toggle("active")
})

