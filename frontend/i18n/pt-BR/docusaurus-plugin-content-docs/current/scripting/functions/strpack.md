---
title: strpack
sidebar_label: strpack
description: "Embale uma string."
tags: ["string"]
---


<LowercaseNote />

## Descrição

Embale uma string. Strings compactadas usam 75% menos memória.

| Nome | Descrição |
| ------------------------- | ------------------------------------------------------------------------- |
| dest[] | A string de destino na qual salvar a string compactada, passada por referência. |
| const source[] | A origem, string original.                                              |
| maxlength = sizeof (dest) | O tamanho máximo a ser inserido.                                               |

## Retornos

O número de caracteres compactados.

## Exemplos

```c
new string[32 char];
strpack(string, "Hi, how are you?");
```
## Funções Relacionadas

- [strcmp](strcmp): Compare duas strings para verificar se são iguais.
- [strfind](strfind): Pesquisa uma string em outra string.
- [strins](strins): Insere texto em uma string.
- [strlen](strlen): Obtenha o comprimento de uma string.
- [strmid](strmid): Extrai parte de uma string para outra string.
- [strval](strval): Converte uma string em um número inteiro.
- [strcat](strcat): concatena duas strings em uma referência de destino.
- [strdel](strdel): Exclui parte de uma string.
