---
title: OnPlayerLeavePlayerGangZone
sidebar_label: OnPlayerLeavePlayerGangZone
description: Ова повратна функција се позива када играч напусти играчеву гангзону.
tags: ["player", "gangzone"]
---

<VersionWarnSR version='omp v1.1.0.2612' />

## Опис

Ова повратна функција се позива када играч напусти играчеву гангзону.

| Име      | Опис                                                  |
| -------- | ----------------------------------------------------- |
| playerid | ID играча који је напустио гангзону играча.           |
| zoneid   | ID гангзоне играча коју је играч напустио.            |

## Враћа

Увек се позива прва у гамемод-у.

## Пример

```c
public OnPlayerLeavePlayerGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "You are leaving player gangzone %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Повезане повратне функције

Следеће повратне функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [OnPlayerEnterPlayerGangZone](OnPlayerEnterPlayerGangZone): Ова повратна ункција се позива када играч напусти гангзону играча. 

## Повезане функције

Следеће функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [CreatePlayerGangZone](../functions/CreatePlayerGangZone): Креирајте гангзону играча.
- [PlayerGangZoneDestroy](../functions/PlayerGangZoneDestroy):Уништите гангзону играча.
- [UsePlayerGangZoneCheck](../functions/UsePlayerGangZoneCheck): Омогућите повратни позив када играч напусти ову зону.