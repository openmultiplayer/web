---
title: GetPlayerPickupType
sidebar_label: GetPlayerPickupType
description: "Obtém o tipo de coleta de jogador."
tags: ["player", "pickup", "playerpickup"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém o tipo de coleta de jogador.

| Nome | Descrição |
| -------- | ----------------------------------------------- |
| playerid | O ID do jogador.                           |
| pickupid | O ID do player-pickup para obter o tipo. |

## Retornos

Retorna o tipo de coleta do jogador.

**-1** se a coleta do jogador não for válida.

## Exemplos

```c
new PlayerPickup[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    PlayerPickup[playerid] = CreatePlayerPickup(playerid, 1239, 1, 2010.0979, 1222.0642, 10.8206, -1);

    new type = GetPlayerPickupType(playerid, PlayerPickup[playerid]);
    // tipo = 1
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
- [SetPlayerPickupModel](SetPlayerPickupModel): Define o modelo de um player-pickup.
- [GetPlayerPickupModel](GetPlayerPickupModel): Obtém o modelo ID de um player-pickup.
- [SetPlayerPickupType](SetPlayerPickupType): Define o tipo de captação do jogador.
- [SetPlayerPickupVirtualWorld](SetPlayerPickupVirtualWorld): Define o mundo virtual ID de um player-pickup.
- [GetPlayerPickupVirtualWorld](GetPlayerPickupVirtualWorld): Obtém o mundo virtual ID de um player-pickup.
