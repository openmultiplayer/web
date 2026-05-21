---
title: strval
sidebar_label: strval
description: "Converta uma string em um número inteiro."
tags: ["string"]
---


<LowercaseNote />

## Descrição

Converta uma string em um número inteiro.

| Nome | Descrição |
| -------------- | --------------------------------------------- |
| const string[] | A string que você deseja converter em um número inteiro. |

## Retornos

O valor inteiro da string. '0 se a string não for numérica.

## Exemplos

```c
new string[4] = "250";
new iValue = strval(string); // iValue agora é '250'
```
## Funções Relacionadas

- [strcmp](strcmp): Compare duas strings para ver se são iguais.
- [strfind](strfind): pesquisa uma substring em uma string.
- [strdel](strdel): Exclui parte/toda uma string.
- [strins](strins): Coloca uma string em outra string.
- [strlen](strlen): Verifique o comprimento de uma string.
- [strmid](strmid): Extrai caracteres de uma string.
- [strpack](strpack): compacta uma string em um destino.
- [strcat](strcat): concatena duas strings em uma referência de destino.
