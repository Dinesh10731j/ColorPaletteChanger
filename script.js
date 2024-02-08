const Color = document.querySelector("#color");

const Bg = document.querySelector("#bg");


const changeColor = (bgcolor)=>{
  
    Bg.style.background = bgcolor;
}




Color.addEventListener('input',(e)=>{
 changeColor(e.target.value);
});


