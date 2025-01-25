
let middle = document.getElementById("middle");
const error = document.getElementById("error");

const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const clear = document.getElementById("clear");

let value = 0;

middle.innerHTML = `Your Current Count is : ${value}`;
clear.style.display = "none";


increment.addEventListener("click", () => {
    value++;
    if(value>0)
    {
        error.innerHTML = "";
    }
    if(value > 0)
    {
        clear.style.display = "inline";
    }
    middle.innerHTML = `Your Current Count is : ${value}`;
});

decrement.addEventListener("click", () => {
    if(value===0)
    {
        clear.style.display = "none";
    }
    if(value>0){
        value--;
        middle.innerHTML = `Your Current Count is : ${value}`;
        }
        else{
            error.innerHTML = " Error : Cannot go below 0";
        }    
});

clear.addEventListener("click",()=>{
    value = 0;
    middle.innerHTML = `Your Current Count is : ${value}`;
    error.innerHTML = "";
})

