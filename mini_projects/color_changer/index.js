const buttons= document.querySelectorAll('.box');
const body=document.querySelector('body');

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.id==='pink'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='white'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='green'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='yellow'){
            body.style.backgroundColor=e.target.id;
        }
    })
})