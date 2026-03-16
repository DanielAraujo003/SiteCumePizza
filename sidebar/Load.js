console.log("JS carregou")

fetch("../sidebar/index.html")
.then(res => res.text())
.then(data => {

document.getElementById("sidebar").innerHTML = data

const paginaAtual = window.location.href
const links = document.querySelectorAll(".lista a")

links.forEach(link => {

    if(paginaAtual === link.href){
        link.parentElement.classList.add("active")
        }

    })

})