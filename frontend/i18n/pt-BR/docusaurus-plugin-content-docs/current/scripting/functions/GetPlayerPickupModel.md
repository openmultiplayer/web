---
title: GetPlayerPickupModel
sidebar_label: GetPlayerPickupModel
description: "Obtém o modelo ID de um player-pickup."
tags: ["player", "pickup", "playerpickup"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém o modelo ID de um player-pickup.

| Nome | Descrição |
| -------- | --------------------------------------------------- |
| playerid | O ID do jogador.                               |
| pickupid | O ID do player-pickup para obter o modelo ID. |

## Retornos

Retorna o modelo ID do player-pickup.

## Exemplos

```c
new PlayerPickup[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    PlayerPickup[playerid] = CreatePlayerPickup(playerid, 1239, 1, 2010.0979, 1222.0642, 10.8206, -1);

    new model = GetPlayerPickupModel(playerid, PlayerPickup[playerid]);
    // modelo = 1239
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
- [SetPlayerPickupType](SetPlayerPickupType): Define o tipo de captação do jogador.
- [GetPlayerPickupType](GetPlayerPickupType): Obtém o tipo de pickup do jogador.
- [SetPlayerPickupVirtualWorld](SetPlayerPickupVirtualWorld): Define o mundo virtual ID de um player-pickup.
- [GetPlayerPickupVirtualWorld](GetPlayerPickupVirtualWorld): Obtém o mundo virtual ID de um player-pickup.
