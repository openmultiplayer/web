---
title: OnPlayerPickupStreamOut
description: Овај повратни позив се активира када player-pickup напусти визуелни домет играча.
tags: ["player", "pickup", "playerpickup"]
---

<VersionWarnSR name='повратна функција' version='omp v1.1.0.2612' />

## Опис

Овај повратни позив се активира када player-pickup напусти визуелни домет играча.

| Име      | Опис                                                                                           |
|----------|------------------------------------------------------------------------------------------------|
| pickupid | ID играчевог pickupa, враћен од стране [CreatePlayerPickup](../functions/CreatePlayerPickup)   |
| playerid | ID играћа који је напустио радиус играчевог pickupa                                            |

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

public OnPlayerPickupStreamOut(pickupid, playerid)
{
    if (pickupid == g_PlayerPickupHealth[playerid])
    {
        printf("g_PlayerPickupHealth is streamed out for player id %d", playerid);
    }
    return 1;
}
```

## Повезане повратне функције

Следеће повратне функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [OnPlayerPickUpPlayerPickup](OnPlayerPickUpPlayerPickup): Позвано када играч покупи player-pickup.
- [OnPlayerPickupStreamIn](OnPlayerPickupStreamIn): Позвано када player-pickup уђе у визуелни домет играча.

## Повезане функције

Следеће функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [CreatePlayerPickup](../functions/CreatePlayerPickup): Креира pickup који ће бити видљив само једном играчу.
- [DestroyPlayerPickup](../functions/DestroyPlayerPickup): Уништи играчев pickup.
