---
title: OnPlayerStateChange
description: Ова повратна функција се позива када играч промени стање.
tags: ["player"]
---

## Опис

Ова повратна функција се позива када играч промени стање. На пример, када играч прелази из стања возача возила у стање ходања.

| Име                   | Опис                                     |
| --------------------- | ---------------------------------------- |
| playerid              | ID играча који мења стање.               |
| PLAYER_STATE:newstate | Старо стање играча.                      |
| PLAYER_STATE:oldstate | Ново стање играча.                       |

[Листа](../resources/playerstates) свих могућих стања играча.

## Враћа

Позива се прво у филтерскриптама.

## Пример

```c
public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    if (oldstate == PLAYER_STATE_ONFOOT && newstate == PLAYER_STATE_DRIVER) // Играч који управља возилом
    {
        new vehicleid = GetPlayerVehicleID(playerid);
        AddVehicleComponent(vehicleid, 1010); //Dodajte NOS на возило
    }
    return 1;
}
```

## Белешке

<TipNPCCallbacksSR />

## Повезане повратне функције

Следеће повратне функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [OnPlayerInteriorChange](OnPlayerInteriorChange): Позива се када играч промени интеријер.

## Повезане функције

Следеће функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [GetPlayerState](../functions/GetPlayerState): Враћа играчево тренутно стање.
- [GetPlayerSpecialAction](../functions/GetPlayerSpecialAction): Враћа играчеву тренутну специјалну акцију.
- [SetPlayerSpecialAction](../functions/SetPlayerSpecialAction): Поставља играчеву специјалну акцију.

## Повезани ресурси

- [Стања играча](../resources/playerstates)
