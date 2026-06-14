---
title: strunpack
sidebar_label: strunpack
description: "Esta função pode ser usada para descompactar uma string."
tags: ["string"]
---


<LowercaseNote />

## Descrição

Esta função pode ser usada para descompactar uma string.

| Nome | Descrição |
| ------------------------- | --------------------------------------------------------------------------- |
| dest[] | A string de destino na qual salvar a string descompactada, passada por referência. |
| const source[] | A origem, string compactada original.                                         |
| maxlength = sizeof (dest) | O tamanho máximo a ser inserido.                                                 |

## Retornos

O número de caracteres compactados.

## Exemplos

```c
new string[17];
new pstring[17 char] = !"Hi, how are you?";
strunpack(string, pstring);
```
## Funções Relacionadas

- [ispacked](ispacked): Verifique se a string fornecida está compactada.
- [strpack](strpack): Esta função pode ser usada para empacotar uma string.
- [strcmp](strcmp): Compare duas strings para verificar se são iguais.
- [strfind](strfind): Pesquisa uma string em outra string.
- [strins](strins): Insere texto em uma string.
- [strlen](strlen): Obtenha o comprimento de uma string.
- [strmid](strmid): Extrai parte de uma string para outra string.
- [strpack](strpack): compacta uma string em uma string de destino.
- [strval](strval): Converte uma string em um número inteiro.
- [strcat](strcat): concatena duas strings em uma referência de destino.
- [strdel](strdel): Exclui parte de uma string.
