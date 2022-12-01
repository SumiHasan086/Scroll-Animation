const boxes=document.querySelectorAll(".box");

window.addEventListener("scroll",checkbox);

function checkbox(){

    const triggerbottom=window.innerHeight /5 * 4;

    boxes.forEach((box)=>{
        const boxTop=box.getBoundingClientRect().top;

        if(boxTop < triggerbottom){
            box.classList.add("active");
        }else{
            box.classList.remove("active");
        }
    })
} 