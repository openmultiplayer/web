---
title: strequal
sidebar_label: strequal
description: "Compara duas strings para ver se elas são iguais."
tags: ["string"]
---


<VersionWarn version='omp v1.1.0.2612' />

<LowercaseNote />

## Descrição

Compara duas strings para ver se elas são iguais.

| Nome | Descrição |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| const string1[] | A primeira string a ser comparada.                                                                                                                |
| const string2[] | A segunda string a ser comparada.                                                                                                               |
| bool:ignorecase _(optional)_ | Quando definido como **true**, o caso não importa - HeLLo é o mesmo que Olá. Quando **false**, eles não são iguais.                           |
| length _(optional)_ | Quando esse comprimento for definido, os primeiros x caracteres serão comparados - fazer "Hello" e "Hell No" com um comprimento de 4 dirá que é a mesma string. |

## Retornos

**true** se as strings corresponderem entre si em determinado comprimento, **false** caso contrário.

## Exemplos

```c
new string1[] = "Hello World";
new string2[] = "Hello World";

// Verifique se as strings são iguais
if (strequal(string1, string2))
{
    print("Strings are equal.");
}
else
{
    print("Strings are not equal.");
}
```
## Notas

:::tip

Esta é uma função conveniente que depende de [strcmp](strcmp).

:::

## Funções Relacionadas

- [strcmp](strcmp): Busca uma string em outra string.
