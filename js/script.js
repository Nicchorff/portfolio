const cartao = document.querySelector('.cartao-interior');
cartao.addEventListener('click', function () {
    cartao.classList.toggle('virado');
});

// About
var tablinks = document.getElementsByClassName("tabLinks");
var tabcontents = document.getElementsByClassName("tabContents");

function abrirTab(value){
    for(var tablink of tablinks){
        tablink.classList.remove("linkAtivo");
    }
    for(var tabcontent of tabcontents){
        tabcontent.classList.remove("tabAtivo");
    }
    event.currentTarget.classList.add("linkAtivo");
    document.getElementById(value).classList.add("tabAtivo");
}


console.log("Teste")