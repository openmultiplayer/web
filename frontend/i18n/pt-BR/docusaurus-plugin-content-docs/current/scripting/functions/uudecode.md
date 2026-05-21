---
title: uudecode
sidebar_label: uudecode
description: "Decodifique uma string codificada em UU."
tags: ["string", "encryption"]
---


<LowercaseNote />

## Descrição

Decodifique uma string codificada em UU.

| Nome | Descrição |
| ------------------------- | --------------------------------------------- |
| dest[] | O destino da matriz de cadeias de caracteres decodificada. |
| const source[] | A string de origem codificada em UU.                 |
| maxlength = sizeof (dest) | O comprimento máximo de destino que pode ser usado.  |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
uudecode(normalString, encodedString);
```
## Funções Relacionadas

- [uuencode](uuencode): Codifique uma string em uma string decodificada em UU.
- [memcpy](memcpy): Copia bytes de um local para outro.
