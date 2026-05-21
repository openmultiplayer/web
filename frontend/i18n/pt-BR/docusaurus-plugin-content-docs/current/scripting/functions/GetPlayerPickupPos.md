---
title: GetPlayerPickupPos
sidebar_label: GetPlayerPickupPos
description: "Obtém as coordenadas de uma coleta de jogador."
tags: ["player", "pickup", "playerpickup"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém as coordenadas de uma coleta de jogador.

| Nome | Descrição |
| -------- | ------------------------------------------------------------------------- |
| playerid | O ID do jogador.                                                     |
| pickupid | O ID do player-pickup para obter a posição.                       |
| &Float:x | Uma variável flutuante na qual armazenar a coordenada x, passada por referência. |
| &Float:y | Uma variável flutuante na qual armazenar a coordenada y, passada por referência. |
| &Float:z | Uma variável flutuante na qual armazenar a coordenada z, passada por referência. |

## Retornos

Esta função não retorna um valor específico.

## Exemplos

```c
new PlayerPickup[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    PlayerPickup[playerid] = CreatePlayerPickup(playerid, 1239, 1, 2010.0979, 1222.0642, 10.8206, -1);

    new
        Float:x,
        Float:y,
        Float:z;

    GetPickupPos(g_Pickup, x, y, z);
    // x = 2010.0979
    // y = 1222.0642
    // z = 10.8206
    return 1;
}
```
## Funções Relacionadas

- [CreatePlayerPickup](CreatePlayerPickup): Cria um pickup que ficará visível para apenas um jogador.
- [DestroyPlayerPickup](DestroyPlayerPickup): Destrua um player-pickup.
- [IsValidPlayerPickup](IsValidPlayerPickup): Verifica se a coleta do jogador é válida.
- [IsPlayerPickupStreamedIn](IsPlayerPickupStreamedIn): verifica se um player-pickup foi transmitido para o jogador.
- [SetPlayerPickupPos](SetPlayerPickupPos): Define a posição de um player-pickup.
- [SetPlayerPickupModel](SetPlayerPickupModel): Define o modelo de um player-pickup.
- [GetPlayerPickupModel](GetPlayerPickupModel): Obtém o modelo ID de um player-pickup.
- [SetPlayerPickupType](SetPlayerPickupType): Define o tipo de captação do jogador.
- [GetPlayerPickupType](GetPlayerPickupType): Obtém o tipo de pickup do jogador.
- [SetPlayerPickupVirtualWorld](SetPlayerPickupVirtualWorld): Define o mundo virtual ID de um player-pickup.
- [GetPlayerPickupVirtualWorld](GetPlayerPickupVirtualWorld): Obtém o mundo virtual ID de um player-pickup.
