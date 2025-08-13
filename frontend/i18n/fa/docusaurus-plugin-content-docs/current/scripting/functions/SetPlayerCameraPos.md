---
title: SetPlayerCameraPos
sidebar_label: SetPlayerCameraPos
description: دوربین رو برای یک بازیکن در موقعیت خاصی قرار می‌ده.
tags: ["player", "camera"]
---

## توضیحات

دوربین رو برای یک بازیکن در موقعیت خاصی قرار می‌ده.

| نام      | توضیحات                                    |
| -------- | ------------------------------------------ |
| playerid | ID بازیکن                                  |
| Float:x  | مختصات X که دوربین باید در اون قرار بگیره. |
| Float:y  | مختصات Y که دوربین باید در اون قرار بگیره. |
| Float:z  | مختصات Z که دوربین باید در اون قرار بگیره. |

## مقدار برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا ناموفق بود. بازیکن مشخص شده وجود نداره.

## مثال‌ها

```c
SetPlayerCameraPos(playerid, 652.23, 457.21, 10.84);
```

## نکات

:::tip

- ممکنه لازم باشه SetPlayerCameraLookAt رو هم با این تابع استفاده کنی تا درست کار کنه.
- از SetCameraBehindPlayer استفاده کن تا دوربین رو به پشت بازیکن برگردونی.

:::

:::warning

استفاده از توابع دوربین درست بعد از فعال کردن spectator mode کار نمی‌کنه.

:::

## توابع مرتبط

- [SetPlayerCameraLookAt](SetPlayerCameraLookAt): تنظیم اینکه دوربین بازیکن کجا باید نگاه کنه.
- [SetCameraBehindPlayer](SetCameraBehindPlayer): قرار دادن دوربین یک بازیکن پشت سرش.