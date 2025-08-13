---
title: SetPlayerObjectMoveSpeed
sidebar_label: SetPlayerObjectMoveSpeed
description: سرعت حرکت یک player object رو تنظیم می‌کنه.
tags: ["player", "object", "playerobject"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

سرعت حرکت یک player object رو تنظیم می‌کنه.

| نام         | توضیحات                                              |
|-------------|------------------------------------------------------|
| playerid    | ID بازیکن.                                           |
| objectid    | ID player object که سرعت حرکتش باید تنظیم بشه.       |
| Float:speed | سرعتی که object باید با اون حرکت کنه (واحد در ثانیه). |

## مقدار برگشتی

`true` - تابع با موفقیت اجرا شد.

`false` - تابع در اجرا ناموفق بود. object مشخص شده وجود نداره.

## مثال‌ها

```c
new playerobjectid = CreatePlayerObject(playerid, 985, 1003.39154, -643.33423, 122.35060,   0.00000, 1.00000, 24.00000);
MovePlayerObject(playerid, playerobjectid, 1003.3915, -643.3342, 114.5122,  0.8);

SetPlayerObjectMoveSpeed(playerid, playerobjectid, 1.5);
// Move speed changed from 0.8 to 1.5
```

## توابع مرتبط

- [MovePlayerObject](MovePlayerObject): انتقال یک player object به موقعیت جدید با سرعت تعیین شده.
- [GetPlayerObjectMoveSpeed](GetPlayerObjectMoveSpeed): گرفتن سرعت حرکت یک player object.
- [SetObjectMoveSpeed](SetObjectMoveSpeed): تنظیم سرعت حرکت یک object.