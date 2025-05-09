---
title: OnVehicleMod
sidebar_label: OnVehicleMod
description: Ова повратна функција се позива када се возило модификује.
tags: ["vehicle"]
---

## Опис

Ова повратна функција се позива када се возило модификује.

| Име         | Опис                                                    |
| ----------- | ------------------------------------------------------- |
| playerid    | ID возача возила.                                       |
| vehicleid   | ID возила које је модификовано.                         |
| componentid | ID компонента који је додат возилу.                     |

## Враћа

Увек се прво позива у гаме моде, па враћање 0 тамо такође блокира друге филтерскрипте да је виде.

## Пример

```c
public OnVehicleMod(playerid, vehicleid, componentid)
{
    printf("Vehicle %d was modded by ID %d with the componentid %d", vehicleid, playerid, componentid);

    if (GetPlayerInterior(playerid) == 0)
    {
        BanEx(playerid, "Tuning Hacks"); // Скрипта за спречавање хаковања модификација
        return 0; // Превентивно спречава да лоше модификације буду синхронизоване са другим играчима.
        // Тестирана и ради чак и на серверима који вам омогућавају да модификујете возило користећи команде, меније, дијалоге, итд.
    }
    return 1;
}
```

## Белешке

:::tip

[AddVehicleComponent](../functions/AddVehicleComponent) не позива ову повратну функцију.

:::

## Повезане повратне функције

Следеће повратне функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [OnEnterExitModShop](OnEnterExitModShop): Ова повратна функција се позива када возило уђе или изађе из радње за модификацију.
- [OnVehiclePaintjob](OnVehiclePaintjob): Ова повратна функција се позива када се промени боја возила.
- [OnVehicleRespray](OnVehicleRespray): Ова повратна функција се позива када се возило поново обојa.

## Повезане функције

Следеће функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [AddVehicleComponent](../functions/AddVehicleComponent): Додајте компоненту возилу.
