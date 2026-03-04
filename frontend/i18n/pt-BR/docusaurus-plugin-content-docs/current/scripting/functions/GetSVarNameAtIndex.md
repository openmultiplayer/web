---
title: GetSVarNameAtIndex
sidebar_label: GetSVarNameAtIndex
description: Recupera o nome de uma sVar pelo índice.
tags: ["server variable", "svar"]
---

## Descrição

Recupera o nome de uma sVar pelo índice.

| Name                   | Description                                                |
| ---------------------- | ---------------------------------------------------------- |
| index                  | O índice da sVar.                                          |
| output[]               | Uma string para armazenar o nome da sVar, passada por referência. |
| size = sizeof (output) | O tamanho máximo da string retornada.                      |

## Retorno

Esta função não retorna valores específicos.

## Funções Relacionadas

- [GetSVarType](GetSVarType): Obtém o tipo da variável de servidor.
- [GetSVarInt](GetSVarInt): Obtém uma variável de servidor como inteiro.
- [GetSVarFloat](GetSVarFloat): Obtém o float previamente definido em uma variável de servidor.
- [GetSVarString](GetSVarString): Obtém a string previamente definida em uma variável de servidor.
