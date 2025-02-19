---
title: OnPlayerPickUpPickup
sidebar_label: OnPlayerPickUpPickup
description: Ова повратна функција је позвана када играч покупи пикап креиран преко CreatePickup.
tags: ["player"]
---

## Опис

Ова повратна функција је позвана када играч покупи пикап креиран преко [CreatePickup](../functions/CreatePickup).

| Име      | Опис                                                                    |
|----------|-------------------------------------------------------------------------|
| playerid | ID играча који је узео пикап.                                           |
| pickupid | ID пикапа, враћен од стране [CreatePickup](../functions/CreatePickup)   |

## Враћа

Увек се позива прво у гамемод-у.

## Пример

```c
new pickup_Cash;
new pickup_Health;

public OnGameModeInit()
{
    pickup_Cash = CreatePickup(1274, 2, 2009.8658, 1220.0293, 10.8206, -1);
    pickup_Health = CreatePickup(1240, 2, 2009.8474, 1218.0459, 10.8175, -1);
    return 1;
}

public OnPlayerPickUpPickup(playerid, pickupid)
{
    if (pickupid == pickup_Cash)
    {
        GivePlayerMoney(playerid, 1000);
    }
    else if (pickupid == pickup_Health)
    {
        SetPlayerHealth(playerid, 100.0);
    }
    return 1;
}
```

## Повезане повратне функције

Следеће повратне функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [OnPickupStreamIn](OnPickupStreamIn): Позван када подизање уђе у видно поље играча.
- [OnPickupStreamOut](OnPickupStreamOut): Позван када подизање изађе из видног поља играча.

## Повезасне функције

Следеће функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [CreatePickup](../functions/CreatePickup): Креирај пикап.
- [DestroyPickup](../functions/DestroyPickup): Уништи пикап.
