# DESAFIO JS DOM

A empresa Dindin solicitou um serviço de ajustes de layout do site, mas tem um ponto muito importante: por questões técnicas, não podemos alterar os arquivos HTML, nem o CSS.
Todos os ajustes devem ser feitos através de um arquivo javascript que já está linkado ao HTML. Para isso vamos contar com seletores e métodos do JS para alterar o DOM. 



## Geral
- O header deve ter cor de fundo #2E948A.
- No menu do header, está faltando o link do item Cursos que deve redirecionar para cursos.html 



## Home
- No banner da home, está faltando centralizar os elementos filhos da section que tem o id #introducao.
- Na etapa de depoimentos, o título deveria ser "O que falam sobre nós".
- Na etapa de blog, o título deveria ser "Mais conteúdo pra você".
- Todos os textos que estiverem com a classe .titulo devem apresentar todas as letras maiúsculas.
- O botão "ver todos os posts" deve ter um link que direciona para o arquivo blog.html
- Adicionar um novo curso na section que contém o id investimentos_poupando_independencia:
```
  <div id="independencia">
    <img src="/imagens/independencia_financeira.png" width="180px" alt="Independência Financeira">
    <h2>Independência Financeira</h2>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
     eu fugiat nulla pariatur. </p>
    <a class="comecar_agora" href="./curso.html">começar agora</a>
  </div>
```

## Página Contato
- O formulário não está funcionando, o atributo action deve mandar para url sucesso.html
- Após o campo de email, precisamos de um novo campo para que o usuário adicione também um número de telefone.
- O campo de mensagem está ultrapassando o tamanho do elemento pai. Podemos resolver adicionando o atributo box-sizing: border-box;
- O botão não está do tamanho adequado, precisa ter uma largura maior;
- Abaixo da section do formulário, adicione uma seção de comentário igual a página Home.
