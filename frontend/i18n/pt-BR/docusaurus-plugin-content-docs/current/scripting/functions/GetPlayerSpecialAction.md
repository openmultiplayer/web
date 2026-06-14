---
title: GetPlayerSpecialAction
sidebar_label: GetPlayerSpecialAction
description: "Recupera a ação especial atual de um jogador."
tags: ["player"]
---


## Descrição

Recupera a ação especial atual de um jogador.

| Nome | Descrição |
| -------- | -------------------------------------------------- |
| playerid | O ID do jogador para obter a ação especial. |

## Retornos

A ação especial do jogador (consulte: [Ações Especiais](../resources/specialactions)).

## Exemplos

```c
public OnPlayerUpdate(playerid)
{
    // Banir jogadores se eles tiverem um jetpack
    if (GetPlayerSpecialAction(playerid) == SPECIAL_ACTION_USEJETPACK)
    {
        Ban(playerid);
    }
    return 1;
}
```
## Funções Relacionadas

- [SetPlayerSpecialAction](SetPlayerSpecialAction): Define a ação especial de um jogador.
- [GetPlayerState](GetPlayerState): Obtenha o estado atual de um jogador.

## Recursos relacionados

- [Ação Especial IDs](../resources/specialactions)
