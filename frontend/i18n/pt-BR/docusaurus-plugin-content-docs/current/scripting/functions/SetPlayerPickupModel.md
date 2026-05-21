---
title: SetPlayerPickupModel
sidebar_label: SetPlayerPickupModel
description: "Define o modelo de um player-pickup."
tags: ["player", "pickup", "playerpickup"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Define o modelo de um player-pickup.

| Nome | Descrição |
| ------------------ | ------------------------------------------- |
| playerid | O ID do jogador.                       |
| pickupid | O ID do captador do jogador.                |
| model | O [modelo](../resources/pickupids) a ser definido. |
| bool:update = true | Atualizar coleta para jogador. (true/false) |

## Retornos

Esta função sempre retorna **true**.

## Exemplos

```c
new PlayerPickup[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    PlayerPickup[playerid] = CreatePlayerPickup(playerid, 1242, 2, 2010.0979, 1222.0642, 10.8206, -1);

    SetPlayerPickupModel(playerid, PlayerPickup[playerid], 1210);
    return 1;
}
```
## Funções Relacionadas

- [CreatePlayerPickup](CreatePlayerPickup): Cria um pickup que ficará visível para apenas um jogador.
- [DestroyPlayerPickup](DestroyPlayerPickup): Destrua um player-pickup.
- [IsValidPlayerPickup](IsValidPlayerPickup): Verifica se a coleta do jogador é válida.
- [IsPlayerPickupStreamedIn](IsPlayerPickupStreamedIn): verifica se um player-pickup foi transmitido para o jogador.
- [SetPlayerPickupPos](SetPlayerPickupPos): Define a posição de um player-pickup.
- [GetPlayerPickupPos](GetPlayerPickupPos): Obtém as coordenadas de uma coleta de jogador.
- [GetPlayerPickupModel](GetPlayerPickupModel): Obtém o modelo ID de um player-pickup.
- [SetPlayerPickupType](SetPlayerPickupType): Define o tipo de captação do jogador.
- [GetPlayerPickupType](GetPlayerPickupType): Obtém o tipo de pickup do jogador.
- [SetPlayerPickupVirtualWorld](SetPlayerPickupVirtualWorld): Define o mundo virtual ID de um player-pickup.
- [GetPlayerPickupVirtualWorld](GetPlayerPickupVirtualWorld): Obtém o mundo virtual ID de um player-pickup.
