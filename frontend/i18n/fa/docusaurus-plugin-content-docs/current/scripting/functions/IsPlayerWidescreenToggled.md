---
title: IsPlayerWidescreenToggled
sidebar_label: IsPlayerWidescreenToggled
description: چک می‌کنه که widescreen بازیکن روشنه یا خاموش.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چک می‌کنه که widescreen بازیکن روشنه یا خاموش.

| نام      | توضیحات                        |
|----------|---------------------------------|
| playerid | ID بازیکنی که باید چک بشه.       |

## مقادیر برگشتی

**true** - widescreen بازیکن روشنه.

**false** - widescreen بازیکن خاموشه.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/widescreencheck", true))
    {
        SendClientMessage(playerid, -1, "Wide Screen: %s", IsPlayerWidescreenToggled(playerid) ? "On" : "Off");
        return 1;
    }
    return 0;
}
```

## توابع مرتبط

- [TogglePlayerWidescreen](TogglePlayerWidescreen): تغییر وضعیت widescreen بازیکن.