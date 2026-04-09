---
title: strcat
sidebar_label: strcat
description: Esta função concatena (junta) duas strings numa string de destino.
tags: ["string"]
---

<LowercaseNote />

## Descrição

Esta função concatena (junta) duas strings numa string de destino.

| Nome                      | Descrição                                                     |
| ------------------------- | ------------------------------------------------------------- |
| dest[]                    | A string onde serão armazenadas as duas strings concatenadas. |
| const source[]            | A string de origem.                                           |
| maxlength = sizeof (dest) | O comprimento máximo da string de destino.                    |

## Retorno

O comprimento da nova string de destino.

## Exemplos

```c
new string[40] = "Hello";
strcat(string, " World!");

// The string is now 'Hello World!'
```

## Funções Relacionadas

- [strcmp](strcmp): Compara duas strings para verificar se são iguais.
- [strfind](strfind): Procura uma string dentro de outra string.
- [strdel](strdel): Remove parte de uma string.
- [strins](strins): Insere texto numa string.
- [strlen](strlen): Obtém o comprimento de uma string.
- [strmid](strmid): Extrai parte de uma string para outra string.
- [strpack](strpack): Compacta uma string numa string de destino.
- [strval](strval): Converte uma string num número inteiro.
