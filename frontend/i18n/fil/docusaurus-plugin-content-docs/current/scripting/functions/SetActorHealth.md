---
title: SetActorHealth
sidebar_label: SetActorHealth
description: I-set ang health ng isang actor.
tags: []
---

<VersionWarn version='SA-MP 0.3.7' />

## Description

I-set ang health ng isang actor.

| Name         | Description                               |
| ------------ | ----------------------------------------- |
| actorid      | Ang ID ng aktor na i-seset ang health     |
| Float:health | Ang value na i-seset ang health ng aktor. |

## Returns

1 - tagumpay

0 - pagkabigo (ibig sabihin, hindi nilikha ang aktor).

## Examples

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Actor bilang salesperson sa Ammunation
    SetActorHealth(gMyActor, 100);
    return 1;
}
```

## Related Functions