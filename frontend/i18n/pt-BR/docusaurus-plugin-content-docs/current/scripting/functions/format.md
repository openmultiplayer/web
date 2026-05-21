---
title: format
sidebar_label: format
description: "Formata uma string para incluir variáveis ​​e outras strings dentro dela."
tags: ["string"]
---


<LowercaseNote />

## Descrição

Formata uma string para incluir variáveis e outras strings dentro dela.

| Nome | Descrição |
| ----------------- | ----------------------------------------- |
| output[] | A string para a saída do resultado |
| len | A saída de comprimento máximo pode conter |
| const format[] | A sequência de formato |
| \{Float, \_\}:... | Número indefinido de argumentos de qualquer tag |

## Retornos

Esta função não retorna nenhum valor específico.

## Especificadores de formato

| Specifier | Significado |
| --------- | --------------------------------------------- |
| %i | Inteiro não assinado |
| %d | Inteiro assinado |
| %s | Corda |
| %f | Número de ponto flutuante |
| %c | Caractere ASCII |
| %x | Número hexadecimal |
| %b | Número binário |
| %% | Literal '%' |
| %q | Escape de um texto para SQLite. (Adicionado em 0.3.7 R2) |

Os valores dos placeholders seguem exatamente a mesma ordem dos parâmetros na chamada, ou seja, `"I am %i years old"` - o `%i` será substituído por uma variável inteira, que é a idade da pessoa.

Opcionalmente, você pode colocar um número entre `%` e a letra do código do espaço reservado. Este número indica a largura do campo; se o tamanho do parâmetro a ser impresso na posição do placeholder for menor que a largura do campo, o campo será expandido com espaços. Para reduzir o número de casas decimais mostradas em um ponto flutuante, você pode adicionar '.\<max number\>' entre `%` e `f`, ou seja, `%.2f`.

## Exemplos

```c
new result[128];
new number = 42;
format(result, sizeof(result), "The number is %i.", number); // O número é 42.

new string[] = "simple message";
format(result, sizeof(result), "This is a %s containing the number %i.", string, number);
// Esta é uma mensagem simples contendo o número 42.
```
<br />

```c
new string[64];
format(string, sizeof(string), "Your score is: %d", GetPlayerScore(playerid));
SendClientMessage(playerid, 0xFF8000FF, string);
```
<br />

```c
new string[32];
new hour, minute, second;
gettime(hour, minute, second);
format(string, sizeof(string), "The time is %02d:%02d:%02d.", hour, minute, second);
// produzirá algo como "A hora é 09:45:02."
```
<br />

```c
new string[32];
format(string, sizeof(string), "43%s of my shirts are black.", "%%");
SendClientMessage(playerid, 0xFF8000FF, string);
```
## Notas

:::warning

Esta função não oferece suporte a strings compactadas.

:::

## Funções Relacionadas

- [imprimir](print): Imprime uma mensagem básica nos logs do servidor e no console.
- [printf](printf): Imprime uma mensagem formatada nos logs do servidor e no console.
