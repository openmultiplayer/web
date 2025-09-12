---
title: SetCameraBehindPlayer
sidebar_label: SetCameraBehindPlayer
description: دوربین رو به جای پشت بازیکن برمی‌گردونه، بعد از استفاده از تابعی مثل SetPlayerCameraPos.
tags: ["player", "camera"]
---

## توضیحات

دوربین رو به جای پشت بازیکن برمی‌گردونه، بعد از استفاده از تابعی مثل SetPlayerCameraPos.

| نام     | توضیحات                                    |
| -------- | ---------------------------------------------- |
| playerid | بازیکنی که می‌خوای دوربینش رو بازگردونی. |

## مقدار برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع اجرا نشد. یعنی بازیکن مشخص شده وجود نداره.

## مثال‌ها

```c
SetCameraBehindPlayer(playerid);
```

## توابع مرتبط

- [SetPlayerCameraPos](SetPlayerCameraPos): تنظیم موقعیت دوربین بازیکن.
- [SetPlayerCameraLookAt](SetPlayerCameraLookAt): تنظیم جهتی که دوربین بازیکن باید بهش نگاه کنه.