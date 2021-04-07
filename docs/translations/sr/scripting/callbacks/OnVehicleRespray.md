---
title: OnVehicleRespray
description: Овај колбек је позван када играч напусти tune shop, било да боја јесте или није промењена.
tags: ["vehicle"]
---

## Дескрипција

Овај колбек је позван када играч напусти tune shop, било да боја јесте или није промењена.
Име је двосмислено, Pay'n'Spraу куповине позивају овај колбек.

| Име       | Дескрипција                                  |
| --------- | -------------------------------------------- |
| playerid  | ID возача			                   |
| vehicleid | ID возила које је обојено                    |
| color1    | Примарна промењена боја			   |
| color2    | Секундарна промењена боја		           |

## Return

Увек је позван прво у гејм моду (gamemode) тако да ће овде return 0 блокирати остале скрипте да га виде.

## Примери

```c
public OnVehicleRespray(playerid, vehicleid, color1, color2)
{
    new string[48];
    format(string, sizeof(string), "Обојио си возило %d у боју %d и %d!", vehicleid, color1, color2);
    SendClientMessage(playerid, COLOR_GREEN, string);
    return 1;
}
```

## Белешке

:::tip

Овај колбек није позван од стране `ChangeVehicleColor`. Заваравајући, овај колбек није позван за Pay'n'Spraу.

Решење: http://pastebin.com/G81da7N1

:::

:::warning

Познати багови: преглед компоненте унутар тјун shopa може позвати овај колбек.

:::

## Сличне Функције

- [ChangeVehicleColor](../functions/ChangeVehicleColor.md): Постави боју возила.
- [ChangeVehiclePaintjob](../functions/ChangeVehiclePaintjob.md): Промени paintjob возила.
- [OnVehiclePaintjob](OnVehiclePaintjob.md): Позвано када се paintjob возила промени.
- [OnVehicleMod](OnVehicleMod.md): Позвано када се возило тјунује.
- [OnEnterExitModShop](OnEnterExitModShop.md): Позвано када играч изађе или уђе у тјун shop.
