---
title: GetPlayerSkillLevel
sidebar_label: GetPlayerSkillLevel
description: دریافت سطح مهارت بازیکن برای نوع اسلحه خاص.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

دریافت سطح مهارت بازیکن برای نوع اسلحه خاص.

| نام              | توضیحات                                                  |
| ----------------- | ------------------------------------------------------------ |
| playerid          | ID بازیکن.                                        |
| WEAPONSKILL:skill | [اسلحه](../resources/weaponskills) برای دریافت مهارتش. |

## مقادیر برگشتی

0 - شکست (مهارت اسلحه نامعتبر).

در غیر این صورت، سطح مهارت نوع اسلحه را برمی‌گرداند.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/skill", true))
    {
        new string[64];
        
        new skill = GetPlayerSkillLevel(playerid, WEAPONSKILL_PISTOL);

        format(string, sizeof(string), "Your pistol skill level is %d", skill);
        SendClientMessage(playerid, 0xFFFF00FF, string);
        return 1;
    }
    return 0;
}
```

## نکات

:::warning

پارامتر skill ID اسلحه نیست، بلکه نوع مهارت است. [اینجا کلیک کنید](../resources/weaponskills) برای لیست انواع مهارت.

:::

# توابع مرتبط

- [SetPlayerSkillLevel](SetPlayerSkillLevel): تنظیم سطح مهارت نوع اسلحه خاص برای بازیکن.

# اطلاعات مرتبط

- [Weapon Skills](../resources/weaponskills): لیست مهارت‌های اسلحه که برای تنظیم سطح مهارت بازیکن استفاده می‌شوند.