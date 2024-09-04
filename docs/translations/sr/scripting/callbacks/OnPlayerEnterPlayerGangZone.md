---
title: OnPlayerEnterPlayerGangZone
description: Ова функција се позива када играч уђе у генгзону играча.
tags: ["player", "gangzone"]
---

<VersionWarnSR name='повратна функција' version='omp v1.1.0.2612' />

## Опис

Ова функција се позива када играч уђе у генгзону играча.

| Име      | Опис                                                   |
| -------- | ------------------------------------------------------ |
| playerid | ID играча који је ушао у генгзону играча.              |
| zoneid   | ID гангzone играча у коју је играч ушао.               |

## Враћа

Увек се позива прва у гамемод-у.

## Пример

```c
public OnPlayerEnterPlayerGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "You are entering player gangzone %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Повезане повратне функције

Следеће повратне функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [OnPlayerLeavePlayerGangZone](OnPlayerLeavePlayerGangZone): Ова функција се позива када играч изађе из генгзоне играча.

## Повезане функције

Следеће функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [CreatePlayerGangZone](../functions/CreatePlayerGangZone): Креира играчеву генгзону.
- [PlayerGangZoneDestroy](../functions/PlayerGangZoneDestroy): Уништи играчеву генгзону.
- [UsePlayerGangZoneCheck](../functions/UsePlayerGangZoneCheck): Омогућава функцију када играч уђе у ову зону.