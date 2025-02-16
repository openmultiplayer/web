---
title: OnPlayerPickUpPlayerPickup
sidebar_label: OnPlayerPickUpPlayerPickup
description: Este callback é chamado quando um jogador coleta um player-pickup criado com CreatePlayerPickup.
tags: ["player", "pickup", "playerpickup"]
---

<VersionWarn name='callback' version='omp v1.1.0.2612' />

## Descrição

Este callback é chamado quando um jogador coleta um player-pickup criado com [CreatePlayerPickup](../functions/CreatePlayerPickup).

| Nome     | Descrição                                                                                   |
|----------|---------------------------------------------------------------------------------------------|
| playerid | O ID do jogador que coletou o player-pickup.                                                |
| pickupid | O ID do player-pickup, retornado por [CreatePlayerPickup](../functions/CreatePlayerPickup). |

## Retornos

Ele é sempre chamado primeiro no modo de jogo.

## Exemplos

```c
new player_pickup_Cash[MAX_PLAYERS];
new player_pickup_Health[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    player_pickup_Cash[playerid] = CreatePlayerPickup(playerid, 1274, 2, 2009.8658, 1220.0293, 10.8206, -1);
    player_pickup_Health[playerid] = CreatePlayerPickup(playerid, 1240, 2, 2009.8474, 1218.0459, 10.8175, -1);
    return 1;
}

public OnPlayerPickUpPlayerPickup(playerid, pickupid)
{
    if (pickupid == player_pickup_Cash[playerid])
    {
        GivePlayerMoney(playerid, 1000);
    }
    else if (pickupid == player_pickup_Health[playerid])
    {
        SetPlayerHealth(playerid, 100.0);
    }
    return 1;
}
```

## Callbacks Relacionados

Os seguintes callbacks podem ser úteis, pois estão relacionados a este callback de alguma forma. 

- [OnPlayerPickupStreamIn](OnPlayerPickupStreamIn): Chamado quando um player-pickup entra no campo de visão do jogador.
- [OnPlayerPickupStreamOut](OnPlayerPickupStreamOut): Chamado quando um player-pickup sai do campo de visão do jogador.

## Funções Relacionadas

As seguintes funções podem ser úteis, pois estão relacionadas a este callback de alguma forma. 

- [CreatePlayerPickup](../functions/CreatePlayerPickup): Cria um pickup que será visível apenas para um jogador.
- [DestroyPlayerPickup](../functions/DestroyPlayerPickup): Destroi um player-pickup.