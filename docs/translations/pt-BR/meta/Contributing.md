---
title: Contribuindo
description: Como contribuir para a Wiki do SA-MP e a documentação do open.mp.
---

Essa documentação é aberta para todos que quiserem contribuir! Tudo o que você precisa é uma conta [GitHub](https://github.com) e um tempinho livre! Você não precisa saber Git, todo o processo pode ser feito pela interface web!

Caso você queira ajudar traduzindo o conteúdo para uma linguagem especifica: Abra uma PR no arquivo [`CODEOWNERS`](https://github.com/openmultiplayer/web/blob/master/CODEOWNERS) e inclua uma nova linha contendo o diretório da linguagem e seu usuário.

## Editando o conteúdo

Em cada página no topo direito há um botão para realizar a edição:

![Botão de "editar página" presente em todas as páginas](../../frontend/public/images/contributing/edit-this-page.png)

Por exemplo, clicando em [SetVehicleAngularVelocity](../scripting/functions/SetVehicleAngularVelocity) você será redirecionado para [essa página](https://github.com/openmultiplayer/web/blob/master/docs/scripting/functions/SetVehicleAngularVelocity.md) onde será apresentado um editor de textos para realizar as edições no arquivo (presumindo que você esteja logado no GitHub).

Faça sua edição e envie um "Pull Request", ao realizar esse procedimento contribuidores da Wiki e outros membros da comunidade irão revisar sua edição, discutir e/ou adicionar informações (caso necessário), e então realizar o merge com a branch atual.

## Adicionando novos conteúdos

Adicionar novos conteúdos é um pouquinho mais "envolvente". Você pode fazer de duas maneiras:

### Interface do GitHub 

Ao entrar em um diretório do GitHub, no canto superior direito à um botão acima da lista de arquivos:

![Botão Adicionar arquivo](../../frontend/public/images/contributing/add-new-file.png)

Você também pode enviar um arquivo em formato Markdown já escrito préviamente diretamente no editor de textos do Github.

O arquivo _deve sempre conter_ a extensão `.md`, e é claro, conter o texto em formato Markdown. Para mais informações sobre o Markdown, dá uma olhadinha [nesse link](https://guides.github.com/features/mastering-markdown/).

Uma vez que tudo estiver ok, clique no botão "Propose new file" e uma nova Pull Request será aberta para revisão.

### Git

Caso você queira usar o Git é necessário realizar um clone do repositório com comando:

```sh
git clone https://github.com/openmultiplayer/wiki.git
```

Abra seu editor favorito. Recomendamos o uso do Visual Studio Code, pois o mesmo tem diversas ferramentas para edição e formatação de texto em formato Markdown. Como podem ver, estou escrevendo esse texto utilizando o Visual Studio Code!

![Visual Studio Code markdown preview](../../frontend/public/images/contributing/vscode.png)

Eu recomendo duas extensões para facilitar sua vida:

- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) by David Anson - Essa extensão garante que seu texto Markdown está formatado corretamente. Previne erros de semântica e sintáxe. Nem todos os avisos (warnings) apresentados pela extensão são importantes, mas alguns podem ajudar a melhorar a leitura. Use o bom senso na escrita, em caso de dúvidas, pergunte a um revisor.
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) by the Prettier.js Team - Essa extensão formatará automaticamente seus arquivos Markdown para utilizar um padrão consistente. O repositório da Wiki tem pré-definições já estipuladas no arquivo `package.json` , o qual a extensão deve usar automaticamente. Lembre-se de habilitar a função "Format  On Save" no seu editor para que seus arquivos Markdown sejam automaticamente formatados e salvos por padrão!

## Notas, Dicas e Cerimônias...

### Links Internos

Não utilize URLs absolutas para links internos. Utilize relative paths (caminhos relativos).

- ❌

  ```md
  Para ser usado com o [OnPlayerClickPlayer](https://www.open.mp/docs/scripting/callbacks/OnPlayerClickPlayer)
  ```

- ✔

  ```md
   Para ser usado com o [OnPlayerClickPlayer](../callbacks/OnPlayerClickPlayer)
  ```

`../` significa "suba um diretório", caso o arquivo que você esteja editando estiver na pasta `functions` e você deseja linkar algo em `callbacks` utilize `../` para subir até `scripting/` e então `callbacks/` para entrar no diretório, por fim, digite o nome do arquivo (sem `.md`) da callback que você deseja linkar.

### Imagens

Imagens vão no diretório `/static/images`. Quando você linkar a imagem utilizando `![]()` use somente `/images/` como diretório base (não é necessário utilizar o `static` logo que o mesmo é só para o repositório).

Caso tenha alguma duvida, acesse alguma página dentro do repositório que contém uma imagem e copie o código.

### Metadata

A primeira coisa e _todo_ documento deve ser a metadata:

```mdx
---
title: Minha documentação
description: Essa página é sobre coisas, e mais coisas, e hambúrgers. yay!
---
```

Todas as páginas devem incluir título e descrição.

Para uma lista completa do que pode ser usado entre os `---`, verifique a [documentação do Docusaurus](https://v2.docusaurus.io/docs/markdown-features#markdown-headers).

### Cabeçalhos

Não crie um cabeçalho de nível 1(`<h1>`), utilizando `#` o mesmo é gerado automaticamente. Seu primeiro cabeçalho deve _sempre_ ser  `##`

- ❌

  ```md
  # Meu título

  Essa documentação é para ...

  # Subseção
  ```

- ✔

  ```md
  Essa documentação é para ...

  ## Subseção
  ```

### Utilize partes de `códigos` para Referências Técnicas

Quando estiver escrevendo um paragráfo que contem funções, números, expressões ou algo não relacionado a escrita padrão, coloque o mesmo entre acentos graves,  \`dessa forma\`. Torna-se mais fácil o discernimento entre linguagem de programação e descrições técnicas, tais como nomes de funções e partes de códigos.

- ❌

  > A função fopen irá retornar o valor com tag de tipo File:, não há problemas no retorno dessa linha pois o valor da mesma esta sendo armazenado em uma variável também do tipo File: (note que os cases são iguais). Por outro lado, na próxima linha o valor 4 está sendo adicionado ao handle do arquivo. 4 não possuí tag [...]

- ✔

  > A função `fopen` irá retornar o valor com tag de tipo `File:`, não há problemas no retorno dessa linha pois o valor da mesma esta sendo armazenado em uma variável também do tipo `File:` (note que os cases são iguais). Por outro lado, na próxima linha o valor `4` está sendo adicionado ao handle do arquivo. `4` não possuí tag

No exemplo acima, `fopen` é o nome de uma função, não uma palavra em inglês, então está marcada como um parte de  `código`, distinguindo-se do resto do conteúdo.

Logo, se o paragráfo estiver se referindo a um exemplo em código, isso ajudará o leitor a associar as paravras com o exemplo.

### Tabelas

Caso uma tabela tenha cabeçalhos, esses devem ir na parte superior:

- ❌

  ```md
  |         |                                             |
  | ------- | ------------------------------------------- |
  | Vida    | Status do Motor                             |
  | 650     | N/A Dano                                    |
  | 650-550 | Fumaça Branca                               |
  | 550-390 | Fumaça Cinza                                |
  | 390-250 | Fumaça Preta                                |
  | < 250   | Em Chamas (irá explodir em alguns segundos) |
  ```

- ✔

  ```md
  | Vida    | Status do Motor                             |
  | ------- | ------------------------------------------- |
  | 650     | N/A Dano                                    |
  | 650-550 | Fumaça Branca                               |
  | 550-390 | Fumaça Cinza                                |
  | 390-250 | Fumaça Preta                                |
  | < 250   | Em Chamas (irá explodir em alguns segundos) |
  ```

## Migrando da SA-MP Wiki

A maioria do conteúdo foi movido, mas caso você encontre uma página que não foi migrada, aqui vai um pequeno guia de como converter o conteúdo para Markdown.

### Pegando o HTML

1. Clique nesse botão

   (Firefox)

   ![imagem](../../frontend/public/images/contributing/04f024579f8d.png)

   (Chrome)

   ![imagem](../../frontend/public/images/contributing/f62bb8112543.png)

2. Selecione a parte superior esquerda da página, na margem ou no canto até você encontrar o `#content`

   ![imagem](../../frontend/public/images/contributing/65761ffbc429.png)

   Ou então procure por `<div id=content>`

   ![imagem](../../frontend/public/images/contributing/77befe2749fd.png)

3. Copie o conteúdo do elemento HTML por inteiro.

   ![imagem](../../frontend/public/images/contributing/8c7c75cfabad.png)

   Agora você possui _somente_ o código HTML do atual _conteúdo_ da página, a parte que realmente interessa, e que deve ser convertida para Markdown.

### Convertendo HTML para Markdown

Para converter HTML básico (sem tabelas) para Markdown use:

https://domchristie.github.io/turndown/

![image](../../frontend/public/images/contributing/77f4ea555bbb.png)

^^ Perceba que a tabela se lascou todinha...

### Tabelas HTML para Tabelas Markdown

Como a ferramenta acima não suporta a conversão de tabelas, vamos utilizar essa:

https://jmalarcon.github.io/markdowntables/

Copie somente o conteúdo entre o elemento `<table>`:

![image](../../frontend/public/images/contributing/57f171ae0da7.png)

### Limpeza manual

A conversão do conteúdo não será 100% perfeita, nesse caso você terá de realizar uma parte da "limpeza" de forma manual. As ferramentas e extensões citadas acima podem ajudar nesse processo mas você ainda terá de fazer uma parte do trabalho manualmente.

Se você não tem tempo, sem problemas! Envie-nos o seu texto não finalizado e alguém da comunidade irá continuar o seu trabalho!

## Acordo de Contribuição

Todos os projetos da open.mp possuem um [Acordo de Contribuição](https://cla-assistant.io/openmultiplayer/homepage). Basicamente, ao aceitar com o acordo você permite a open.mp utilizar seu trabalho e coloca-lo sob a licença de código aberto. Ao abrir sua primeira Pull Request o bot CLA-Assistant irá enviar um link no qual você pode assinar o acordo.