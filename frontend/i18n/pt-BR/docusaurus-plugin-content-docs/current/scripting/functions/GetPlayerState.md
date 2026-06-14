---
title: GetPlayerState
sidebar_label: GetPlayerState
description: "Obtenha o estado atual de um jogador."
tags: ["player"]
---


## Descrição

Obtenha o estado atual de um jogador.

| Nome | Descrição |
| -------- | ------------------------------------------------- |
| playerid | O ID do jogador do qual obter o estado atual. |

## Retornos

O estado atual do jogador como um número inteiro (consulte: [Estados do jogador](../resources/playerstates)).

## Exemplos

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    new PLAYER_STATE:state = GetPlayerState(killerid); // Obtenha o estado do assassino

    if (state == PLAYER_STATE_DRIVER) // Se o assassino estivesse em um veículo
    {
        // É um motorista fazendo drive-by; pegue algum dinheiro
        GivePlayerMoney(killerid, -10000);
    }
    return 1;
}
```
## Funções Relacionadas

- [GetPlayerSpecialAction](GetPlayerSpecialAction): Obtenha a ação especial atual de um jogador.
- [SetPlayerSpecialAction](SetPlayerSpecialAction): Define a ação especial de um jogador.

## Callbacks Relacionadas

- [OnPlayerStateChange](../callbacks/OnPlayerStateChange): Chamado quando um jogador muda de estado.

## Recursos relacionados

- [Estados do jogador](../resources/playerstates)
