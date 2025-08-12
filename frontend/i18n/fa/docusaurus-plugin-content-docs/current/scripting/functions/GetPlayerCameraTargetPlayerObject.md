---
title: GetPlayerCameraTargetPlayerObject
sidebar_label: GetPlayerCameraTargetPlayerObject
description: اجازه می‌دهد شناسه player-object که بازیکن به آن نگاه می‌کند را دریافت کنید.
tags: ["player", "camera", "object", "playerobject"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

اجازه می‌دهد شناسه player-object که بازیکن به آن نگاه می‌کند را دریافت کنید.

| نام      | توضیحات                   |
| -------- | ----------------------------- |
| playerid | شناسه بازیکنی که بررسی می‌شود |

## مقدار بازگشتی

شناسه player-object که بازیکن به آن نگاه می‌کند.

اگر `INVALID_OBJECT_ID` (65535) برگردانده شود، بازیکن به هیچ آبجکتی نگاه نمی‌کند.

## مثال‌ها

```c
new gPlayerObject[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 19174, 978.9045, -986.3599, 40.9522, 0.0000, 0.0000, 228.0000);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/check", true))
    {
        new objectid = GetPlayerCameraTargetPlayerObject(playerid);
        if (objectid == gPlayerObject[playerid])
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

- [GetPlayerCameraTargetObject](GetPlayerCameraTargetObject): شناسه آبجکتی که بازیکن به آن نگاه می‌کند را دریافت کنید.
- [GetPlayerCameraTargetVehicle](GetplayerCameraTargetVehicle): شناسه وسیله نقلیه‌ای که بازیکن به آن نگاه می‌کند را دریافت کنید.
- [GetPlayerCameraTargetPlayer](GetplayerCameraTargetPlayer): شناسه بازیکنی که یک بازیکن به آن نگاه می‌کند را دریافت کنید.
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): بردار جلویی دوربین بازیکن را دریافت کنید