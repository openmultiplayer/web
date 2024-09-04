---
title: OnVehiclePaintjob
description: ва повратна функција се позива када играч прегледа боју на возилу у радњи за модификацију.
tags: ["vehicle"]
---

## Опис

Ова повратна функција се позива када играч прегледа боју на возилу у радњи за модификацију. Обратите пажњу, ова повратна функција се не позива када играч купи боју.

| Име        | Опис                                                             |
| ---------- | ---------------------------------------------------------------- |
| playerid   | ID играча који је променио боју на свом возилу.                  |
| vehicleid  | ID возила на којем је промењена фарба.                           |
| paintjobid | ID новое фарбе.                                                  |

## Враћа

Ова повратна функција се увек позива прва у гамемод-у, па враћање 0 у њој блокира остале филтер скрипте да је виде.

## Пример

```c
public OnVehiclePaintjob(playerid, vehicleid, paintjobid)
{
    new string[128];
    format(string, sizeof(string), "You have changed your vehicle's paintjob to %d!", paintjobid);
    SendClientMessage(playerid, 0x33AA33AA, string);
    return 1;
}
```

## Белешке

:::tip

Ова повратна функција се не позива од стране [ChangeVehiclePaintjob](../functions/ChangeVehiclePaintjob). Можете користити OnVehicleChangePaintjob из vSync како бисте знали када играч купи боју.

:::

## Повезане повратне функције

Следеће повратне функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [OnVehicleRespray](OnVehicleRespray): Ова повратна функција се позива када је возило пребојено.
- [OnVehicleMod](OnVehicleMod): Ова повратна функција се позива када је возило модификовано.

## Повезане функције

Следеће функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [ChangeVehiclePaintjob](../functions/ChangeVehiclePaintjob): Промените фарбу на возилу.
- [ChangeVehicleColor](../functions/ChangeVehicleColor): Поставите боју возила.
