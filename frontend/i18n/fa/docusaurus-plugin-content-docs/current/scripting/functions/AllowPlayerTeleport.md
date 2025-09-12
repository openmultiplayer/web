---
title: AllowPlayerTeleport
sidebar_label: AllowPlayerTeleport
description: فعال/غیرفعال کردن قابلیت تله‌پورت برای بازیکن با کلیک راست روی نقشه.
tags: ["player"]
---

:::warning

این تابع از نسخه 0.3d منسوخ شده است. [OnPlayerClickMap](../callbacks/OnPlayerClickMap) را ببینید.

:::

## توضیحات

فعال/غیرفعال کردن قابلیت تله‌پورت برای بازیکن با کلیک راست روی نقشه

| نام        | توضیحات                                      |
| ---------- | -------------------------------------------- |
| playerid   | شناسه بازیکن برای اجازه دادن به تله‌پورت.     |
| bool:allow | 'false' برای منع کردن و 'true' برای اجازه دادن. |

## مقدار بازگشتی

این تابع هیچ مقدار خاصی برنمی‌گرداند.

## مثال‌ها

```c
public OnPlayerConnect(playerid)
{
    // به بازیکن اجازه تله‌پورت با کلیک راست روی نقشه را می‌دهد
    // از آنجا که در OnPlayerConnect است، این برای هر بازیکن انجام می‌شود
    AllowPlayerTeleport(playerid, true);
    return 1;
}
```

## نکات

:::warning

این تابع فقط در صورتی کار می‌کند که [AllowAdminTeleport](AllowAdminTeleport) فعال باشد و شما باید ادمین باشید.

:::

## توابع مرتبط

- [IsPlayerTeleportAllowed](IsPlayerTeleportAllowed): آیا این بازیکن می‌تواند با کلیک راست روی نقشه تله‌پورت کند؟
- [AllowAdminTeleport](AllowAdminTeleport): فعال/غیرفعال کردن تله‌پورت waypoint برای ادمین‌های RCON.