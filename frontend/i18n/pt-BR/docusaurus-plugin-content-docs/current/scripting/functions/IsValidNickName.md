---
title: IsValidNickName
sidebar_label: IsValidNickName
description: "Verifica se um apelido é válido."
tags: []
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Verifica se um apelido é válido.

| Nome | Descrição |
| ------------ | ----------------------- |
| const name[] | O apelido a ser verificado. |

## Retornos

Retorna true se o apelido for válido, caso contrário, false.

## Exemplos

```c
if (IsValidNickName("Barnaby_Keene"))
{
    // Faça alguma coisa
}
else
{
    SendClientMessage(playerid, 0xFF0000FF, "Your nick name is not valid.");
}
```
## Notas

:::tip

Por padrão, os caracteres válidos no apelido são (0-9, a-z, A-Z, [], (), \$ @ . \_ e = apenas).

:::

## Funções Relacionadas

- [AllowNickNameCharacter](AllowNickNameCharacter): Permite que um caractere seja usado no apelido.
- [SetPlayerName](SetPlayerName): Define o nome de um jogador.
- [GetPlayerName](GetPlayerName): Obtém o nome de um jogador.
