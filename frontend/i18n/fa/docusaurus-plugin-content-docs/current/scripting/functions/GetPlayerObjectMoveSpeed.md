---
title: GetPlayerObjectMoveSpeed
sidebar_label: GetPlayerObjectMoveSpeed
description: دریافت سرعت حرکت یک player-object.
tags: ["player", "object", "playerobject"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

دریافت سرعت حرکت یک player-object.

| نام     | توضیحات                                           |
|----------|-------------------------------------------------------|
| playerid | ID بازیکن.                                 |
| objectid | ID player-object برای دریافت سرعت حرکتش. |

## مقادیر برگشتی

سرعت حرکت را به صورت float برمی‌گرداند.

## مثال‌ها

```c
new playerobjectid = CreatePlayerObject(playerid, 985, 1003.39154, -643.33423, 122.35060,   0.00000, 1.00000, 24.00000);
MovePlayerObject(playerid, playerobjectid, 1003.3915, -643.3342, 114.5122,  0.8);

new Float:moveSpeed = GetPlayerObjectMoveSpeed(playerid, playerobjectid);
// moveSpeed = 0.8
```

## توابع مرتبط

- [MovePlayerObject](MovePlayerObject): حرکت دادن player object به موقعیت جدید با سرعت مشخص.
- [SetPlayerObjectMoveSpeed](SetPlayerObjectMoveSpeed): تنظیم سرعت حرکت یک player-object.
- [GetObjectMoveSpeed](GetObjectMoveSpeed): دریافت سرعت حرکت یک object.