---
title: OnPlayerEnterGangZone
sidebar_label: OnPlayerEnterGangZone
description: Ова функција се позива када играч уђе у гангзону.
tags: ["player", "gangzone"]
---

<VersionWarnSR name='повратна функција' version='omp v1.1.0.2612' />

## Опис

Ова функција се позива када играч уђе у гангзону.

| Име      | Опис                                            |
| -------- | ----------------------------------------------- |
| playerid | ID играча који је ушао у генгзону.              |
| zoneid   | ID генгзоне у коју је играч ушао.               |

## Враћа

Увек се позива прва у гамемод-у.

## Пример

```c
public OnPlayerEnterGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "You are entering gangzone %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Повезане повратне функције

Следеће повратне функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [OnPlayerLeaveGangZone](OnPlayerLeaveGangZone): Ова повратна функција се позива када играч изађе из генгзоне.

## Повезане функције

Следеће функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [GangZoneCreate](../functions/GangZoneCreate): Креирај генгзону (обојену област на радару).
- [GangZoneDestroy](../functions/GangZoneDestroy): Уништи генгзону.
- [UseGangZoneCheck](../functions/UseGangZoneCheck): Омогући функцију када играч уђе у ову зону.