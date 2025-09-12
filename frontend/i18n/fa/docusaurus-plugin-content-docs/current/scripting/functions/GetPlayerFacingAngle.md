---
title: GetPlayerFacingAngle
sidebar_label: GetPlayerFacingAngle
description: دریافت زاویه‌ای که بازیکن به آن طرف نگاه می‌کند.
tags: ["player"]
---

## توضیحات

دریافت زاویه‌ای که بازیکن به آن طرف نگاه می‌کند.

| نام         | توضیحات                                           |
| ------------ | ----------------------------------------------------- |
| playerid     | بازیکنی که می‌خواهید زاویه‌اش را دریافت کنید.              |
| &Float:angle | متغیر Float برای ذخیره زاویه، به صورت reference پاس داده می‌شود. |

## مقادیر برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا ناموفق بود. این یعنی بازیکن وجود ندارد.

زاویه بازیکن در متغیر مشخص شده ذخیره می‌شود.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/angle", true))
    {
        new string[64];

        new Float:angle;
        GetPlayerFacingAngle(playerid, angle);

        format(string, sizeof(string), "Your facing angle: %0.2f", angle);
        SendClientMessage(playerid, 0xFFFFFFFF, string);
        return 1;
    }
    return 0;
}
```

## نکات

:::tip

زاویه‌های برگشتی زمانی که در وسیله نقلیه هستید معمولاً صحیح نیستند. برای دریافت زاویه صحیح در حین بودن در وسیله نقلیه، از [GetVehicleZAngle](GetVehicleZAngle) استفاده کنید.

:::

:::warning

زاویه‌ها در GTA:SA معکوس هستند؛ 90 درجه در دنیای واقعی شرق است، اما در GTA:SA 90 درجه در واقع غرب است. شمال و جنوب هنوز هم 0/360 و 180 هستند. برای تبدیل این، به سادگی 360 - angle را انجام دهید.

:::

## توابع مرتبط

- [GetVehicleZAngle](GetVehicleZAngle): بررسی زاویه فعلی وسیله نقلیه.
- [SetPlayerFacingAngle](SetPlayerFacingAngle): تنظیم زاویه نگاه بازیکن.
- [GetPlayerRotationQuat](GetPlayerRotationQuat): دریافت چرخش quaternion بازیکن.