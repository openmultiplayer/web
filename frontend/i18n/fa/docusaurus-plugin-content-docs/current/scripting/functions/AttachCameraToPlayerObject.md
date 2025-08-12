---
title: AttachCameraToPlayerObject
sidebar_label: AttachCameraToPlayerObject
description: دوربین یک بازیکن را به یک شی‌ء بازیکن متصل می‌کند.
tags: ["player", "camera"]
---

## توضیحات

دوربین یک بازیکن را به یک شی‌ء بازیکن متصل می‌کند. بازیکن قادر است دوربین خود را حین اتصال به شی‌ء حرکت دهد. می‌تواند با MovePlayerObject و AttachPlayerObjectToVehicle استفاده شود.

| نام            | توضیحات                                                                           |
| -------------- | ------------------------------------------------------------------------------ |
| playerid       | شناسه بازیکنی که دوربینش به شی‌ء بازیکن متصل می‌شود.                             |
| playerobjectid | شناسه شی‌ء بازیکنی که دوربین بازیکن به آن متصل می‌شود.                          |

## مقادیر بازگشتی

این تابع هیچ مقدار خاصی برنمی‌گرداند.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/attach", false))
    {
        new playerobject = CreatePlayerObject(playerid, 1245, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0);
        AttachCameraToPlayerObject(playerid, playerobject);
        SendClientMessage(playerid, 0xFFFFFFAA, "Your camera is now attached to an object.");
        return 1;
    }
    return 0;
}
```

## نکات

:::tip

شی‌ء بازیکن باید قبل از تلاش برای اتصال دوربین بازیکن به آن ایجاد شود.

:::

## توابع مرتبط

- [AttachCameraToObject](AttachCameraToObject): دوربین بازیکن را به یک شی‌ء سراسری متصل می‌کند.
- [SetPlayerCameraPos](SetPlayerCameraPos): موقعیت دوربین بازیکن را تنظیم می‌کند.
- [SetPlayerCameraLookAt](SetPlayerCameraLookAt): تعیین می‌کند که دوربین بازیکن به کجا نگاه کند.
