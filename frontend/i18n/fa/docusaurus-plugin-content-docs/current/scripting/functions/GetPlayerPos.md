---
title: GetPlayerPos
sidebar_label: GetPlayerPos
description: موقعیت بازیکن رو می‌گیره که با مختصات X، Y و Z نمایش داده میشه.
tags: ["player"]
---

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

موقعیت بازیکن رو می‌گیره که با مختصات X، Y و Z نمایش داده میشه.

| اسم     | توضیح                                                                  |
| -------- | ---------------------------------------------------------------------------- |
| playerid | شناسه بازیکنی که می‌خوای موقعیتش رو بگیری.                                 |
| &Float:x | متغیر اعشاری برای ذخیره کردن مختصات X که با reference پاس داده میشه. |
| &Float:y | متغیر اعشاری برای ذخیره کردن مختصات Y که با reference پاس داده میشه. |
| &Float:z | متغیر اعشاری برای ذخیره کردن مختصات Z که با reference پاس داده میشه. |

## مقادیر برگشتی

**true** در صورت موفقیت.

**false** در صورت شکست (مثلاً بازیکن متصل نباشه).

## مثال‌ها

</div>

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    // سه متغیر اعشاری تعریف کن تا مختصات X، Y و Z رو توشون ذخیره کنی
    new Float:x, Float:y, Float:z;

    // از GetPlayerPos استفاده کن و 3 متغیر اعشاری که ساختی رو پاس بده
    GetPlayerPos(playerid, x, y, z);

    // یک پیکاپ پول در موقعیت بازیکن بساز
    CreatePickup(1212, 4, x, y, z, -1);
   return 1;
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

## نکته‌ها

:::warning

این تابع وقتی توی [OnPlayerDisconnect](../callbacks/OnPlayerDisconnect) و OnPlayerRequestClass استفاده میشه مقادیر غیرقابل اعتمادی برمی‌گردونه. چون بازیکن spawn نشده.

:::

## تابع‌های مرتبط

- [SetPlayerPos](SetPlayerPos): تنظیم موقعیت بازیکن.
- [GetVehiclePos](GetVehiclePos): گرفتن موقعیت ماشین.
- [IsPlayerInRangeOfPoint](IsPlayerInRangeOfPoint): چک کردن اینکه بازیکن در محدوده یک نقطه هست یا نه.
- [GetPlayerDistanceFromPoint](GetPlayerDistanceFromPoint): گرفتن فاصله بین بازیکن و یک نقطه.

</div>