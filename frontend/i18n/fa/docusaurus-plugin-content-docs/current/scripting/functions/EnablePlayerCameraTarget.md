---
title: EnablePlayerCameraTarget
sidebar_label: EnablePlayerCameraTarget
description: توابع هدف‌گیری دوربین را برای بازیکن فعال/غیرفعال می‌کند.
tags: ["player"]
---

<VersionWarn version='SA-MP 0.3.7' />

## توضیحات

توابع هدف‌گیری دوربین را برای بازیکن فعال/غیرفعال می‌کند. به طور پیش‌فرض برای صرفه‌جویی در پهنای باند غیرفعال است.

| نام        | توضیحات                                                                         |
| ----------- | ------------------------------------------------------------------------------- |
| playerid    | شناسه بازیکن برای فعال/غیرفعال کردن توابع هدف‌گیری دوربین.                     |
| bool:enable | 'true' برای فعال کردن توابع هدف‌گیری دوربین و 'false' برای غیرفعال کردن آن‌ها. |

## مقادیر بازگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا ناموفق بود. بازیکن متصل نیست.

## مثال‌ها

```c
public OnPlayerConnect(playerid)
{
     EnablePlayerCameraTarget(playerid, true);
     return 1;
}
```

## توابع مرتبط

- [IsPlayerCameraTargetEnabled](IsPlayerCameraTargetEnabled): بررسی فعال بودن هدف دوربین بازیکن.
- [GetPlayerCameraTargetVehicle](GetPlayerCameraTargetVehicle): دریافت شناسه خودرویی که بازیکن به آن نگاه می‌کند.
- [GetPlayerCameraTargetPlayer](GetPlayerCameraTargetPlayer): دریافت شناسه بازیکنی که بازیکن به او نگاه می‌کند.
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): دریافت بردار جلوی دوربین بازیکن