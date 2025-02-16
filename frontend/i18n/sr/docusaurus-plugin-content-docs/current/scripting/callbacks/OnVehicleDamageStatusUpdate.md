---
title: OnVehicleDamageStatusUpdate
sidebar_label: OnVehicleDamageStatusUpdate
description: Ова функција се позива када се статус оштећења елемената возила као што су врата, гуме, панели или светла промени
tags: ["vehicle"]
---

:::tip

За неке корисне функције за рад са вредностима оштећења возила, погледајте [овде](../resources/damagestatus).

:::

## Опис

Ова функција се позива када се статус оштећења елемената возила као што су врата, гуме, панели или светла промени.

| Име       | Опис                                                                                                   |
| --------- | ------------------------------------------------------------------------------------------------------ |
| vehicleid | ID возила чији је статус оштећења промењен.                                                            |
| playerid  | ID играча који је синхронизовао промену у статусу оштећења (који је оштетио или поправио ауто).        |

## Враћа

**1** - Онемогућиће другим филтерскриптама да приме ову функцију.

**0** - Означава да ће ова функција бити прослеђена следећој филтерскрипти.

Ова функција се увек прво позива у филтерскриптама.

## Пример

```c
public OnVehicleDamageStatusUpdate(vehicleid, playerid)
{
    // Прегледајте статус оштећења свих компоненти
    new 
        VEHICLE_PANEL_STATUS:panels,
        VEHICLE_DOOR_STATUS:doors,
        VEHICLE_LIGHT_STATUS:lights,
        VEHICLE_TYRE_STATUS:tyres;

    GetVehicleDamageStatus(vehicleid, panels, doors, lights, tyres);

    // Поставите гуме на 0, што значи да ниједна није пробушена
    tyres = VEHICLE_TYRE_STATUS_NONE;

    // Ажурирајте статус оштећења возила са неупопаним гумама
    UpdateVehicleDamageStatus(vehicleid, panels, doors, lights, tyres);
    return 1;
}
```

## Белешке

:::tip

Ово не укључује промене у стању возила.

:::

## Повезане функције

Следеће функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [GetVehicleDamageStatus](../functions/GetVehicleDamageStatus): Прегледајте статус оштећења возила за сваку делове појединачно.
- [UpdateVehicleDamageStatus](../functions/UpdateVehicleDamageStatus): Ажурирајте статус оштећења возила.
