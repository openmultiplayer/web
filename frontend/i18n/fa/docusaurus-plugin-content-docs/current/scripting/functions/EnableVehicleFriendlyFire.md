---
title: EnableVehicleFriendlyFire
sidebar_label: EnableVehicleFriendlyFire
description: آتش دوستانه را برای خودروهای تیمی فعال می‌کند.
tags: ["vehicle"]
---

## توضیحات

آتش دوستانه را برای خودروهای تیمی فعال می‌کند. بازیکنان قادر به آسیب زدن به خودروهای هم‌تیمی‌هایشان نخواهند بود (باید از SetPlayerTeam استفاده شود!).

## مثال‌ها

```c
public OnGameModeInit()
{
    EnableVehicleFriendlyFire();
    return 1;
}
```

## توابع مرتبط

- [SetPlayerTeam](SetPlayerTeam): تنظیم تیم بازیکن.