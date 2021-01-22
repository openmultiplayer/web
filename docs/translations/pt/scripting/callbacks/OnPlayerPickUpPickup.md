---
title: OnPlayerPickUpPickup
description: Esta callback é chamada quando um jogador coleta um pickup criado com CreatePickup.
tags: ["player"]
---

## Descrição

Esta callback é chamada quando um jogador coleta um pickup criado com CreatePickup.

| Nome     | Descrição                                         |
| -------- | ------------------------------------------------- |
| playerid | O ID do jogador que coletou o pickup.             |
| pickupid | O ID do pickup retornado através do CreatePickup. |

## Retorno

Sempre é chamado primeiro na gamemode.

## Exemplos

```c
new pickup_Dinheiro;
new pickup_Vida;

public OnGameModeInit()
{
    pickup_Dinheiro = CreatePickup(1274, 2, 0.0, 0.0, 9.0);
    pickup_Vida = CreatePickup(1240, 2, 0.0, 0.0, 9.0);
    return 1;
}

public OnPlayerPickUpPickup(playerid, pickupid)
{
    if (pickupid == pickup_Dinheiro)
    {
        GivePlayerMoney(playerid, 1000);
    }
    else if (pickupid == pickup_Vida)
    {
        SetPlayerHealth(playerid, 100.0);
    }
    return 1;
}
```

## Funções Relacionadas

- [CreatePickup](../functions/CreatePickup): Cria um Pickup.
- [DestroyPickup](../functions/DestroyPickup): Destrói um Pickup.
