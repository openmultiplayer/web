---
title: GetPlayerCameraMode
sidebar_label: GetPlayerCameraMode
description: حالت فعلی دوربین GTA برای بازیکن مورد نظر را برمی‌گرداند.
tags: ["player", "camera"]
---

## توضیحات

حالت فعلی دوربین GTA [camera mode](../resources/cameramodes) برای بازیکن مورد نظر را برمی‌گرداند. حالت‌های دوربین برای تشخیص اینکه آیا بازیکن در حال هدف‌گیری، انجام passenger driveby و غیره است، مفید هستند.

| نام      | توضیحات                                     |
| -------- | ------------------------------------------ |
| playerid | شناسه بازیکنی که حالت دوربینش را می‌خواهید دریافت کنید |

## مقدار بازگشتی

حالت دوربین به صورت عدد صحیح (یا -1 اگر بازیکن متصل نباشد)

## مثال‌ها

```c
/* when the player types 'cameramode' in to the chat box, they'll see this. */
public OnPlayerText(playerid, text[])
{
    if (strcmp(text, "cameramode", true) == 0)
    {
        new string[48];
        format(string, sizeof(string), "Your camera mode: %d", GetPlayerCameraMode(playerid));
        SendClientMessage(playerid, 0xA9C4E4FF, string);
    }
    return 0;
}
```

## تابع‌های مرتبط

- [GetPlayerCameraPos](GetPlayerCameraPos): موقعیت دوربین بازیکن را پیدا کنید.
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): بردار جلویی دوربین بازیکن را دریافت کنید
- [SetPlayerCameraPos](SetPlayerCameraPos): موقعیت دوربین بازیکن را تنظیم کنید.
- [SetPlayerCameraLookAt](SetPlayerCameraLookAt): تنظیم کنید دوربین بازیکن به کجا نگاه کند.
- [SetCameraBehindPlayer](SetCameraBehindPlayer): دوربین بازیکن را پشت سرش قرار دهید.

## منابع مرتبط

- [Camera Modes](../resources/cameramodes)