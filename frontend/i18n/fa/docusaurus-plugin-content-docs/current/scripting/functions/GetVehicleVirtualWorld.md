---
title: GetVehicleVirtualWorld
sidebar_label: GetVehicleVirtualWorld
description: دنیای مجازی یه وسیله نقلیه رو دریافت می‌کنه.
tags: ["vehicle"]
---

## توضیحات

دنیای مجازی یه وسیله نقلیه رو دریافت می‌کنه.

| نام       | توضیحات                                                        |
| --------- | -------------------------------------------------------------- |
| vehicleid | ID وسیله نقلیه‌ای که می‌خوای دنیای مجازیش رو دریافت کنی.       |

## مقادیر برگشتی

دنیای مجازی‌ای که وسیله نقلیه توش قرار داره.

## مثال‌ها

```c
new
	vehicleWorld = GetVehicleVirtualWorld(vehicleid);
SetPlayerVirtualWorld(playerid, vehicleWorld);
```

## توابع مرتبط

- [SetVehicleVirtualWorld](SetVehicleVirtualWorld): تنظیم دنیای مجازی یه وسیله نقلیه.
- [GetPlayerVirtualWorld](GetPlayerVirtualWorld): چک کردن اینکه بازیکن در کدوم دنیای مجازی هست.