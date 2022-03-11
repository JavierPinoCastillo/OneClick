// esto es cambiar boton login a logout//


function estatus(){
    if(boton.innerHTML == "Login"){
        boton.innerHTML = "Logout";
    }
    else{
        boton.innerHTML = "Login";
    }
}

let boton = document.querySelector(".login");

boton.addEventListener("click", estatus);


// Eliminar botón Add Deinition //

function removerboton(){
    adddefinition.remove();
}

let adddefinition = document.querySelector(".adddefinition");

adddefinition.addEventListener("click", removerboton);

// Crear alerta //

function alerta(){
    alert("Ninja was liked!")
}

let likes = document.querySelectorAll(".likes");

for(let i=0; i<likes.length; i++){
    likes[i].addEventListener("click", alerta)
}

likes.addEventListener("click", alerta);