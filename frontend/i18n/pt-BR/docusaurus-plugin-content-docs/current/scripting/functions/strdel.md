---
title: strdel
sidebar_label: strdel
description: "Exclua parte de uma string."
tags: ["string"]
---


<LowercaseNote />

## Descrição

Exclua parte de uma string.

| Nome | Descrição |
| -------- | ---------------------------------------------- |
| string[] | A string da qual excluir parte.                  |
| start | A posição do primeiro caractere a ser excluído. |
| end | A posição do último caractere a ser excluído.  |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
new string[42] = "We will delete everything apart from this";
strdel(string, 0, 37); // a string agora é "isto"
```
## Funções Relacionadas

- [strcmp](strcmp): Compare duas strings para verificar se são iguais.
- [strfind](strfind): Pesquisa uma string em outra string.
- [strins](strins): Insere texto em uma string.
- [strlen](strlen): Obtenha o comprimento de uma string.
- [strmid](strmid): Extrai parte de uma string para outra string.
- [strpack](strpack): compacta uma string em uma string de destino.
- [strval](strval): Converte uma string em um número inteiro.
- [strcat](strcat): concatena duas strings em uma referência de destino.
