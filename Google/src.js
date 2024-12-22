const clean = document.getElementById('clean')
const input = document.getElementById('input')
const search = document.getElementById('search')

clean.addEventListener("click", () =>{
    input.value = '';
})

window.addEventListener("keydown", () =>{
    if(input.value.length > 0){
        clean.style.display = 'block';
    }
})

search.addEventListener("click", () =>{
    window.location.href = `https://www.google.com/search?q=${input.value}`;
})
