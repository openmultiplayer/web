---
title: SetPlayerWantedLevel
sidebar_label: SetPlayerWantedLevel
description: سطح تحت تعقیب پلیر رو تنظیم می‌کنه (6 ستاره قهوه‌ای زیر HUD).
tags: ["player"]
---

## توضیحات

سطح تحت تعقیب پلیر رو تنظیم می‌کنه (6 ستاره قهوه‌ای زیر HUD).

| نام      | توضیحات                                         |
| -------- | ----------------------------------------------- |
| playerid | آیدی پلیری که قراره سطح تحت تعقیبش تنظیم بشه      |
| level    | سطح تحت تعقیب که قراره برای پلیر تنظیم بشه (0-6) |

## مقادیر بازگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع نتونست اجرا بشه. پلیر مشخص شده وجود نداره.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/turnuptheheat", true) == 0)
    {
        SetPlayerWantedLevel(playerid, 6);
        SendClientMessage(playerid, 0xFF0000FF, "Wanted Level: 6");
        return 1;
    }
    return 0;
}
```

## توابع مرتبط

- [GetPlayerWantedLevel](GetPlayerWantedLevel): سطح تحت تعقیب پلیر رو چک می‌کنه.
- [PlayCrimeReportForPlayer](PlayCrimeReportForPlayer): یک crime report برای پلیر پخش می‌کنه.