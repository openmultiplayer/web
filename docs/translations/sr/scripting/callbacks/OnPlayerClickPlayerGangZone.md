---
title: OnPlayerClickPlayerGangZone
description: Ова повратна функција се позива када играч кликне на гангзону играча на паузном менију карте (десним кликом).
tags: ["player", "gangzone"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Опис

Ова повратна функција се позива када играч кликне на гангзону играча на паузном менију карте (десним кликом).

| Име     | Опис                                                     |
| -------- | ------------------------------------------------------- |
| playerid | ID играча који је кликнуо на гангзону играча.           |
| zoneid   | ID гангзоне играча на коју је играч кликнуо.            |

## Враћа

Ова повратна функција не враћа ништа.

Увек се позива прва у гамемоде-у.

## Пример

```c
public OnPlayerClickPlayerGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "You are click player gangzone %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Повезане функције

Следеће функције могу бити корисне, јер су на неки начин повезане са овом повратном функцијом.

- [CreatePlayerGangZone](../functions/CreatePlayerGangZone): Направите гангзону играча.
- [PlayerGangZoneDestroy](../functions/PlayerGangZoneDestroy): Уништите гангзону играча.