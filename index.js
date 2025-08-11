let input = document.querySelector(".input-for-value")
let button = document.querySelector(".btn")
let check_input = document.querySelector(".check-input")
button.addEventListener("click", (e) => {
    e.preventDefault()
    if(input.value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
        alert('Email Is Ok!');
    } else {
        let p = document.createElement("p")
        p.innerHTML = "Please enter a valid email address"
        p.classList.toggle("incorrect")
        check_input.appendChild(p)
    }
})
input.addEventListener("input", () => {
    let error = check_input.querySelector(".incorrect")
    if (error) error.remove()
})

