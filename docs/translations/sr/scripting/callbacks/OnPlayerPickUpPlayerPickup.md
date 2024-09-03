---
title: OnPlayerPickUpPlayerPickup
description: Овај повратни позив се позива када играч подигне играчев пикап креиран помоћу CreatePlayerPickup.
tags: ["player", "pickup", "playerpickup"]
---

<VersionWarn name='callback' version='omp v1.1.0.2612' />

## Опис

Овај повратни позив се позива када играч подигне играчев пикап креиран помоћу [CreatePlayerPickup](../functions/CreatePlayerPickup)..

| Име      | Опис                                                                                    |
|----------|-----------------------------------------------------------------------------------------|
| playerid | ID играча који је покупио пикап.                                                        |
| pickupid | ID играчевог пикапа, враћен од функције [CreatePlayerPickup](../functions/CreatePlayerPickup)     |

## Враћа

Увек се позива прво у гамемод-у.

## Пример

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

## Повезане повратне функције

Следеће повратне функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [OnPlayerPickupStreamIn](OnPlayerPickupStreamIn): Позива се када играчев пикап уђе у видно поље играча.
- [OnPlayerPickupStreamOut](OnPlayerPickupStreamOut): Позива се када играчев пикап напусти видно поље играча.

## Повезане функције

Следеће функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [CreatePlayerPickup](../functions/CreatePlayerPickup): Креира играчев пикап које ће бити видљив само једном играчу.
- [DestroyPlayerPickup](../functions/DestroyPlayerPickup): Уништи играчев пикап.
