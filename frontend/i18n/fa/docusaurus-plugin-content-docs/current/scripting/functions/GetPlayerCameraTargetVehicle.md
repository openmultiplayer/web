---
title: GetPlayerCameraTargetVehicle
sidebar_label: GetPlayerCameraTargetVehicle
description: شناسه وسیله نقلیه‌ای که بازیکن به آن نگاه می‌کند را دریافت کنید.
tags: ["player", "vehicle", "camera"]
---

<VersionWarn version='SA-MP 0.3.7' />

## توضیحات

شناسه وسیله نقلیه‌ای که بازیکن به آن نگاه می‌کند را دریافت کنید.

| نام      | توضیحات                    |
| -------- | ------------------------------ |
| playerid | شناسه بازیکنی که بررسی می‌شود. |

## مقدار بازگشتی

شناسه وسیله نقلیه‌ای که بازیکن به آن نگاه می‌کند. اگر هیچ کدام نباشد `INVALID_VEHICLE_ID`.

## مثال‌ها

```c
new globalVehicleID;

public OnGameModeInit()
{
    globalVehicleID = CreateVehicle(596, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0, -1, -1, -1);
    return 1;
}

public OnPlayerConnect(playerid)
{
    EnablePlayerCameraTarget(playerid, true);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/check", true))
    {
        new vehicleid = GetPlayerCameraTargetVehicle(playerid);
        if (vehicleid == globalVehicleID)
        {
            SendClientMessage(playerid, -1, "You're looking at your vehicle!");
        }
        else
        {
            SendClientMessage(playerid, -1, "You're not looking at your vehicle.");
        }
        return 1;
    }
    return 0;
}
```

## نکات

:::tip

این تابع (به طور واضح) فقط می‌تواند یک شناسه وسیلة نقلیه در یک زمان برگرداند، در حالی که بازیکن ممکن است به چندین وسیلة نقلیه نگاه کند. به طور کلی به نظر می‌رسد نزدیک‌ترین وسیلة نقلیه را اول تشخیص می‌دهد.

:::

:::warning

این تابع به طور پیش‌فرض برای صرفه‌جویی در باندوید غیرفعال است. از [EnablePlayerCameraTarget](EnablePlayerCameraTarget) برای فعال‌سازی آن برای هر بازیکن استفاده کنید.

:::

## تابع‌های مرتبط

- [GetPlayerCameraTargetPlayer](GetPlayerCameraTargetPlayer): شناسه بازیکنی که یک بازیکن به آن نگاه می‌کند را دریافت کنید.
- [GetPlayerCameraTargetObject](GetplayerCameraTargetObject): شناسه آبجکتی که بازیکن به آن نگاه می‌کند را دریافت کنید.
- [EnablePlayerCameraTarget](EnablePlayerCameraTarget): توابع هدف‌گیری دوربین بازیکن را فعال کنید.
- [GetPlayerCameraFrontVector](GetPlayercameraFrontVector): بردار جلویی دوربین بازیکن را دریافت کنید