---
title: "Guia de estilo Pawn"
sidebar_label: "Guia de estilo Pawn"
description: Um guia breve sobre a convenção de nomes e outros aspectos do código Pawn para facilitar a comunicação de intenção e agilizar depuração e compartilhamento.
---

Este documento resume as convenções geralmente aceitas para nomeação e demais aspectos do código-fonte Pawn a fim de facilitar a comunicação de intenções e tornar a depuração e o compartilhamento de código mais simples.

Veja também:

- [Modern Pawn](https://github.com/Southclaws/sampctl/wiki/Modern-Pawn)
- [Pawn Package](https://github.com/Southclaws/sampctl/wiki/Packages)

## Terminologia

### Statement (instrução)

Uma instrução é um trecho de código que ordena imperativamente que o programa faça algo. Ela é um pedaço válido de código que produz algum resultado.

```c
a = b + c;
```

Esta é uma instrução composta por uma variável recebendo o resultado de uma [#Expression].

```c
SetPlayerColor(playerid, 0xFF4700FF);
```

Esta é uma instrução que manda o programa chamar uma função com determinados argumentos.

```c
x + 8
```

Isto _não_ é uma instrução porque o resultado não é usado em lugar nenhum; é apenas uma [#Expression].

### Compound Statement

Uma instrução composta é um conjunto de instruções delimitadas por chaves.

```c
{
    new message[] = "hi!";
    print(message);
}
```

Este é um bloco composto por duas instruções.

```c
if (a == b)
{
    print("hello!");
}
```

Este é um bloco composto com uma condição `if`, normalmente chamado de “if statement”.

```c
return Function1(), Function2(), Function3();
```

Isto _não_ é um bloco composto, e sim uma cadeia de instruções separadas por vírgulas. Esse encadeamento é considerado má prática.

### Expression (expressão)

Uma expressão é uma construção sintática que produz um valor; ela não é uma instrução válida a menos que o valor seja usado de alguma forma.

Expressões normalmente são combinadas para formar instruções.

```c
a + b
```

Esta é uma expressão de soma simples que recebe dois valores e aplica o operador de adição.

## Diretrizes

### Chaves

Prefira o estilo Allman:

```pawn
function()
{
    //
}
```

Porém, se você não consegue evitar, o estilo K&R também é válido em Pawn:

```pawn
function() {
    //
}
```

### Switches

`switch` deve usar dois níveis de indentação, um para o bloco `switch` e outro para cada `case` ou bloco composto.

```pawn
switch (variable)
{
    case 0:
        return 0;
    case 1:
        return 1;
    case 2:
        return 2;
    default:
        return -1;
}
```

```pawn
switch (variable)
{
    case 0:
    {
        // code...
        return 0;
    }
    case 1:
    {
        // code...
        return 1;
    }
    case 2:
    {
        // code...
        return 2;
    }
    default:
    {
        // code...
        return -1;
    }
}
```

### Blocos

Blocos sempre devem usar chaves, mesmo que contenham apenas uma linha de código. Isso vale para todas as estruturas, inclusive funções.

```pawn
func()
{
    singleLineExpr();
}
```

```pawn
func()
{
    if ()
    {
        singleLineExpr();
    }
}
```

```pawn
func()
{
    if ()
    {
        singleLineExpr();
    }
    else if ()
    {
        //
    }
    else
    {
        //
    }
}
```

### Nomeação

#### Funções

Funções devem usar `PascalCase`.

#### Variáveis globais

Variáveis globais declaradas com `new` devem usar `g_` seguido de `PascalCase` (por exemplo `g_VariableName`). Se forem declaradas com `static`, use `s_` com `PascalCase` (por exemplo `s_VariableName`).

Globais constantes devem usar `SCREAMING_SNAKE_CASE`.

#### Variáveis locais

Variáveis locais devem sempre usar `camelCase` e nunca nomes de uma única letra, exceto:

- `i`, `j`, `k` etc. em laços `for`
- `x`, `y`, `z` etc. em contextos matemáticos

#### Enumeradores

Enumeradores nomeados devem ser prefixados com `E_` (tag forte) ou `e_` (tag fraca).

Os campos do enumerador também devem usar `SCREAMING_SNAKE_CASE` e o nome do enumerador como prefixo.

```pawn
static enum E_PLAYER_DATA {
    E_PLAYER_CASH,
    Float:E_PLAYER_HEALTH,
}
```

Usando uma tag fraca:

```pawn
static enum e_PLAYER_DATA {
    E_PLAYER_CASH,
    Float:E_PLAYER_HEALTH,
}
```

Enumeradores não nomeados também devem usar `SCREAMING_SNAKE_CASE` e o nome do enumerador como prefixo.

```pawn
static enum {
    ENUMATOR_INTEGER,
    Float:ENUMATOR_FLOAT,
}
```

Enumeradores devem ser declarados como `static`, a menos que sejam usados fora do módulo.

#### Macros e definições do pré-processador

Macros devem sempre usar `SCREAMING_SNAKE_CASE`, não importa o uso.

Definições do pré-processador (constantes) também devem usar `SCREAMING_SNAKE_CASE`.

Isso ajuda a diferenciar variáveis de constantes e funções de macros.

De forma geral, evite inventar novas construções sintáticas para não confundir quem está começando sobre o que faz parte da linguagem e o que vem de bibliotecas.

Algumas bibliotecas antigas fazem isso e não podem ser alteradas por questões de compatibilidade.

### Documentação

Documente funções exportadas com um comentário de linha no formato `// FunctionName faz X, Y e Z e retorna A`, em que a primeira palavra é o nome da função seguido de uma breve descrição. Não há necessidade de citar cada parâmetro. Exemplo:

```pawn
// LoadPlayerAccount é chamada para iniciar o processo de carregamento da conta.
// Esta função dispara chamadas HTTP para obter dados do jogador, exibe diálogos
// e, quando o processo termina com sucesso, o evento `OnPlayerLogin` é emitido.
// Em caso de falha, o jogador é desconectado.
stock Error:LoadPlayerAccount(playerid)
{
    // code...
}
```

Cada pacote deve ter um `README` e, se necessário, cada módulo deve ter um comentário logo na primeira linha descrevendo o que ele oferece.
