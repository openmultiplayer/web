---
title: OnPlayerExitVehicle
sidebar_label: OnPlayerExitVehicle
description: Ова функција се позива када играч почне да излази из возила.
tags: ["player", "vehicle"]
---

## Опис

Ова функција се позива када играч почне да излази из возила.

| Име       | Опис                                            |
| --------- | ----------------------------------------------- |
| playerid  | ID играча који излази из возила.                |
| vehicleid | ID возила из ког играч излази.                  |

## Враћа

Увек се прво позива у филтерскриптима.

## Пример

```c
public OnPlayerExitVehicle(playerid, vehicleid)
{
    new string[64];
    format(string, sizeof(string), "INFO: You are exiting vehicle %i", vehicleid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Белешке

:::warning

- Не позива се ако играч падне са бицикла или буде уклоњен из возила другим средствима као што је коришћење [SetPlayerPos](../functions/SetPlayerPos).
- Треба користити [OnPlayerStateChange](OnPlayerStateChange) и проверити да ли је њихово старо стање `PLAYER_STATE_DRIVER` или `PLAYER_STATE_PASSENGER` и њихово ново стање `PLAYER_STATE_ONFOOT`.

:::

## Related Callbacks

Следеће повратне функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [OnPlayerEnterVehicle](OnPlayerEnterVehicle): Ова функција се позива када играч почне да улази у возило. 
- [OnPlayerStateChange](OnPlayerStateChange): Ова функција се позива када играч промени стање.

## Related Functions

Следеће функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [RemovePlayerFromVehicle](../functions/RemovePlayerFromVehicle): Избаците играча из њиховог возила.
- [GetPlayerVehicleSeat](../functions/GetPlayerVehicleSeat): Проверавајте у којем седишту се играч налази.
