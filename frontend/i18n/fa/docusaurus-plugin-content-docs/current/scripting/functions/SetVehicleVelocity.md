---
title: SetVehicleVelocity
sidebar_label: SetVehicleVelocity
description: سرعت X، Y و Z یه ماشین رو تنظیم می‌کنه.
tags: ["vehicle"]
---

## توضیحات

سرعت X، Y و Z یه ماشین رو تنظیم می‌کنه.

| نام       | توضیحات                                   |
| --------- | --------------------------------------------- |
| vehicleid | ID ماشینی که می‌خوای سرعتش رو تنظیم کنی. |
| Float:x   | سرعت در جهت X.              |
| Float:y   | سرعت در جهت Y.              |
| Float:z   | سرعت در جهت Z.              |

## مقدار برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا ناکام بود. ماشین وجود نداره.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/jump", cmdtext))
    {
        if (IsPlayerInAnyVehicle(playerid))
        {
            SetVehicleVelocity(GetPlayerVehicleID(playerid), 0.0, 0.0, 0.2);
        }
        return 1;
    }
}
```

## نکات

:::warning

این تابع روی ماشین‌های خالی تأثیری نداره و روی قطارها تأثیر نمی‌ذاره.

:::

## توابع مرتبط

- [GetVehicleVelocity](GetVehicleVelocity): سرعت یه ماشین رو در محورهای X، Y و Z دریافت می‌کنه.