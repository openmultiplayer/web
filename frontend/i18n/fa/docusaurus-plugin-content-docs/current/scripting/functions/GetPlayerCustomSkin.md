---
title: GetPlayerCustomSkin
sidebar_label: GetPlayerCustomSkin
description: کلاس اسکین سفارشی بازیکن که از سرور دانلود شده را برمی‌گرداند.
tags: ["player"]
---

<VersionWarn version='SA-MP 0.3.DL R1' />

## توضیحات

کلاس اسکین سفارشی بازیکن که از سرور دانلود شده را برمی‌گرداند.

| نام      | توضیحات                                      |
| -------- | -------------------------------------------- |
| playerid | بازیکنی که می‌خواهید اسکینش را بگیرید |

## مقدار بازگشتی

شناسه اسکین سفارشی که در [AddCharModel](AddCharModel) newid مشخص شده بود.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/customskin", true))
    {
        new string[32];
        new customSkin = GetPlayerCustomSkin(playerid);

        format(string, sizeof(string), "Your custom skin id: %d", customSkin);
        SendClientMessage(playerid, -1, string);
        return 1;
    }
    return 0;
}
```

## تابع‌های مرتبط

- [GetPlayerSkin](GetPlayerSkin): اسکین فعلی بازیکن را دریافت می‌کند.
- [SetPlayerSkin](SetPlayerSkin): اسکین بازیکن را تنظیم می‌کند.