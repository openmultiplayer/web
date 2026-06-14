---
title: IsValidPlayerPickup
sidebar_label: IsValidPlayerPickup
description: "Verifica se uma coleta de jogador é válida."
tags: ["player", "pickup", "playerpickup"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Verifica se uma coleta de jogador é válida.

| Nome | Descrição |
| -------- | ------------------------------------- |
| playerid | O ID do jogador.                 |
| pickupid | O ID do player-pickup a ser verificado. |

## Retornos

Esta função retorna **true** se a seleção do jogador for válida ou **false** se não for.

## Exemplos

```c
new PlayerPickup[MAX_PLAYERS]; // Crie uma variável para armazenar o ID de coleta do jogador

public OnPlayerConnect(playerid)
{
    PlayerPickup[playerid] = CreatePlayerPickup(playerid, 1242, 2, 2010.0979, 1222.0642, 10.8206, -1);
    // Crie um coletor de armadura e armazene o ID em 'PlayerPickup[playerid]'

    if (IsValidPlayerPickup(playerid, PlayerPickup[playerid]))
    {
        // Faça alguma coisa
    }
    return 1;
}
```
## Funções Relacionadas

- [CreatePlayerPickup](CreatePlayerPickup): Cria um pickup que ficará visível para apenas um jogador.
- [DestroyPlayerPickup](DestroyPlayerPickup): Destrua um player-pickup.
- [IsPlayerPickupStreamedIn](IsPlayerPickupStreamedIn): Verifica se um player-pickup foi transmitido para o jogador.
- [SetPlayerPickupPos](SetPlayerPickupPos): Define a posição de um player-pickup.
- [GetPlayerPickupPos](GetPlayerPickupPos): Obtém as coordenadas de uma coleta de jogador.
- [SetPlayerPickupModel](SetPlayerPickupModel): Define o modelo de um player-pickup.
- [GetPlayerPickupModel](GetPlayerPickupModel): Obtém o modelo ID de um player-pickup.
- [SetPlayerPickupType](SetPlayerPickupType): Define o tipo de captação do jogador.
- [GetPlayerPickupType](GetPlayerPickupType): Obtém o tipo de pickup do jogador.
- [SetPlayerPickupVirtualWorld](SetPlayerPickupVirtualWorld): Define o mundo virtual ID de um player-pickup.
- [GetPlayerPickupVirtualWorld](GetPlayerPickupVirtualWorld): Obtém o mundo virtual ID de um player-pickup.
