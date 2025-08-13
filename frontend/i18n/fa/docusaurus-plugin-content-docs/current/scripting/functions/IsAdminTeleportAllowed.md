---
title: IsAdminTeleportAllowed
sidebar_label: IsAdminTeleportAllowed
description: چک می‌کنه که آیا ادمین‌های RCON اجازه teleport با کلیک راست روی نقشه رو دارن یا نه.
tags: []
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چک می‌کنه که آیا ادمین‌های RCON اجازه teleport با کلیک راست روی نقشه رو دارن یا نه.

## مقادیر برگشتی

true: مجازه.

false: مجاز نیست.

## مثال‌ها

```c
if (IsAdminTeleportAllowed())
{
    // Do something
}
```

## توابع مرتبط

- [AllowAdminTeleport](AllowAdminTeleport): تعیین اینکه آیا ادمین‌های RCON وقتی waypoint تنظیم می‌کنن teleport بشن یا نه.
- [AllowPlayerTeleport](AllowPlayerTeleport): فعال/غیرفعال کردن waypoint teleport برای بازیکنان.
- [IsPlayerAdmin](IsPlayerAdmin): چک می‌کنه که آیا بازیکن به RCON وارد شده یا نه.