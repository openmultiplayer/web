---
title: SetVehicleVirtualWorld
sidebar_label: SetVehicleVirtualWorld
description: 'virtual world' یه ماشین رو تنظیم می‌کنه.
tags: ["vehicle"]
---

## توضیحات

'virtual world' یه ماشین رو تنظیم می‌کنه. پلیرها فقط می‌تونن ماشین‌هایی رو ببینن که در virtual world خودشون هستن.

| نام          | توضیحات                                        |
| ------------ | -------------------------------------------------- |
| vehicleid    | ID ماشینی که می‌خوای virtual world اش رو تنظیم کنی.     |
| virtualWorld | ID virtual world ای که می‌خوای ماشین رو توش قرار بدی. |

## مقدار برگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
SetVehicleVirtualWorld(GetPlayerVehicleID(playerid), 10);
SetPlayerVirtualWorld(playerid, 10);
```

## توابع مرتبط

- [GetVehicleVirtualWorld](GetVehicleVirtualWorld): بررسی می‌کنه که ماشین در کدوم virtual world هست.
- [SetPlayerVirtualWorld](SetPlayerVirtualWorld): virtual world یه پلیر رو تنظیم می‌کنه.