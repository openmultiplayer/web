---
title: printf
sidebar_label: printf
description: "Produz uma string formatada no console (a janela do servidor, não o chat do jogo)."
tags: ["console"]
---


<LowercaseNote />

## Descrição

Produz uma string formatada no console (a janela do servidor, não o chat do jogo).

| Nome | Descrição |
| ----------------- | ----------------------------------------- |
| const format[] | A sequência de formato |
| \{Float, \_\}:... | Número indefinido de argumentos de qualquer tag |

## Retornos

Esta função não retorna nenhum valor específico.

## Especificadores de formato

| Specifier | Significado |
| --------- | --------------------------------------------- |
| %i | Inteiro |
| %d | Inteiro |
| %s | Corda |
| %f | Número de ponto flutuante |
| %c | Caractere ASCII |
| %x | Número hexadecimal |
| %b | Número binário |
| %% | Literal '%' |
| %q | Escape de um texto para SQLite. (Adicionado em 0.3.7 R2) |

Os valores dos placeholders seguem exatamente a mesma ordem dos parâmetros da chamada, ou seja, `"I am %i years old"` - o `%i` será substituído por uma variável inteira, que é a idade da pessoa.

Opcionalmente, você pode colocar um número entre `%` e a letra do código do espaço reservado. Este número indica a largura do campo; se o tamanho do parâmetro a ser impresso na posição do placeholder for menor que a largura do campo, o campo será expandido com espaços. Para reduzir o número de casas decimais mostradas em um ponto flutuante, você pode adicionar '.\<max number\>' entre `%` e `f`, ou seja, `%.2f`.

## Exemplos

```c
new number = 42;
printf("The number is %d.", number);  // O número é 42.

new string[] = "simple message";
printf("This is a %s containing the number %d.", string, number); // Esta é uma mensagem simples contendo o número 42.

new character = 64;
printf("I'm %c home", character); // Estou em casa
```
## Notas

:::warning

A string de formato ou sua saída não deve exceder 1.024 caracteres. Qualquer coisa além desse comprimento pode causar a falha do servidor.

:::

## Funções Relacionadas

- [imprimir](print): Imprime uma mensagem básica nos logs do servidor e no console.
- [formato](format): formata uma string.
