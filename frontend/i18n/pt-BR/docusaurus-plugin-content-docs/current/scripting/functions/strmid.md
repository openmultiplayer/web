---
title: strmid
sidebar_label: strmid
description: "Extraia um intervalo de caracteres de uma string."
tags: ["string"]
---


<LowercaseNote />

## Descrição

Extraia um intervalo de caracteres de uma string.

| Nome | Descrição |
| ------------------------- | -------------------------------------------------------------------- |
| dest[] | A cadeia de caracteres na qual armazenar os caracteres extraídos.
| const source[] | A string da qual extrair caracteres.                         |
| start | A posição do primeiro personagem.                                 |
| end | A posição do último caractere.                                  |
| maxlength = sizeof (dest) | O comprimento do destino. (Será o tamanho de destino por padrão) |

## Retornos

O número de caracteres armazenados em dest[]

## Exemplos

```c
new string[6];
strmid(string, "Extract 'HELLO' without the !!!!: HELLO!!!!", 34, 39); // string contém "HELLO"
```
## Funções Relacionadas

- [strcmp](strcmp): Compare duas strings para verificar se são iguais.
- [strfind](strfind): Pesquisa uma string em outra string.
- [strins](strins): Insere texto em uma string.
- [strlen](strlen): Obtenha o comprimento de uma string.
- [strpack](strpack): compacta uma string em uma string de destino.
- [strval](strval): Converte uma string em um número inteiro.
- [strcat](strcat): concatena duas strings em uma referência de destino.
- [strdel](strdel): Exclui parte de uma string.
