let arrUsers = [];

function userSignup(){
    let username = document.getElementById("username");
    let password = document.getElementById("pwd");

    let user = {usuario:username.value, clave:password.value};
    
    arrUsers.push(user);

    let arrJSON = JSON.stringify(arrUsers);

    localStorage.setItem("arrUsers", arrJSON);
}

function userLogin(){
    let usersDb = localStorage.getItem("arrUsers");
    let username = document.getElementById("username").value;
    let password = document.getElementById("pwd").value;

    usersDb = JSON.parse(usersDb);

    for( let user of usersDb ){
        if( user.usuario == username  && user.clave == password){
            document.body.innerHTML = `<h1>Bienvenido/a al sistema: <span>${user.usuario}</span></h1>
                                        <a href="index.html">Volver</a>`;
            break
        }
        else{
            document.body.innerHTML = `<h1>Usuario o password no encotrado: ${username}</h1>
                                        <a href="index.html">Volver</a>`;
        }
    }
}

let registroBtn = document.getElementById("registroBtn");
let entrarBtn = document.getElementById("entrarBtn");

registroBtn.addEventListener("click" , userSignup );
entrarBtn.addEventListener("click" , userLogin);