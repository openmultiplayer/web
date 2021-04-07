---
title: OnVehiclePaintjob
description: Позвано када играч прегледа paintjob возила унутар tune shopa.
tags: ["vehicle"]
---

## Дескрипција

Позвано када играч прегледа paintjob возила унутар tune shopa. 
Овај колбек **НИЈЕ** позван када играч купи paintjob.

| Име        | Дескрипција                                        |
| ---------- | -------------------------------------------------- |
| playerid   | ID играча који је променио paintjob свог возила.   |
| vehicleid  | ID возила којем се променио paintjob.              |
| paintjobid | ID новог paintjob-a.                               |

## Return

Увек је позван прво у гејм моду (gamemode) тако да ће return 0 овде блокирати остале скрипте да га виде.

## Примери

```c
public OnVehiclePaintjob(playerid, vehicleid, paintjobid)
{
    new string[128];
    format(string, sizeof(string), "Променили сте paintjob возила на %d!", paintjobid);
    SendClientMessage(playerid, 0x33AA33AA, string);
    return 1;
}
```

## Белешке

:::tip

Овај колбек није позван од стране `ChangeVehiclePaintjob`. Можете користити `OnVehicleChangePaintjob` из vSync-a у случају да знате када играч купи paintjob.

:::

## Сличне Функције

- [ChangeVehiclePaintjob](../functions/ChangeVehiclePaintjob.md): Промени paintjob возила.
- [ChangeVehicleColor](../functions/ChangeVehicleColor.md): Постави боју возила.
- [OnVehicleRespray](OnVehicleRespray.md): Позван када се возило respray-а (поново обоји).
- [OnVehicleMod](OnVehicleMod.md): Позвано када се возило тјунује.
