---
title: OnPlayerClickGangZone
description: Ова повратна функција се позива када играч кликне на гангзону на мапи у паузном менију (десним кликом).
tags: ["player", "gangzone"]
---

<VersionWarn name='callback' version='omp v1.1.0.2612' />

## Опис

Ова повратна функција се позива када играч кликне на гангзону на мапи у паузном менију (десним кликом).

| Име      | Опис                                                       |
| -------- | ---------------------------------------------------------- |
| playerid | ID играча који је кликнуо на гангзону.                     |
| zoneid   | ID ганг зоне на коју је играч кликнуо.                     |

## Враћа

Ова повратна функција не враћа ништа.

Увек се позива прва у гамемод-у.

## Примери

```c
public OnPlayerClickGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "You are click gangzone %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Повезане функције

Следеће функције могу бити корисне, јер су на неки начин повезане са овом повратном функцијом.

- [GangZoneCreate](../functions/GangZoneCreate): Креирајте гангзону (обојену област на радару).
- [GangZoneDestroy](../functions/GangZoneDestroy): Уништите гангзону.