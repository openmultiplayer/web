---
title: OnEnterExitModShop
sidebar_label: OnEnterExitModShop
description: Ова повратна функција се позива када играч уђе или напусти мод шоп.
tags: ["player"]
---

## Опис

Ова повратна функција се позива када играч уђе или напусти мод шоп.

| ИМе        | Опис                                                                         |
| ---------- | ---------------------------------------------------------------------------- |
| playerid   | ID играча који је ушао или напустио мод шоп.                                 |
| enterexit  | Интеријерски ID мод шопа у који играч улази (или 0 ако излази).              |
| interiorid | 1 ако је играч ушао или 0 ако је изашао.                                     |

## Враћа

Увек се позива први у филтер скриптама.

## Примери

```c
public OnEnterExitModShop(playerid, enterexit, interiorid)
{
    if (enterexit == 0) // Ако је enterexit 0, то значи да играч излази
    {
        SendClientMessage(playerid, COLOR_WHITE, "Nice car! You have been taxed $100.");
        GivePlayerMoney(playerid, -100);
    }
    return 1;
}
```

## Белешке

:::warning

Познат bug:

- Играчима се дешава судар када уђу у исти мод шоп.

:::

## Повезане повратне функције

Следеће повратне функције могу бити корисне, јер су на неки начин повезане са овом повратном функцијом.

- [OnVehicleMod](OnVehicleMod): Ова повратна функција се позива када се возило модификује.
- [OnVehicleRespray](OnVehicleRespray): Ова повратна функција се позива када играч изађе из мод шопа, чак и ако боје нису променљене.
- [OnVehiclePaintjob](OnVehiclePaintjob): Ова повратна функција се позива када играч прегледа боју возила унутар мод шопа.

## Повезане функције

Следеће функције могу бити корисне, јер су на неки начин повезане са овом повратном функцијом

- [IsPlayerInModShop](../functions/IsPlayerInModShop): Провери да ли је играч у мод шопу.
- [AddVehicleComponent](../functions/AddVehicleComponent): Додај компоненту возилу.
