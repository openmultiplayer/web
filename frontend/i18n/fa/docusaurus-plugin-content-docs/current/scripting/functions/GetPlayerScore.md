---
title: GetPlayerScore
sidebar_label: GetPlayerScore
description: این تابع امتیاز بازیکن را همان‌طور که با SetPlayerScore تنظیم شده برمی‌گرداند.
tags: ["player"]
---

## توضیحات

این تابع امتیاز بازیکن را همان‌طور که با SetPlayerScore تنظیم شده برمی‌گرداند

| نام     | توضیحات                     |
| -------- | ------------------------------- |
| playerid | بازیکنی که می‌خواهید امتیازش را دریافت کنید. |

## مقادیر برگشتی

امتیاز بازیکن.

## مثال‌ها

```c
public OnPlayerCommandText(playerid,text[])
{
    if (!strcmp(cmdtext, "/score", true))
    {
        new string[32];
        format(string, sizeof(string), "Your score: %i", GetPlayerScore(playerid));
        SendClientMessage(playerid, COLOR_ORANGE, string);
        return 1;
    }
    return 0;
}
```

## توابع مرتبط

- [SetPlayerScore](SetPlayerScore): تنظیم امتیاز بازیکن.
- [GetPlayerPing](GetPlayerPing): دریافت پینگ بازیکن.