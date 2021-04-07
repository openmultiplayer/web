---
title: OnVehicleMod
description: Овај колбек се позива када се возило тјунује (tune car).
tags: ["vehicle"]
---

## Дескрипција

Овај колбек се позива када се возило тјунује (tune car).

| Име         | Дескрипција                             |
| ----------- | --------------------------------------- |
| playerid    | ID возача возила.                       |
| vehicleid   | ID возила које је тјуновано.	        |
| componentid | ID компоненте која је додата на возило. |

## Return

Увек је позван прво у гејм моду (gamemode) тако да ће return 0 овде блокирати остале скрипте да га виде.

## Примери

```c
public OnVehicleMod(playerid,vehicleid,componentid)
{
    printf("Возило %d је тјуновано од играча са IDем %d са компонентом %d",vehicleid, playerid,componentid);
    if (GetPlayerInterior(playerid) == 0)
    {
        BanEx(playerid, "Tuning Hacks"); // Античит за тјунинг
        return 0; // Спречава синхронизацију лоше модификације са другим играчима.      
    }
    return 1;
}
```

## Белешке

:::tip

Овај колбек неће бити позван од стране `AddVehicleComponent`.

:::

## Сличне Функције

- [AddVehicleComponent](../functions/AddVehicleComponent.md): Додаје компоненту на возило.
- [OnEnterExitModShop](OnEnterExitModShop.md): Позива се када играч изађе или уђе у tune shop.
- [OnVehiclePaintjob](OnVehiclePaintjob.md): Позива се када се paintjob возила промени.
- [OnVehicleRespray](OnVehicleRespray.md): Позива секада се возило respray-а (поново обоји).
