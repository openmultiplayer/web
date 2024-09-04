---
title: OnPickupStreamIn
description: Ова повратна функција се позива када pickup уђе у визуелни опсег играча.
tags: ["player"]
---

<VersionWarnSR name='повратна функција' version='omp v1.1.0.2612' />

## Опис

Ова повратна функција се позива када pickup уђе у визуелни опсег играча.

| Име      | Опис                                                                        |
|----------|-----------------------------------------------------------------------------|
| pickupid | ID pickup-а, који враћа [CreatePickup](../functions/CreatePickup).          |
| playerid | ID играча који је pickup ушао у визуелни опсег.                             |

## Враћа

Увек се позива прва у гамемоде-у.

## Примери

```c
new g_PickupHealth;

public OnGameModeInit()
{
    g_PickupHealth = CreatePickup(1240, 2, 2009.8474, 1218.0459, 10.8175);
    return 1;
}

public OnPickupStreamIn(pickupid, playerid)
{
    if (pickupid == g_PickupHealth)
    {
        printf("g_PickupHealth is streamed in for player id %d", playerid);
    }
    return 1;
}
```

## Повезане повратне функције

Следеће повратне функције могу бити корисне, јер су на неки начин повезане са овом повратном функцијом.

- [OnPlayerPickUpPickup](OnPlayerPickUpPickup): Позвана када играч покупи pickup.
- [OnPickupStreamOut](OnPickupStreamOut): Позвана када pickup напусти визуелни опсег играча.

## Повезане функције

Следеће функције могу бити корисне, јер су на неки начин повезане са овом повратном функцијом.

- [CreatePickup](../functions/CreatePickup): Креирај pickup.
- [DestroyPickup](../functions/DestroyPickup): Уништи pickup.
