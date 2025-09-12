---
title: SetVehicleAngularVelocity
sidebar_label: SetVehicleAngularVelocity
description: سرعت زاویه‌ای X، Y و Z یه ماشین رو تنظیم می‌کنه.
tags: ["vehicle"]
---

:::info

این تابع در _world_ space کار می‌کنه نه _local_ space. اگه می‌خوای تنظیمات سرعت زاویه‌ای local space انجام بدی، باید یه rotation matrix بر اساس [vehicle rotation quat](GetVehicleRotationQuat) اعمال کنی.

:::

## توضیحات

سرعت زاویه‌ای X، Y و Z یه ماشین رو تنظیم می‌کنه

| نام       | توضیحات                                         |
| --------- | --------------------------------------------------- |
| vehicleid | ID ماشینی که می‌خوای سرعتش رو تنظیم کنی.       |
| Float:x   | میزان سرعت در جهت زاویه‌ای X.  |
| Float:y   | میزان سرعت در جهت زاویه‌ای Y.  |
| Float:z   | میزان سرعت در جهت زاویه‌ای Z.  |

## مقدار برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا ناکام بود. ماشین وجود نداره.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/spin", cmdtext))
    {
        if (IsPlayerInAnyVehicle(playerid))
        {
            SetVehicleAngularVelocity(GetPlayerVehicleID(playerid), 0.0, 0.0, 2.0);
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

- [SetVehicleVelocity](SetVehicleVelocity): سرعت یه ماشین رو تنظیم می‌کنه.
- [GetVehicleVelocity](GetVehicleVelocity): سرعت یه ماشین رو دریافت می‌کنه.