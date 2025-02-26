let time = document.querySelector(".time");
let show = document.querySelector(".show");
let count = 0;
let intervalID;


const start = () => {
    intervalId = setInterval(() => {
        time.innerText = count++;
    },1000)
}

const stop = () => {
    get();
    clearInterval(intervalId);
}

const reset = () => {
    count = 0;
    time.innerText=count;
    clearInterval(intervalId);
}

const get = () => {
    
    let p = document.createElement("p");
    p.innerText = `The stop value is ${Math.max(0,count - 1)}`;
    show.append(p);
}

const clear = () => {
    show.innerHTML = "";
}







document.querySelector(".start").addEventListener("click",start);
document.querySelector(".stop").addEventListener("click",stop);
document.querySelector(".reset").addEventListener("click",reset);
document.querySelector(".getTime").addEventListener("click",get);
document.querySelector(".clearTime").addEventListener("click",clear);