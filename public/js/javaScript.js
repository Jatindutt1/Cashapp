const parallex_all=document.querySelectorAll(".parallex");


let xValue =0,yValue=0;

window.addEventListener("mousemove",(e)=>{
    xValue=e.clientX -window.innerWidth /2
    yValue=e.clientY -window.innerHeight /2
    console.log(xValue ,yValue);

    parallex_all.forEach((el)=>{
        el.style.transform = `translateX(calc(-50% + ${xValue}px) translateY(calc(-50% + ${yValue}px)`;
        el.style.backgroundColor=red;
    
    })
    
})