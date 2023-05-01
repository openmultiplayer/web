---
title: strcmp
description: Compara duas strings para ver se são iguais.
tags: ["string"]
---

<LowercaseNote />

## Descrição

Compara duas strings para ver se são iguais.

| Name                  | Description                                                                                                                                                        |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| string1               | A primeira string a ser comparada.                                                                                                                                 |
| string2               | A segunda string a ser comparada.                                                                                                                                  |
| ignorecase (opcional) | Quando definido como true, o caso não importa - oLÁ é o mesmo que Olá. Quando "false", eles não são os mesmos.                                                     |
| length (optional)     | Quando esse comprimento é definido, os primeiros x caracteres serão comparados - fazendo "Olá Mundo" e "Olá" com um comprimento de 3 dirá que é a mesma string.    |

## Retorno

0 se as strings combinam entre si em determinado comprimento; 
1 ou -1 se algum caractere não combina: string1[i] - string2[i] ('i' representa o índice de caracteres começando em 0); Diferença no número de caracteres se uma string corresponde apenas a parte de outra string.

## Exemplos

```c
new string1[] = "Olá Mundo";
new string2[] = "Olá Mundo";

// Verifica se as strings são iguais
if (!strcmp(string1, string2))

new string3[] = "Olá";

// Verifica se os primeiros 3 caracteres correspondem
if (!strcmp(string2, string3, false, 3))

// Verifique se há strings nulas com isnull ()
if (!strcmp(string1, string2) && !isnull(string1) && !isnull(string2))

// Definição para isnull():
#if !defined isnull
    #define isnull(%1) ((!(%1[0])) || (((%1[0]) == '\1') && (!(%1[1]))))
#endif
```

## Notas

:::warning

Esta função retorna 0 se uma das strings estiver vazia. Verifique se há strings nulas com isnull(). Se você comparar strings de um arquivo de texto, você deve levar em consideração os caracteres especiais 'carriage return' e 'new line' (\r \n), conforme eles são incluídos, ao usar fread().

:::

## Funções Relacionadas

- [strfind](strfind): Procure uma string em outra string.
- [strdel](strdel): Excluir parte de uma string.
- [strins](../function/strins): Inserir texto em uma string.
- [strlen](../function/strlen): Obter o comprimento de uma string.
- [strmid](strmid): Extraia parte de uma string em outra string.
- [strpack](strpack): Empacote uma string em uma string de destino.
- [strval](strval): Converter uma string em um número inteiro.
- [strcat](strcat): Concatene duas strings em uma referência de destino.
- https://www.facom.ufu.br/~madriana/PP/TP6.pdf
