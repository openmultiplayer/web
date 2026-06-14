---
title: IsPlayerPickupStreamedIn
sidebar_label: IsPlayerPickupStreamedIn
description: "Verifica se uma captura de jogador foi transmitida para o jogador."
tags: ["player", "pickup", "playerpickup"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Verifica se uma captura de jogador foi transmitida para o jogador.

| Nome | Descrição |
| -------- | ---------------------------- |
| playerid | O ID do jogador.        |
| pickupid | O ID do captador do jogador. |

## Retornos

Esta função retorna **true** se a captação do jogador for transmitida para o jogador ou **false** se não for.

## Exemplos

```c
new PlayerPickup[MAX_PLAYERS]; // Crie uma variável para armazenar o ID de coleta do jogador

public OnPlayerConnect(playerid)
{
    PlayerPickup[playerid] = CreatePlayerPickup(playerid, 1242, 2, 2010.0979, 1222.0642, 10.8206, -1);
    // Crie um coletor de armadura e armazene o ID em 'PlayerPickup[playerid]'
    return 1;
}

public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    if (IsPlayerPickupStreamedIn(playerid, PlayerPickup[playerid]))
    {
        // Faça alguma coisa
    }
    return 1;
}
```
## Funções Relacionadas

- [CreatePlayerPickup](CreatePlayerPickup): Cria um pickup que ficará visível para apenas um jogador.
- [DestroyPlayerPickup](DestroyPlayerPickup): Destrua um player-pickup.
- [IsValidPlayerPickup](IsValidPlayerPickup): Verifica se a coleta do jogador é válida.
- [SetPlayerPickupPos](SetPlayerPickupPos): Define a posição de um player-pickup.
- [GetPlayerPickupPos](GetPlayerPickupPos): Obtém as coordenadas de uma coleta de jogador.
- [SetPlayerPickupModel](SetPlayerPickupModel): Define o modelo de um player-pickup.
- [GetPlayerPickupModel](GetPlayerPickupModel): Obtém o modelo ID de um player-pickup.
- [SetPlayerPickupType](SetPlayerPickupType): Define o tipo de captação do jogador.
- [GetPlayerPickupType](GetPlayerPickupType): Obtém o tipo de pickup do jogador.
- [SetPlayerPickupVirtualWorld](SetPlayerPickupVirtualWorld): Define o mundo virtual ID de um player-pickup.
- [GetPlayerPickupVirtualWorld](GetPlayerPickupVirtualWorld): Obtém o mundo virtual ID de um player-pickup.
