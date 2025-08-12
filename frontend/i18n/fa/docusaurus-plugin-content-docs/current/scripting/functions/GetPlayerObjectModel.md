---
title: GetPlayerObjectModel
sidebar_label: GetPlayerObjectModel
description: دریافت ID مدل یک player-object.
tags: ["player", "object", "playerobject"]
---

<VersionWarn version='SA-MP 0.3.7' />

## توضیحات

دریافت ID مدل یک player-object.

| نام     | توضیحات                                                   |
| -------- | ------------------------------------------------------------- |
| playerid | ID بازیکنی که می‌خواهید مدل player-objectش را دریافت کنید  |
| objectid | ID player-object برای دریافت ID مدلش |

## مقادیر برگشتی

ID مدل player object.

اگر بازیکن یا object وجود نداشته باشند، **-1** یا **0** برمی‌گرداند.

## مثال‌ها

```c
public OnPlayerConnect(playerid)
{
    new objectid = CreatePlayerObject(playerid, 19609, 666.57239, 1750.79749, 4.95627,   0.00000, 0.00000, -156.00000);

    new modelid = GetPlayerObjectModel(playerid, objectid);
    printf("Object model: %d", modelid); // Output: "Object model: 19609"
    return 1;
}
```

## توابع مرتبط

- [GetObjectModel](GetObjectModel): دریافت ID مدل یک object.