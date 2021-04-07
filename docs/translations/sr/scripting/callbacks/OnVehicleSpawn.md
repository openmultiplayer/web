---
title: OnVehicleSpawn
description: Овај колбек (callback) је позван када се возило поново створи (respawn).
tags: ["vehicle"]
---

:::warning

Овај колбек (callback) је позван **само** када се возило поново створи (respawn)!
CreateVehicle & AddStaticVehicle(Ex) **неће** покретати овај колбек (callback).

:::

## Дескрипција

Овај колбек (callback) је позван када се возило поново створи (respawn).

| Име       | Дескрипција                            |
| --------- | -------------------------------------- |
| vehicleid | ID возила које се створило (spawn).    |

## Return

1 - Спречиће се да остале филтерскрипте примају овај колбек (callback).

0 - Указује да ће овај колбек (callback) бити прослеђен до наредне филтерскрипте.

Увек је позван прво у филтерскриптама.

## Примери

```c
public OnVehicleSpawn(vehicleid)
{
    printf("Возило %i се створило!",vehicleid);
    return 1;
}
```

## Сличне Функције

- [SetVehicleToRespawn](../functions/SetVehicleToRespawn.md): Поново створи возило 
- [CreateVehicle](../functions/CreateVehicle.md): Креирај возило
