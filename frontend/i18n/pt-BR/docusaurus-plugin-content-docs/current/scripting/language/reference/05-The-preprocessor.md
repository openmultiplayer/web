# O pré-processador

---

A primeira etapa da compilação de um arquivo Pawn para P-code é o “pré-processamento”: um filtro genérico que ajusta o texto antes de enviá-lo ao parser. Nesse estágio, comentários são removidos, blocos condicionais são avaliados, diretivas são executadas e ocorrem substituições de texto. As diretivas são resumidas na página 117; aqui focamos nas substituições.

O pré-processador age sobre cada linha imediatamente após ser lida. Não há checagem sintática nessa fase. Embora ofereça recursos poderosos, o uso descuidado pode introduzir erros difíceis de rastrear.

Farei menções a C/C++ porque o pré-processador Pawn se inspira nele —embora não seja compatível.

A diretiva `#define` cria macros. Alguns exemplos:

```c

#define maxsprites          25
#define CopyRightString     "(c) Copyright 2004 by me"

```

No script, eles podem ser usados como constantes. Exemplo:

```c

#define maxsprites          25
#define CopyRightString     "(c) Copyright 2004 by me"
main()
{
    print( Copyright )
    new sprites[maxsprites]
}

```

Para casos simples, é melhor usar as construções equivalentes da linguagem:

```c

const maxsprites = 25

stock const CopyRightString[] = "(c) Copyright 2004 by me"

```

Essas declarações oferecem melhor checagem e permitem tags. No caso de strings, declare o array como `const` e `stock`: `const` impede alterações, e `stock` retira o símbolo se nunca for usado.

Macros com substituição podem ter até 10 parâmetros. Um uso comum é simular funções pequenas:

Listing: the “min” macro

```c

#define min(%1,%2) ((%1) < (%2) ? (%1) : (%2))

```

Se você veio de C/C++, reconhecerá o hábito de cercar argumentos e a expressão inteira com parênteses.

Se a macro for usada assim:

Listing: bad usage of the “min” macro

```c

new a = 1, b = 4
new min = min(++a,b)

```

the preprocessor translates it to:

```c

new a = 1, b = 4
new min = ((++a) < (b) ? (++a) : (b))

```

Isso pode incrementar `a` duas vezes —uma armadilha clássica. Por isso, é comum adotar uma convenção (como usar maiúsculas) para distinguir macros de funções.

Para entender a importância dos parênteses, veja:

```c

#define ceil_div(%1,%2) (%1 + %2 - 1) / %2

```

Essa macro divide arredondando “para cima”. Usando-a assim:

```c

new a = 5
new b = ceil_div(8, a - 2)

```

o pré-processador gera `new b = (8 + a - 2 - 1) / a - 2`. Devido à precedência dos operadores, `b` vira 0 (se `a = 5`). O esperado era `ceil(8 / (a - 2))`. Envolver os parâmetros (e, de preferência, toda a expressão) em parênteses resolve:

```c

#define ceil_div(%1,%2) ( ((%1) + (%2) - 1) / (%2) )

```

O matching de padrões é mais sutil do que detectar trechos parecidos com chamadas. O padrão é literal, mas aceita qualquer texto nos lugares marcados como parâmetros. Por exemplo:

Listing: macro that translates a syntax for array access to a function call

```c

#define Object[%1] CallObject(%1)

```

Se a expansão de uma macro contém trechos que coincidem com outras macros, essas substituições ocorrem durante a invocação, não na definição:

```c

#define a(%1)       (1+b(%1))
#define b(%1)       (2\*(%1))
new c = a(8)

```

will evaluate to “new c = (1+(2\*(8)))”, even though the macro “b” was not
defined at the time of the definition of “a”.

As regras para matching são:

- Não há espaços no padrão. Se precisar, use a sequência `\32;`. Já o texto resultante pode ter espaços.
- Sequências de escape são aceitas (úteis, por exemplo, para casar com `%` literal).
- O padrão não pode terminar com parâmetro (isto é, “set:%1=%2” é inválido). Para casar com fim de instrução, adicione `;`.
- O padrão deve começar com letra, `_` ou `@`. O trecho inicial alfanumérico é o “nome” ou prefixo da macro —é o que você usa em `defined`/`#undef`.
- Ao casar padrões, o pré-processador ignora espaços entre símbolos alfanuméricos ↔ não alfanuméricos, exceto entre símbolos idênticos. Ex.: `abc(+-)` casa com `abc ( + - )`, enquanto `abc(--)` não casa com `abc(- -)`.
- Existem até 10 parâmetros (`%0`–`%9`), em qualquer ordem.
- Assim como outras diretivas, o `#define` deve caber em uma linha. Se necessário, finalize a linha com `\`. O texto de entrada também precisa caber em uma linha.

Lembre-se de que macros (especialmente as parametrizadas) podem mudar completamente o significado de uma linha —o que parece acesso a array pode virar chamada de função, por exemplo.

Hosts que embutem o parser podem oferecer opções para visualizar o resultado dessas substituições. No conjunto de ferramentas padrão, consulte o “Pawn booklet — Implementor’s Guide” para instruções de uso do compilador e runtime.

---

`Operator precedence: 110`

`Directives: 117`

---

[Go Back to Contents](00-Contents)
