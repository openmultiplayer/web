---
title: "Noções básicas: Variáveis"
sidebar_label: "Noções básicas: Variáveis"
description: Um guia introdutório sobre variáveis em Pawn
---

## Variáveis

Um dos conceitos mais importantes em programação é o de “variáveis”. Em programação, uma variável é uma entidade mutável, mas em que sentido? Em Pawn, uma variável guarda um “valor” a qualquer momento e esse valor — como o próprio nome sugere — é “variável” ou “mutável”.

Variáveis são importantes porque são unidades pequenas de memória que podem guardar ou “lembrar” valores diferentes enquanto o programa está em execução, e essa propriedade é extremamente útil. Por exemplo, se você quiser acompanhar a pontuação de 100 jogadores em um jogo, basta programar o computador para armazenar (lembrar) e atualizar esses valores. Depois, se quiser calcular a média dessas pontuações ou montar um placar, os valores guardados nas variáveis podem ser acessados facilmente e usados para esse fim.

### Declarando variáveis

O seguinte é o formato básico de declaração:

```c
// Criando (mais precisamente, declarando) uma variável chamada 'myVariable'

new myVariable;

// A palavra-chave 'new' é usada para declarar uma variável
// Na linha acima, declaramos uma variável com o nome 'myVariable'
// O ponto e vírgula fecha a instrução de declaração.
```

O formato fica mais claro com alguns exemplos:

```c
new var;
new ammo;
new score;
new vehicles;
new topScore;
```

Cada variável acima tem o valor zero por padrão. Há diferentes maneiras de atribuir valores a uma variável; uma delas é definir o valor no momento da declaração:

```c
new letters = 25;
```

No exemplo acima, declaramos a variável `letters` com o valor 25. Note o sinal de igualdade, que é um operador de atribuição simples usado para definir valores. Ele avalia a expressão do lado direito e envia o resultado para a variável referenciada do lado esquerdo. Além de atribuir valores diretamente na declaração, você pode fazer isso em outra parte do código:

```c
new letters;

letters = 25;
```

### Escopos

Só é possível modificar o valor de uma variável se a parte do código onde ela é usada estiver dentro do escopo dessa variável. O escopo depende do bloco ou da posição em que ela foi declarada. Por exemplo, uma variável declarada fora de qualquer bloco — geralmente no início do script — tem escopo global e pode ser acessada de qualquer parte do script:

```c
#include <open.mp>

new g_var = 5;

public OnFilterScriptInit()
{
    g_var = 10;

    printf("The value is %i", g_var);

    return 1;
}

public OnPlayerConnect(playerid)
{
    g_var = 100;

    printf("The value is %i", g_var);

    return 1;
}

// Saída :
// The value is 10
// The value is 100

// Observação: a segunda linha aparece apenas quando um jogador se conecta.
```

Além das variáveis globais, existem variáveis “locais” ou “privadas” que só podem ser acessadas dentro do bloco onde foram declaradas.

```c
#include <open.mp>

public OnFilterScriptInit()
{
    new localVar;

    localVar = 5;

    return 1;
}

public OnPlayerConnect(playerid)
{
    localVar = 10; // Esta linha causará um erro na compilação

    return 1;
}
```

Se você compilar o código acima, o compilador exibirá um erro porque a variável local está sendo referenciada em outro bloco totalmente diferente. Observação: se for um bloco interno (aninhado), a variável pode ser acessada a partir dele.

Outro ponto importante é que não é possível declarar variáveis com o mesmo nome se seus escopos se interceptam. Por exemplo, se já existir uma variável `score` em escopo global, você não pode criar outra `score` também global nem uma local com esse nome, e o inverso também vale (se já existir uma variável local, evite declarar uma global com o mesmo nome).

```c
#include <open.mp>

new g_score;

public OnFilterScriptInit()
{
    new g_score = 5; // Esta linha causará um erro.
    return 1;
}
```

### Regras de nomenclatura

Agora que você sabe declarar variáveis, precisa conhecer as regras de nomes:

- Todo nome deve começar com uma letra ou sublinhado (`_`).
- Depois do primeiro caractere, nomes podem conter letras e números, mas não espaços nem caracteres especiais.
- Os nomes diferenciam maiúsculas de minúsculas.
- Usar uma palavra reservada (keyword) como nome gera erro.

#### Exemplos:

```c
new new; // Incorreto: palavra reservada
new _new; // Correto

new 10letters; // Incorreto: começa com número
new letters10; // Correto
new letters_10; // Correto

new my name; // Incorreto: espaço no nome
new my_name; // Correto

new !nternet; // Incorreto
new Internet; // Correto
```

### Armazenando diferentes tipos de dados

Agora vejamos exemplos dos tipos de dados que podem ser armazenados e como fazer isso:

```c
new letter = 'M';


new value = 100;


new decimalValue = 1.0;
// Funciona, mas mostrará um aviso do compilador
// warning 213: tag mismatch


new engineOn = true;
// Funciona sem aviso, mas é recomendado usar uma Tag


new sentence = "This is a sentence";
// Mostrará um erro.
// error 006: must be assigned to an array
```

Uma variável pode guardar um caractere, um inteiro, um booleano (true ou false) e um valor decimal (float). Os comentários acima mostram que tentar armazenar uma string em uma variável comum resulta em erro (strings só podem ser armazenadas em _arrays_). Além disso, atribuir um valor float sem tag gera um aviso do compilador, que pode ser evitado usando “tags”. Sem as tags corretas o script ainda compila, mas o aviso aparece. As tags dizem ao compilador qual tipo de dado deve ser guardado e, assim, ele consegue nos alertar com avisos ou erros quando fazemos algo que pode quebrar o programa. Exemplos:

```c
new decimalValue = 1.0; // Incorreto
new bool:decimalValue = 1.0 // Incorreto
new Float:decimalValue = 1.0; // Correto

new switchOn = 1.0; // Incorreto
new switchOn = true; // Incorreto, não mostra aviso
new bool:switchOn = true; // Correto
```

Usar as tags corretas é essencial para evitar bugs ou erros durante a execução.

Como Pawn é uma linguagem sem tipos fixos, ele permite guardar tipos de dados diferentes na mesma variável. Isso pode ser útil em alguns casos e problemático em outros, portanto não é recomendado.

```c
#include <open.mp>

public OnFilterScriptInit()
{

    new var;

    var = 'a';
    printf("%c", var);

    var = 1;
    printf("%d", var);

    var = 1.0;
    printf("%f", var);

    var = true;
    printf("%d", var); // imprime 0 ou 1

    return 1;
}

// Saída :
a
1
1.000000
1
```
