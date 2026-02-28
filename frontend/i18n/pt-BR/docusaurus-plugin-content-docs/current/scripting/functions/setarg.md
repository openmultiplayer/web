---
title: setarg
sidebar_label: setarg
description: Define um argumento que foi passado para uma função.
tags: ["core", "arguments", "args"]
---

<LowercaseNote />

## Descrição

Define um argumento que foi passado para uma função.

| Name  | Description                                                  |
| ----- | ------------------------------------------------------------ |
| arg   | O número sequencial do argumento. Use 0 para o primeiro argumento. |
| index | O índice (se o argumento for um array) _(optional=0)_       |
| value | O valor a ser definido no argumento.                         |

## Retorno

**1** em caso de sucesso e **0** se o argumento ou o índice forem inválidos.

## Funções Relacionadas

- [getarg](getarg): Recupera um argumento de uma lista de argumentos variáveis.
- [numargs](numargs): Retorna o número de argumentos.
