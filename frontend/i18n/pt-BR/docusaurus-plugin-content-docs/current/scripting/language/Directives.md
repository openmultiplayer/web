---
title: "Palavras-chave: diretivas"
sidebar_label: "Palavras-chave: diretivas"
---

Diretivas são instruções passadas ao compilador para controlar como ele interpreta o código-fonte.

## `#assert`

Verifica se uma expressão constante é verdadeira; caso contrário interrompe a compilação.

```c
#define MOO 10
#assert MOO > 5
```

Compila normalmente.

```c
#define MOO 1
#assert MOO > 5
```

Provoca um erro fatal. É semelhante a:

```c
#define MOO 1
#if MOO <= 5
    #error MOO check failed
#endif
```

A diferença é que `#assert` mostra a mensagem:

```
Assertation failed: 1 > 5
```

enquanto o segundo exibe:

```
User error: Moo check failed
```

## `#define`

`#define` substitui texto: onde o símbolo declarado aparece, ele é trocado pelo conteúdo definido.

```c
#define MOO 7
printf("%d", MOO);
```

Vira:

```c
printf("%d", 7);
```

Por isso `#define`s não existem no código compilado; o pré-processador resolve tudo antes. Eles não precisam conter números:

```c
#define PL new i = 0; i < MAX_PLAYERS; i++) if (IsPlayerConnected(i)

for (PL) printf("%d connected", i);
```

O código acima gera o clássico player loop. Note como parte dos parênteses vem do `for` e parte do macro.

Pouca gente sabe que você pode criar definições multilinha escapando a quebra de linha:

```c
#define PL \
        new i = 0; i < MAX_PLAYERS; i++) \
                if (IsPlayerConnected(i)
```

Macros também podem receber parâmetros:

```c
#define MOO(%0) \
        ((%0) * 7)

printf("%d", MOO(6));      // imprime 42
printf("%d", MOO(5 + 6));  // imprime 77
```

Os parênteses extras são importantes. Sem eles `MOO(5 + 6)` se expandiria para `5 + 6 * 7`, que resulta em 47 devido à ordem das operações.

Se o número de argumentos fornecido for maior que o declarado, o último parâmetro recebe todos os valores restantes:

```c
#define PP(%0,%1) \
        printf(%0, %1)

PP(%s %s %s, "hi", "hello", "hi"); // imprime "hi hello hi"
```

O operador `#` transforma um literal em string; esse recurso é específico do SA-MP.

## `#else`

Equivalente a `else`, mas usado em blocos condicionais do pré-processador (`#if`).

## `#elseif`

Versão de `else if` para `#if`:

```c
#define MOO 10

#if MOO == 9
    printf("if");
#elseif MOO == 8
    printf("else if");
#else
    printf("else");
#endif
```

## `#emit`

Não aparece na tabela do `pawn-lang.pdf`, mas existe. É basicamente um compilador inline: se você conhece AMX, pode inserir opcodes diretamente no código. Sintaxe: `#emit <opcode> <argumento>`. O argumento pode ser um número (inteiro ou racional) ou um símbolo local/global (variáveis, funções ou rótulos). Consulte o Pawn Toolkit v3664 para a lista de opcodes.

## `#endif`

Funciona como a chave de fechamento de um `if`. Tudo o que estiver entre `#if` e `#endif` é incluído condicionalmente.

## `#endinput`, `#endscript`

Interrompem a inclusão do arquivo atual.

## `#error`

Interrompe a compilação imediatamente exibindo uma mensagem customizada. Veja `#assert` para um exemplo.

## `#if`

Faz para o pré-processador o que `if` faz para o código: permite escolher o que será compilado. Considere:

```c
#define LIMIT 10

if (LIMIT < 10)
{
    printf("Limit too low");
}
```

Isso vira:

```c
if (10 < 10)
{
    printf("Limit too low");
}
```

