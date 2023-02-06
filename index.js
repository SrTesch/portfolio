let navF = document.getElementById("nav");
navF.addEventListener('wheel', changeNav);

function changeNav(){
    const nav = document.getElementsByClassName("antes");
    console.log(nav.length)
    for(let i = 0; i < nav.length*2; i++){
        nav[i].classList.add('depois');
        nav[i].classList.remove('antes');
    }
}
