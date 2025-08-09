---
title: AllowAdminTeleport
sidebar_label: AllowAdminTeleport
description: این تابع تعیین می‌کند که آیا ادمین‌های RCON هنگام تنظیم waypoint به آن تله‌پورت خواهند شد یا خیر.
tags: []
---

:::warning

این تابع از نسخه 0.3d منسوخ شده است. لطفاً [OnPlayerClickMap](../callbacks/OnPlayerClickMap) را ببینید.

:::

## توضیحات

این تابع تعیین می‌کند که آیا ادمین‌های RCON هنگام تنظیم waypoint به آن تله‌پورت خواهند شد یا خیر.

| نام        | توضیحات                                      |
| ---------- | -------------------------------------------- |
| bool:allow | 'false' برای غیرفعال کردن و 'true' برای فعال کردن. |

## مقدار بازگشتی

این تابع هیچ مقدار خاصی برنمی‌گرداند.

## مثال‌ها

```c
public OnGameModeInit()
{
    AllowAdminTeleport(true);
    // سایر موارد
    return 1;
}
```

## توابع مرتبط

- [IsAdminTeleportAllowed](IsAdminTeleportAllowed): بررسی اینکه آیا ادمین‌های RCON مجاز به تله‌پورت با کلیک راست روی نقشه هستند یا خیر.
- [IsPlayerAdmin](IsPlayerAdmin): بررسی اینکه آیا بازیکن به RCON وارد شده است یا خیر.
- [AllowPlayerTeleport](AllowPlayerTeleport): فعال/غیرفعال کردن تله‌پورت waypoint برای بازیکنان.