O compilador sabe que a condição é constante e avisa. Se o resultado nunca muda, por que manter o código? Remover o trecho impediria validações futuras caso `LIMIT` fosse alterado. É aí que `#if` ajuda: diferente de `if`, ele *espera* expressões constantes.

```c
#define LIMIT 10

#if LIMIT < 10
    #error Limit too low
#endif
```

Assim a checagem ocorre na compilação e evita código morto. Note que os parênteses são opcionais.

Outro exemplo:

```c
#define LIMIT 10

#if LIMIT < 10
    printf("Limit less than 10");
#else
    printf("Limit equal to or above 10");
#endif
```

Somente o ramo válido é compilado, mas o código redundante permanece no arquivo para futuras mudanças.

## `#include`

Insere o conteúdo de outro arquivo no ponto onde a diretiva aparece. Existem dois formatos:

- **Relativo** (`"arquivo.pwn"`): o caminho é resolvido relativo ao arquivo atual.
- **Sistema** (`<arquivo>`): o arquivo é buscado no diretório `include` ao lado (ou um nível acima) do compilador Pawn, como `pawno/include`.

Ambos aceitam subpastas:

```c
#include "folder/me.pwn"
#include <folder/me>
```

Se o arquivo não existir, a compilação falha.

## `#pragma`

Diretiva para ajustar o comportamento do compilador. Exemplo:

```c
#pragma ctrlchar '$'
```

Isso altera o caractere de escape de `\` para `$`. Algumas opções úteis no contexto SA:MP:

| Nome | Valores | Descrição |
| --- | --- | --- |
| `codepage` | nome/valor | Define a página de código Unicode usada para strings. |
| `compress` | `1`/`0` | Não suportado no SA-MP. |
| `deprecated` | símbolo | Gera um aviso ao usar o símbolo indicado, sinalizando que existe versão melhor. |
| `dynamic` | valor (geralmente potência de 2) | Define o tamanho (em células) da pilha e do heap; use ao receber avisos de memória insuficiente. |
| `library` | nome da DLL | Indica a DLL da qual funções nativas serão importadas; não transforma o arquivo atual em biblioteca. |
| `pack` | `1`/`0` | Inverte o significado de `!""` e `""`. Veja `pawn-lang.pdf` para detalhes sobre strings compactadas. |
| `tabsize` | valor | Define o tamanho do tab para evitar avisos errados de indentação; em SA:MP o padrão é 4. Não use 0, pois oculta avisos úteis. |
| `unused` | símbolo | Suprime o aviso “symbol is never used” para o símbolo indicado. Útil quando `stock` não se aplica (por exemplo, parâmetros). |

### Depreciado

```c
new
    gOldVariable = 5;

#pragma deprecated gOldVariable

main() { printf("%d", gOldVariable); }
```

Gera um aviso indicando que `gOldVariable` não deve mais ser usada. Útil para manter compatibilidade enquanto a API evolui.

## `#tryinclude`

Semelhante a `#include`, mas não falha se o arquivo não existir. Serve para incluir recursos opcionais quando o desenvolvedor possui o plugin apropriado.

**myinc.inc**

```c
#if defined _MY_INC_INC
    #endinput
#endif
#define _MY_INC_INC

stock MyIncFunc() { printf("Hello"); }
```

**Gamemode**

```c
#tryinclude <myinc>

main()
{
    #if defined _MY_INC_INC
        MyIncFunc();
    #endif
}
```

`MyIncFunc` só será chamada se `myinc.inc` estiver disponível e compilar sem erros.

## `#undef`

Remove um macro ou símbolo constante previamente definido.

```c
#define MOO 10
printf("%d", MOO);
#undef MOO
printf("%d", MOO); // erro: MOO não existe mais
```

Também funciona com enumeradores:

```c
enum {
    E_EXAMPLE = 300
};

printf("%d", E_EXAMPLE);
#undef E_EXAMPLE
printf("%d", E_EXAMPLE); // erro fatal
```
