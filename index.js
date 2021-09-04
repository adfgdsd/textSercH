let btn = document.querySelector('#btn');
let text = document.querySelector("#text");
let input = document.querySelector("#input");
let orTextx = text.innerHTML;

const highlite = () => {
    if(input.value){
        const word = input.value.trim();
        const regexp = new RegExp(word, 'g')
        text.innerHTML = orTextx.replace(regexp,`<mark>${word}</mark>`)
        
        console.log(regexp);
    }
} 

btn.addEventListener("click",()=>{highlite()});