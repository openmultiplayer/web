---
title: GetPlayerObjectSyncRotation
sidebar_label: GetPlayerObjectSyncRotation
description: دریافت sync rotation یک player-object.
tags: ["player", "object", "playerobject"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

دریافت sync rotation یک player-object.

| نام     | توضیحات                  |
|----------|------------------------------|
| playerid | ID بازیکن.        |
| objectid | ID player-object. |

## مقادیر برگشتی

sync rotation player-object را به صورت boolean (`true`/`false`) برمی‌گرداند.

## مثال‌ها

```c
new objectid = CreatePlayerObject(...);
new parentid = CreatePlayerObject(...);
AttachPlayerObjectToObject(playerid, objectid, parentid, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, true);

new bool:syncRotation = GetPlayerObjectSyncRotation(playerid, objectid);
// syncRotation = true
```

## توابع مرتبط

- [AttachPlayerObjectToObject](AttachPlayerObjectToObject): متصل کردن player-objectها به سایر player-objectها.
- [GetObjectSyncRotation](GetObjectSyncRotation): دریافت sync rotation یک object.