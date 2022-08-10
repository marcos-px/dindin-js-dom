let changeColorHeader = document.getElementById('cabecalho');
changeColorHeader.style.backgroundColor = "#2E948A"; //Alteração de cor do header

let changeLinkCursos = document.querySelector('#menu_opcoes nav a:nth-child(1)');
changeLinkCursos.setAttribute('href', '/cursos.html');

let centralizeIntroducao = document.getElementById('introducao');
centralizeIntroducao.style.justifyContent = 'center'; // Home 1 - Centralizar elementos filhos

let changeTestemonials = document.querySelector('.depoimento h3');
changeTestemonials.innerHTML = '"O que falam sobre nós."'; //Home 2 - 

let changeBlog = document.querySelector("body > main > section:nth-child(5) > h3");
changeBlog.innerHTML = 'Mais conteúdo para você:'; //Home 3 - 

function upperTitulo(){
    document.querySelectorAll('.titulo').forEach(function(nameClass){
        nameClass.innerHTML = nameClass.innerHTML.toUpperCase()
    });
};
upperTitulo();//Home4

let changeButtonTodos = document.getElementById('todos_posts');
changeButtonTodos.setAttribute('href', '/blog.html'); //Home5

//Home 6
const newCourse = document.querySelector("#investimentos_poupando_independencia");
const setNewCourse = newCourse.appendChild(document.createElement('div'));
setNewCourse.setAttribute('id', 'independencia')

const imgNewCourse = setNewCourse.appendChild(document.createElement('img'));
imgNewCourse.src = 'imagens/independencia_financeira.png'
imgNewCourse.setAttribute('width','180px');
imgNewCourse.setAttribute('alt','Independência Financeira');

const hNewCourse = setNewCourse.appendChild(document.createElement('h2'));
hNewCourse.innerHTML = 'Independência Financeira';

const pNewCourse = setNewCourse.appendChild(document.createElement('p'));
pNewCourse.innerHTML = 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'

const aNewCourse = setNewCourse.appendChild(document.createElement('a'));
aNewCourse.className = 'comecar_agora';
aNewCourse.setAttribute('href', './curso.html');
aNewCourse.innerHTML = 'começar agora';

//Página Contato

const setEnviar = document.getElementById('enviar').onclick = function() {
    document.getElementById('form').action = '/sucesso.html';
    }

setEnviar.className = 'sucesso';








