---
title: DisableInteriorEnterExits
sidebar_label: DisableInteriorEnterExits
description: همه ورودی‌ها و خروجی‌های داخلی در بازی را غیرفعال می‌کند (پیکان‌های زرد کنار درها).
tags: ["interior"]
---

## توضیحات

همه ورودی‌ها و خروجی‌های داخلی در بازی را غیرفعال می‌کند (پیکان‌های زرد کنار درها).

## مثال‌ها

```c
public OnGameModeInit()
{
    DisableInteriorEnterExits();
    return 1;
}
```

## نکات

:::warning

این تابع فقط در صورتی کار خواهد کرد که قبل از اتصال بازیکن استفاده شود (توصیه می‌شود در [OnGameModeInit](../callbacks/OnGameModeInit) استفاده شود). نشانگرهای بازیکن متصل را حذف نخواهد کرد.

اگر gamemode بعد از استفاده از این تابع تغییر کند و gamemode جدید نشانگرها را غیرفعال نکند، نشانگرها برای بازیکنان از قبل متصل دوباره ظاهر نخواهند شد (اما برای بازیکنان تازه متصل ظاهر خواهند شد).

:::

:::tip

همچنین می‌توانید نشانگرهای ورودی داخلی را از طریق [config.json](../../server/config.json) غیرفعال کنید

```json
"use_entry_exit_markers": false,
```

:::

## توابع مرتبط

- [AllowInteriorWeapons](AllowInteriorWeapons): تعیین اینکه آیا سلاح‌ها در داخل ساختمان‌ها قابل استفاده باشند یا نه.