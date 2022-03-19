// 1- O header deve ter cor de fundo #2E948A.

let header = document.getElementsByTagName('header');
// console.log(header[0]);
// document.getElementsByTagName('header').style.backgroundColor = '#2E948A';
header[0].style.backgroundColor = '#2E948A';

// 2 - No menu do header, está faltando o link do item Cursos que deve redirecionar para cursos.
let linkCursos = document.querySelector('#menu_opcoes nav a:nth-child(1)');
// console.log(linkCursos);
linkCursos.setAttribute('href', 'cursos.html');

//  Na etapa de depoimentos, o título deveria ser "O que falam sobre nós".
document.querySelector(".titulo.depoimento h3").innerHTML = "O que falam sobre nós";