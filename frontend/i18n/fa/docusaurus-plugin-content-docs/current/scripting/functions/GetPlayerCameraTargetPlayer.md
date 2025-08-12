---
title: GetPlayerCameraTargetPlayer
sidebar_label: GetPlayerCameraTargetPlayer
description: اجازه می‌دهد شناسه بازیکنی که playerid به آن نگاه می‌کند را دریافت کنید.
tags: ["player", "camera"]
---

<VersionWarn version='SA-MP 0.3.7' />

## توضیحات

اجازه می‌دهد شناسه بازیکنی که playerid به آن نگاه می‌کند را دریافت کنید.

| نام      | توضیحات                   |
| -------- | ----------------------------- |
| playerid | شناسه بازیکنی که بررسی می‌شود |

## مقدار بازگشتی

شناسه بازیکنی که playerid به آن نگاه می‌کند

## مثال‌ها

```c
new playerTarget = GetPlayerCameraTargetPlayer(playerid);

if (IsPlayerAdmin(playerTarget))
{
    GameTextForPlayer(playerid, "Looking at an admin", 3000, 3);
}
```

## نکات

:::warning

این تابع را با GetPlayerTargetPlayer اشتباه نگیرید. GetPlayerTargetPlayer شناسه بازیکنی که playerid با سلاح به آن نشانه‌گیری می‌کند را برمی‌گرداند. GetPlayerCameraTargetPlayer شناسه بازیکنی که playerid به آن نگاه می‌کند (نقطه مرجع مرکز صفحه است) را برمی‌گرداند.

:::

## تابع‌های مرتبط

- [GetPlayerCameraTargetActor](GetPlayerCameraTargetActor): شناسه اکتوری (اگر وجود داشته باشد) که بازیکن به آن نگاه می‌کند را دریافت کنید.
- [GetPlayerCameraTargetVehicle](GetPlayerCameraTargetVehicle): شناسه وسیله نقلیه‌ای که بازیکن به آن نگاه می‌کند را دریافت کنید.
- [GetPlayerCameraTargetObject](GetplayerCameraTargetObject): شناسه آبجکتی که بازیکن به آن نگاه می‌کند را دریافت کنید.
- [GetPlayerCameraFrontVector](GetPlayercameraFrontVector): بردار جلویی دوربین بازیکن را دریافت کنید