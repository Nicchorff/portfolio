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

//SmallConfig 
var sideMenu = document.getElementById("sideMenu");

function openMenu(){
    sideMenu.style.right = "0";
}

function closeMenu(){
    sideMenu.style.right = "-150px";
}

//Send form
const handleSubmit = (x) => {
    x.preventDefault();

    const form = document.forms['formContato']
    const name = document.querySelector('input[name=Name]').value 
    const email = document.querySelector('input[name=Email]').value
    const menssagem = document.querySelector('textarea[name=Menssage]').value

    const nameAfter = document.querySelector('input[name=Name]').value = ""
    const emailAfter = document.querySelector('input[name=Email]').value = ""
    const menssagemAfter = document.querySelector('textarea[name=Menssage]').value = ""

    fetch('https://api.sheetmonkey.io/form/bsgSVsutVY8xoDy7QC1S29', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({Name: name, Email: email, Menssage: menssagem}),
    })
}

document.querySelector('form').addEventListener('submit', handleSubmit);

console.log("Teste")