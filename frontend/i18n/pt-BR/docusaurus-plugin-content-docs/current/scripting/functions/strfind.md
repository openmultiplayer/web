---
title: strfind
sidebar_label: strfind
description: "Procure uma substring em uma string."
tags: ["string"]
---


<LowercaseNote />

## Descrição

Procure uma substring em uma string.

| Nome | Descrição |
| ---------------------------- | --------------------------------------------------------------------------------------------------------- |
| const string[] | A string que você deseja pesquisar (palheiro).                                                              |
| const sub[] | A string que você deseja pesquisar (agulha).                                                               |
| bool:ignorecase _(optional)_ | Quando definido como true, o caso não importa - HeLLo é igual a Hello. Quando false, eles não são iguais. |
| Position _(optional)_ | O deslocamento a partir do qual iniciar a pesquisa.                                                                       |

## Retornos

O número de caracteres antes da substring (a posição inicial da substring) ou -1 se não for encontrada.

## Exemplos

```c
if (strfind("Are you in here?", "you", true) != -1) // Retorna 4, porque o início de 'you' (y) está no índice 4 na string
{
    SendClientMessageToAll(0xFFFFFFFF, "I found you!");
}
```
## Funções Relacionadas

- [strcmp](strcmp): Compare duas strings para verificar se são iguais.
- [strdel](strdel): Exclui parte de uma string.
- [strins](strins): Insere texto em uma string.
- [strlen](strlen): Obtenha o comprimento de uma string.
- [strmid](strmid): Extrai parte de uma string para outra string.
- [strpack](strpack): compacta uma string em uma string de destino.
- [strval](strval): Converte uma string em um número inteiro.
- [strcat](strcat): concatena duas strings em uma referência de destino.
