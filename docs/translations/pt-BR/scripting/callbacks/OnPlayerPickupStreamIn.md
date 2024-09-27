---
title: OnPlayerPickupStreamIn
description: Este callback é chamado quando um player-pickup entra no campo de visão do jogador.
tags: ["player", "pickup", "playerpickup"]
---

<VersionWarn name='callback' version='omp v1.1.0.2612' />

## Descrição

Este callback é chamado quando um player-pickup entra no campo de visão do jogador.

| Nome     | Descrição                                                                                     |
|----------|-----------------------------------------------------------------------------------------------|
| pickupid | O ID do player-pickup, retornado por [CreatePlayerPickup](../functions/CreatePlayerPickup). |
| playerid | O ID do jogador que o player-pickup entrou no campo de visão.                                |

## Retornos

Ele é sempre chamado primeiro no modo de jogo.

## Exemplos

```c
new g_PlayerPickupHealth[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    g_PlayerPickupHealth[playerid] = CreatePlayerPickup(playerid, 1240, 2, 2009.8474, 1218.0459, 10.8175);
    return 1;
}

public OnPlayerPickupStreamIn(pickupid, playerid)
{
    if (pickupid == g_PlayerPickupHealth[playerid])
    {
        printf("g_PlayerPickupHealth está sendo recebido pelo ID do jogador %d.", playerid);
    }
    return 1;
}
```

## Callbacks Relacionados

Os seguintes callbacks podem ser úteis, pois estão relacionados a este callback de alguma forma. 

- [OnPlayerPickUpPlayerPickup](OnPlayerPickUpPlayerPickup): Chamado quando um jogador coleta um player-pickup.
- [OnPlayerPickupStreamOut](OnPlayerPickupStreamOut): Chamado quando um player-pickup sai do campo de visão do jogador.

## Funções Relacionadas

As seguintes funções podem ser úteis, pois estão relacionadas a este callback de alguma forma. 

- [CreatePlayerPickup](../functions/CreatePlayerPickup): Cria um pickup que será visível apenas para um jogador.
- [DestroyPlayerPickup](../functions/DestroyPlayerPickup): Destroi um player-pickup.