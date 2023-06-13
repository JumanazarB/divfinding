
let dark = document.querySelectorAll(".nav__img")[0]
let body = document.getElementsByTagName("body")[0]
let search = document.querySelector(".search")
let main = document.querySelector(".main")
let textP = document.querySelector(".text__content p")
let cout = 0
let input = document.querySelector(".search form input")
let textFlow = document.querySelector(".text__flow")
let [strong1,strong2,strong3] = [document.getElementsByTagName('strong')[0],document.getElementsByTagName('strong')[1],document.getElementsByTagName('strong')[2]]
console.log(dark);
dark.addEventListener("click",(e)=>{
    cout = cout + 1
    if ( cout% 2 === 1){
        dark.innerHTML = `<p>Light</p><img src="./img/sun.png" alt="moon">`
    }
    else{
        dark.innerHTML = `<p>Dark</p><img src="./img/moon.png" alt="moon">`
    }
    body.classList.toggle("bg-black")
    body.classList.toggle("text-white")
    dark.classList.toggle("text-white")
    // textP.classList.toggle("text)
    search.classList.toggle("bg-blue")
    main.classList.toggle("bg-blue")
    input.classList.toggle("bg-blue")
    textFlow.classList.toggle("bg-black")
    textFlow.classList.toggle("text-white")
    strong1.classList.toggle('text-white')
    strong2.classList.toggle('text-white')
    strong3.classList.toggle('text-white')
    console.log(strong1);
})
