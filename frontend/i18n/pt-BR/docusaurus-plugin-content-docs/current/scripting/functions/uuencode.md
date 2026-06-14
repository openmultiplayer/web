---
title: uuencode
sidebar_label: uuencode
description: "Codifique uma string em uma string decodificada em UU."
tags: ["string", "encryption"]
---


<LowercaseNote />

## Descrição

Codifique uma string em uma string decodificada por UU.

| Nome | Descrição |
| ------------------------- | --------------------------------------------------------- |
| dest[] | A cadeia de destino do fluxo codificado.            |
| const source[] | A string de origem não codificada.                           |
| numbytes | O número de bytes a serem codificados não deve exceder 45. |
| maxlength = sizeof (dest) | O comprimento máximo da matriz dest[].                   |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
uuencode(encodedString, normalString, 45);
```
## Funções Relacionadas

- [uudecode](uudecode): Decodifica uma string codificada em UU.
- [memcpy](memcpy): Copia bytes de um local para outro.
