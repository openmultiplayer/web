---
title: DestroyVehicle
description: Уништава возило.
tags: ["vehicle"]
---

## Опис

Уништава возило. Возило одмах нестаје.

| Name      | Description                 |
| --------- | --------------------------- |
| vehicleid | ID возила које се уништава. |

## Враћа

**true** - Функција је успешно извршена.

**false** - Функција није успешно извршена. Возило не постоји.

## Примери

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
     if (strcmp(cmdtext, "/destroyveh", true) == 0)
     {
          new vehicleid = GetPlayerVehicleID(playerid);
          DestroyVehicle(vehicleid);
          return 1;
     }

     return 0;
}
```

## Повезане функције

- [CreateVehicle](CreateVehicle.md): Креира возило.
- [RemovePlayerFromVehicle](RemovePlayerFromVehicle.md): Избаци играча из возила.
- [SetVehicleToRespawn](SetVehicleToRespawn.md): Respawnuje возило.
