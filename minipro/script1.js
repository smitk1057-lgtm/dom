let box=document.querySelector('p')
let btn=document.querySelector('button')
let offbtn=document.querySelector('.offButton')

btn.addEventListener('click',()=>{
//box.style.backgroundColor='yellow'
box.style.scale='1'
})

offbtn.addEventListener('click',()=>{
   // box.style.backgroundColor='red'
   box.style.scale='0.5'
})

