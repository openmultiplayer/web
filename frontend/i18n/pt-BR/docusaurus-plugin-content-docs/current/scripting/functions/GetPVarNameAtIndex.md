---
title: GetPVarNameAtIndex
sidebar_label: GetPVarNameAtIndex
description: Recupera o nome de uma pVar de jogador pelo índice.
tags: ["player variable", "pvar"]
---

## Descrição

Recupera o nome de uma pVar de jogador pelo índice.

| Name                   | Description                                                          |
| ---------------------- | -------------------------------------------------------------------- |
| playerid               | O ID do jogador cuja variável de jogador terá o nome obtido.         |
| index                  | O índice da pVar do jogador.                                         |
| output[]               | Uma string para armazenar o nome da pVar, passada por referência.    |
| size = sizeof (output) | O tamanho máximo da string retornada.                                |

## Retorno

Esta função não retorna valores específicos.

## Funções Relacionadas

- [GetPVarType](GetPVarType): Obtém o tipo da variável de jogador.
- [GetPVarInt](GetPVarInt): Obtém o inteiro previamente definido em uma variável de jogador.
- [GetPVarFloat](GetPVarFloat): Obtém o float previamente definido em uma variável de jogador.
- [GetPVarString](GetPVarString): Obtém a string previamente definida em uma variável de jogador.
