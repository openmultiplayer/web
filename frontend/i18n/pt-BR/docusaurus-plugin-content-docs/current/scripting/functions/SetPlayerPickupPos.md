---
title: SetPlayerPickupPos
sidebar_label: SetPlayerPickupPos
description: "Define a posição de um player-pickup."
tags: ["player", "pickup", "playerpickup"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Define a posição de um player-pickup.

| Nome | Descrição |
| ------------------ | -------------------------------------- |
| playerid | O ID do jogador.                  |
| pickupid | O ID do captador do jogador.           |
| Float:x | A coordenada x para definir o pickup. |
| Float:y | A coordenada y para definir a captação. |
| Float:z | A coordenada z para definir o pickup. |
| bool:update = true | Atualizar coleta para jogador. (true/false) |

## Retornos

Esta função sempre retorna **true**.

## Exemplos

```c
new PlayerPickup[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    PlayerPickup[playerid] = CreatePlayerPickup(playerid, 1242, 2, 2010.0979, 1222.0642, 10.8206, -1);

    SetPlayerPickupPos(playerid, PlayerPickup[playerid], 1958.5488, 1344.9137, 15.3613);
    return 1;
}
```
## Funções Relacionadas

- [CreatePlayerPickup](CreatePlayerPickup): Cria um pickup que ficará visível para apenas um jogador.
- [DestroyPlayerPickup](DestroyPlayerPickup): Destrua um player-pickup.
- [IsValidPlayerPickup](IsValidPlayerPickup): Verifica se a coleta do jogador é válida.
- [IsPlayerPickupStreamedIn](IsPlayerPickupStreamedIn): verifica se um player-pickup foi transmitido para o jogador.
- [GetPlayerPickupPos](GetPlayerPickupPos): Obtém as coordenadas de uma coleta de jogador.
- [SetPlayerPickupModel](SetPlayerPickupModel): Define o modelo de um player-pickup.
- [GetPlayerPickupModel](GetPlayerPickupModel): Obtém o modelo ID de um player-pickup.
- [SetPlayerPickupType](SetPlayerPickupType): Define o tipo de captação do jogador.
- [GetPlayerPickupType](GetPlayerPickupType): Obtém o tipo de pickup do jogador.
- [SetPlayerPickupVirtualWorld](SetPlayerPickupVirtualWorld): Define o mundo virtual ID de um player-pickup.
- [GetPlayerPickupVirtualWorld](GetPlayerPickupVirtualWorld): Obtém o mundo virtual ID de um player-pickup.
