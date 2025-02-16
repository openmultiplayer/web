---
title: OnPlayerLeaveGangZone
description: Ова повратна функција се позива када играч напусти гангзону.
tags: ["player", "gangzone"]
---

<VersionWarnSR name='повратна функција' version='omp v1.1.0.2612' />

## Опис

Ова повратна функција се позива када играч напусти гангзону.

| Име      | Опис                                           |
| -------- | ---------------------------------------------- |
| playerid | ID играча који је напустио гангзону.           |
| zoneid   | ID гангзоне коју је играч напустио.            |

## Враћа

Увек се позива прва у гамемод-у.

## Пример

```c
public OnPlayerLeaveGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "You are leaving gangzone %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Повезане повратне функције

Следеће повратне функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [OnPlayerEnterGangZone](OnPlayerEnterGangZone): Ова повратна функција се позива када играч уђе у гангзону. 

## Повезане функције

Следеће функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [GangZoneCreate](../functions/GangZoneCreate): Креирајте гангзону (обојену подручје на радару).
- [GangZoneDestroy](../functions/GangZoneDestroy): Уништите гангзону.