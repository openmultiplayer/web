---
title: RemovePlayerFromVehicle
sidebar_label: RemovePlayerFromVehicle
description: بازیکن رو از ماشینش حذف/بیرون می‌کنه.
tags: ["player", "vehicle"]
---

## توضیحات

بازیکن رو از ماشینش حذف/بیرون می‌کنه.

| نام       | توضیح                                             |
| ---------- | ------------------------------------------------------- |
| playerid   | ID بازیکنی که می‌خوایم از ماشینش بیرونش کنیم.      |
| bool:force | اجباری از ماشین بیرون کردن. (پیش‌فرض: `false`) |

## مقادیر بازگشتی

**true** - function با موفقیت اجرا شد.

**false** - اجرای function ناموفق بوده. یعنی بازیکن متصل نیست.

## مثال‌ها

```c
// Mesal - Bazikona faghat agar 10 score dashte bashan mitoonan mashin ranandegi konan.
public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    if (newstate == PLAYER_STATE_DRIVER && GetPlayerScore(playerid) < 10) // PlAYER_STATE_DRIVER = 2
    {
        RemovePlayerFromVehicle(playerid);
    }
    return 1;
}
```

## نکات

:::tip

- انیمیشن خروج برای بقیه بازیکن‌ها sync نمی‌شه.
- این function در [OnPlayerEnterVehicle](../callbacks/OnPlayerEnterVehicle) کار نمی‌کنه، چون بازیکن موقع فراخوانی callback در ماشین نیست. بجاش از [OnPlayerStateChange](../callbacks/OnPlayerStateChange) استفاده کن (مثال بالا رو ببین).
- اگه بازیکن در ماشین RC باشه، حذف نمی‌شه. (از پارامتر `.force = true` یا function [ClearAnimations](ClearAnimations) استفاده کن)

:::

## توابع مرتبط

- [PutPlayerInVehicle](PutPlayerInVehicle): بازیکن رو در ماشین قرار می‌ده.