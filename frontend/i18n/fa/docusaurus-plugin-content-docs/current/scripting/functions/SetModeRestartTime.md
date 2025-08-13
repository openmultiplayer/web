---
title: SetModeRestartTime
sidebar_label: SetModeRestartTime
description: تاخیر بین بارگیری اسکریپت‌های اصلی را بر حسب ثانیه تنظیم کنید.
tags: []
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

تاخیر بین بارگیری اسکریپت‌های اصلی را بر حسب ثانیه تنظیم کنید.

## پارامترها

| نام          | توضیحات         |
|---------------|---------------------|
| Float:seconds | ثانیه برای راه‌اندازی مجدد. |

## مقادیر بازگشتی

1 - تابع با موفقیت اجرا شد.

0 - تابع در اجرا ناکام بود. این به معنی آن است که ثانیه‌های مشخص شده نباید کمتر از 1 باشد.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/restart", true))
    {
        if (!IsPlayerAdmin(playerid))
        {
            return 1;
        }

        SetModeRestartTime(5.0);
        SendClientMessage(playerid, -1, "[SERVER]: The server will restart in 5 seconds.");
        return 1;
    }
    return 0;
}
```

## نکته‌ها

:::warning

پارامتر `seconds` یک float است.

:::

## توابع مرتبط

- [GetModeRestartTime](GetModeRestartTime): تاخیر بین بارگیری اسکریپت‌های اصلی را بر حسب ثانیه دریافت کنید.
- [GameModeExit](GameModeExit): gamemode فعلی را پایان دهید.