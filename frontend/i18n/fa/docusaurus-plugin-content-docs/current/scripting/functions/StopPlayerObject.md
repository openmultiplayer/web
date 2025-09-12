---
title: StopPlayerObject
sidebar_label: StopPlayerObject
description: یک شیء بازیکن در حال حرکت را پس از استفاده از MovePlayerObject متوقف می‌کند.
tags: ["player"]
---

## توضیحات

یک شیء بازیکن در حال حرکت را پس از استفاده از MovePlayerObject متوقف می‌کند.

| نام      | توضیحات                                                  |
| -------- | ------------------------------------------------------- |
| playerid | شناسه بازیکنی که شیء او باید متوقف شود.              |
| objectid | شناسه شیء بازیکن که باید متوقف شود.                    |

## مقادیر بازگشتی

این تابع هیچ مقدار خاصی بازنمی‌گرداند.

## مثال‌ها

```c
new gPlayerObject[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);

    MovePlayerObject(playerid, gPlayerObject[playerid], 2001.195679, 1547.113892, 10.000000, 2.0);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/stopobject", true) == 0)
    {
        StopPlayerObject(playerid, gPlayerObject[playerid]);
        return 1;
    }
    return 0;
}
```

## توابع مرتبط

- [MovePlayerObject](MovePlayerObject): یک شیء بازیکن را حرکت می‌دهد.
- [CreatePlayerObject](CreatePlayerObject): یک شیء فقط برای یک بازیکن ایجاد می‌کند.
- [DestroyPlayerObject](DestroyPlayerObject): یک شیء بازیکن را نابود می‌کند.
- [IsValidPlayerObject](IsValidPlayerObject): بررسی می‌کند که آیا شیء بازیکن مشخصی معتبر است.
- [IsPlayerObjectMoving](IsPlayerObjectMoving): بررسی می‌کند که آیا شیء بازیکن در حال حرکت است.
- [SetPlayerObjectPos](SetPlayerObjectPos): موقعیت یک شیء بازیکن را تنظیم می‌کند.
- [SetPlayerObjectRot](SetPlayerObjectRot): چرخش یک شیء بازیکن را تنظیم می‌کند.
- [GetPlayerObjectPos](GetPlayerObjectPos): موقعیت یک شیء بازیکن را پیدا می‌کند.
- [GetPlayerObjectRot](GetPlayerObjectRot): چرخش یک شیء بازیکن را بررسی می‌کند.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): یک شیء بازیکن را به بازیکن متصل می‌کند.
- [CreateObject](CreateObject): یک شیء ایجاد می‌کند.
- [DestroyObject](DestroyObject): یک شیء را نابود می‌کند.
- [IsValidObject](IsValidObject): بررسی می‌کند که آیا شیء مشخصی معتبر است.
- [MoveObject](MoveObject): یک شیء را حرکت می‌دهد.
- [IsObjectMoving](IsObjectMoving): بررسی می‌کند که آیا شیء در حال حرکت است.
- [StopObject](StopObject): حرکت یک شیء را متوقف می‌کند.
- [SetObjectPos](SetObjectPos): موقعیت یک شیء را تنظیم می‌کند.
- [SetObjectRot](SetObjectRot): چرخش یک شیء را تنظیم می‌کند.
- [GetObjectPos](GetObjectPos): موقعیت یک شیء را پیدا می‌کند.
- [GetObjectRot](GetObjectRot): چرخش یک شیء را بررسی می‌کند.
- [AttachObjectToPlayer](AttachObjectToPlayer): یک شیء را به بازیکن متصل می‌کند.