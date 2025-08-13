---
title: SetPlayerCameraLookAt
sidebar_label: SetPlayerCameraLookAt
description: جهت نگاه دوربین یک بازیکن رو تنظیم می‌کنه.
tags: ["player", "camera"]
---

## توضیحات

جهت نگاه دوربین یک بازیکن رو تنظیم می‌کنه. معمولاً قرار هست همراه با SetPlayerCameraPos استفاده بشه.

| نام          | توضیحات                                                                                                                                  |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| playerid     | ID بازیکنی که دوربینش باید تنظیم بشه.                                                                                                   |
| Float:x      | مختصات X که دوربین بازیکن باید بهش نگاه کنه.                                                                                             |
| Float:y      | مختصات Y که دوربین بازیکن باید بهش نگاه کنه.                                                                                             |
| Float:z      | مختصات Z که دوربین بازیکن باید بهش نگاه کنه.                                                                                             |
| CAM_MOVE:cut | [سبک](../resources/cameracutstyles) تغییر. می‌تونه برای interpolate کردن (تغییر آروم) از موقعیت قدیم به جدید با استفاده از CAMERA_MOVE استفاده بشه. |

## مقدار برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا ناموفق بود. بازیکن مشخص شده وجود نداره.

## مثال‌ها

```c
SetPlayerCameraPos(playerid, 320.0, 50.0, 170.0);
SetPlayerCameraLookAt(playerid, 324.34, 54.122, 173.35);
```

## نکات

:::warning

استفاده از توابع دوربین درست بعد از فعال کردن spectator mode کار نمی‌کنه.

:::

## توابع مرتبط

- [SetPlayerCameraPos](SetPlayerCameraPos): تنظیم موقعیت دوربین یک بازیکن.
- [SetCameraBehindPlayer](SetCameraBehindPlayer): قرار دادن دوربین یک بازیکن پشت سرش.
- [GetPlayerCameraPos](GetPlayerCameraPos): پیدا کردن اینکه دوربین بازیکن کجاست.
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): گرفتن بردار جلوی دوربین بازیکن

## منابع مرتبط

- [Camera Cut Styles](../resources/cameracutstyles)