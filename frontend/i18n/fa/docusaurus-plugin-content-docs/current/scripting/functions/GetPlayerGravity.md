---
title: GetPlayerGravity
sidebar_label: GetPlayerGravity
description: دریافت جاذبه بازیکن.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

دریافت جاذبه بازیکن.

| نام     | توضیحات                                 |
| -------- | ------------------------------------------- |
| playerid | ID بازیکن برای دریافت جاذبه‌اش. |

## مقادیر برگشتی

جاذبه بازیکن به صورت float.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/mygravity", true))
    {
        new string[32];
        format(string, sizeof(string), "Your gravity is: %f", GetPlayerGravity(playerid));
        SendClientMessage(playerid, 0xFFFF00FF, string);
        return 1;
    }
    return 0;
}
```

## توابع مرتبط

- [SetPlayerGravity](SetPlayerGravity): تنظیم جاذبه بازیکن.
- [GetGravity](GetGravity): دریافت جاذبه عمومی فعلی.
- [SetGravity](SetGravity): تنظیم جاذبه برای همه بازیکنان.