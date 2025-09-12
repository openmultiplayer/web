---
title: GetPlayerCameraTargetObject
sidebar_label: GetPlayerCameraTargetObject
description: اجازه می‌دهد شناسه آبجکتی که بازیکن به آن نگاه می‌کند را دریافت کنید.
tags: ["player", "camera"]
---

<VersionWarn version='SA-MP 0.3.7' />

## توضیحات

اجازه می‌دهد شناسه آبجکتی که بازیکن به آن نگاه می‌کند را دریافت کنید.

| نام      | توضیحات                   |
| -------- | ----------------------------- |
| playerid | شناسه بازیکنی که بررسی می‌شود |

## مقدار بازگشتی

شناسه آبجکتی که playerid به آن نگاه می‌کند. اگر INVALID_OBJECT_ID (65535) برگردانده شود، playerid به هیچ آبجکتی نگاه نمی‌کند.

## مثال‌ها

```c
new globalObjectID;

public OnGameModeInit()
{
    globalObjectID = CreateObject(1337, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/check", true))
    {
        new objectid = GetPlayerCameraTargetObject(playerid);
        if (objectid == globalObjectID)
        {
            SendClientMessage(playerid, -1, "You're looking at your object.");
        }
        else if (objectid == INVALID_OBJECT_ID) // INVALID_OBJECT_ID = 65535
        {
            SendClientMessage(playerid, -1, "You're not looking at any object.");
        }
        return 1;
    }
    return 0;
}
```

## نکات

:::warning

این تابع به طور پیش‌فرض برای صرفه‌جویی در باندوید غیرفعال است. از [EnablePlayerCameraTarget](EnablePlayerCameraTarget) برای فعال‌سازی آن برای هر بازیکن استفاده کنید.

:::

## تابع‌های مرتبط

- [GetPlayerCameraTargetVehicle](GetplayerCameraTargetVehicle): شناسه وسیله نقلیه‌ای که بازیکن به آن نگاه می‌کند را دریافت کنید.
- [GetPlayerCameraTargetPlayer](GetplayerCameraTargetPlayer): شناسه بازیکنی که یک بازیکن به آن نگاه می‌کند را دریافت کنید.
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): بردار جلویی دوربین بازیکن را دریافت کنید