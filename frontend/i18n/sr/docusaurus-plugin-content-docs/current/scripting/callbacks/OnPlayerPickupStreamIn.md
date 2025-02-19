---
title: OnPlayerPickupStreamIn
sidebar_label: OnPlayerPickupStreamIn
description: Позива се када играчев пикап уђе у видно поље играча.
tags: ["player", "pickup", "playerpickup"]
---

<VersionWarnSR name='повратна функција' version='omp v1.1.0.2612' />

## Опис

Позива се када играчев пикап уђе у видно поље играча.

| Име      | Опис                                                                                 |
|----------|--------------------------------------------------------------------------------------|
| pickupid | ID играчевог пикапа, враћен од [CreatePlayerPickup](../functions/CreatePlayerPickup) |
| playerid | ID играча који види играчев пикап у свом видном пољу.                                |

## Враћа

Увек се позива прво у гамемод-у.

## Пример

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
        printf("g_PlayerPickupHealth is streamed in for player id %d", playerid);
    }
    return 1;
}
```

## Повезане повратне функције

Следеће повратне функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [OnPlayerPickUpPlayerPickup](OnPlayerPickUpPlayerPickup): Позива се када играч покупи играчев пикап.
- [OnPlayerPickupStreamOut](OnPlayerPickupStreamOut): Позива се када играчев пикап напусти видно поље играча.

## Повезане функције

Следеће функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [CreatePlayerPickup](../functions/CreatePlayerPickup): Креира играчев пикап који ће бити видљив само једном играчу.
- [DestroyPlayerPickup](../functions/DestroyPlayerPickup): Уништи играчев пикап.
