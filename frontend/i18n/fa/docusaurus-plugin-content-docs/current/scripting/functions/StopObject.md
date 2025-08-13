---
title: StopObject
sidebar_label: StopObject
description: یک شیء در حال حرکت را پس از استفاده از MoveObject متوقف می‌کند.
tags: ["object"]
---

## توضیحات

یک شیء در حال حرکت را پس از استفاده از [MoveObject](MoveObject) متوقف می‌کند.

| نام      | توضیحات                                 |
| -------- | -------------------------------------- |
| objectid | شناسه شیئی که باید حرکت آن متوقف شود. |

## مقادیر بازگشتی

این تابع هیچ مقدار خاصی بازنمی‌گرداند.

## مثال‌ها

```c
new gAirportGate;

public OnGameModeInit()
{
    gAirportGate = CreateObject(980, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);

    MoveObject(gAirportGate, 0.0, 0.0, 15.0, 1.00);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/stopobject", true) == 0)
    {
        StopObject(gAirportGate);
        return 1;
    }
    return 0;
}
```

## توابع مرتبط

- [CreateObject](CreateObject): یک شیء ایجاد می‌کند.
- [DestroyObject](DestroyObject): یک شیء را نابود می‌کند.
- [IsValidObject](IsValidObject): بررسی می‌کند که آیا شیء مشخصی معتبر است.
- [MoveObject](MoveObject): یک شیء را حرکت می‌دهد.
- [SetObjectPos](SetObjectPos): موقعیت یک شیء را تنظیم می‌کند.
- [SetObjectRot](SetObjectRot): چرخش یک شیء را تنظیم می‌کند.
- [GetObjectPos](GetObjectPos): موقعیت یک شیء را پیدا می‌کند.
- [GetObjectRot](GetObjectRot): چرخش یک شیء را بررسی می‌کند.
- [AttachObjectToPlayer](AttachObjectToPlayer): یک شیء را به بازیکن متصل می‌کند.
- [CreatePlayerObject](CreatePlayerObject): یک شیء فقط برای یک بازیکن ایجاد می‌کند.
- [DestroyPlayerObject](DestroyPlayerObject): یک شیء بازیکن را نابود می‌کند.
- [IsValidPlayerObject](IsValidPlayerObject): بررسی می‌کند که آیا شیء بازیکن مشخصی معتبر است.
- [MovePlayerObject](MovePlayerObject): یک شیء بازیکن را حرکت می‌دهد.
- [StopPlayerObject](StopPlayerObject): حرکت یک شیء بازیکن را متوقف می‌کند.
- [SetPlayerObjectPos](SetPlayerObjectPos): موقعیت یک شیء بازیکن را تنظیم می‌کند.
- [SetPlayerObjectRot](SetPlayerObjectRot): چرخش یک شیء بازیکن را تنظیم می‌کند.
- [GetPlayerObjectPos](GetPlayerObjectPos): موقعیت یک شیء بازیکن را پیدا می‌کند.
- [GetPlayerObjectRot](GetPlayerObjectRot): چرخش یک شیء بازیکن را بررسی می‌کند.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): یک شیء بازیکن را به بازیکن متصل می‌کند.
- [OnObjectMoved](../callbacks/OnObjectMoved): زمانی فراخوانی می‌شود که یک شیء حرکت خود را متوقف کند.