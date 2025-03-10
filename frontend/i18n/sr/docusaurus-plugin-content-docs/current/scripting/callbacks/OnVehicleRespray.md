---
title: OnVehicleRespray
sidebar_label: OnVehicleRespray
description: Ова повратна функција се позива када играч изађе из радње за модификацију, чак и ако боје нису промењене.
tags: ["vehicle"]
---

## Опис

Ова повратна функција се позива када играч изађе из радње за модификацију, чак и ако боје нису промењене. Обратите пажњу, назив је неодређен, Pay 'n' Spray радње не позивају ову повратну функцију.

| Име       | Опис                                                         |
| --------- | ------------------------------------------------------------ |
| playerid  | ID играча који управља возилом.                              |
| vehicleid | ID возила које је пребојено.                                 |
| color1    | Боја у коју је промењена примарна боја возила.               |
| color2    | Боја у коју је промењена секундарна боја возила.             |

## Враћа

Ова повратна функција се увек позива прва у гаме модеу, па враћање 0 у њој блокира остале филтер скрипте да је виде.

## Пример

```c
public OnVehicleRespray(playerid, vehicleid, color1, color2)
{
    new string[48];
    format(string, sizeof(string), "You resprayed vehicle %d to colors %d and %d!", vehicleid, color1, color2);
    SendClientMessage(playerid, COLOR_GREEN, string);
    return 1;
}
```

## Белешке

:::tip

Ова повратна функција се не позива од стране ChangeVehicleColor. Назив може бити обмануто, ова повратна функција се не позива за pay 'n' spray (само за радње за модификацију).

Погледај ово: http://pastebin.com/G81da7N1

:::

:::warning

Познати bug-ови:

- Преглед компоненти унутар радње за модификацију може позвати ову повратну функцију.

:::

## Повезанее повратне функције

Следеће повратне функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [OnVehiclePaintjob](OnVehiclePaintjob): Ова повратна функција се позива када се промени боја возила.
- [OnVehicleMod](OnVehicleMod): Ова повратна функција се позива када се возило модификује.
- [OnEnterExitModShop](OnEnterExitModShop): Ова повратна функција се позива када возило уђе или изађе из радње за модификацију.

## Повезанее функције

Следеће функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [ChangeVehicleColor](../functions/ChangeVehicleColor): Поставите боју возила.
- [ChangeVehiclePaintjob](../functions/ChangeVehiclePaintjob): Промените фарбу на возилу.
