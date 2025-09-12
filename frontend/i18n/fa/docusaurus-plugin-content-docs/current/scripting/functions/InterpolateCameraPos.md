---
title: InterpolateCameraPos
sidebar_label: InterpolateCameraPos
description: دوربین بازیکن رو از یه موقعیت به موقعیت دیگه، در زمان تعیین شده حرکت می‌ده.
tags: ["player", "interpolate"]
---

## توضیحات

دوربین بازیکن رو از یه موقعیت به موقعیت دیگه، در زمان تعیین شده حرکت می‌ده. برای صحنه‌های اسکریپت شده مفیده.

| نام          | توضیحات                                                                                                                  |
| ------------ | ----------------------------------------------------------------------------------------------------------------------- |
| playerid     | ID بازیکنی که دوربینش باید حرکت کنه                                                                                      |
| Float:fromX  | موقعیت X ای که دوربین باید از اونجا شروع به حرکت کنه                                                                      |
| Float:fromY  | موقعیت Y ای که دوربین باید از اونجا شروع به حرکت کنه                                                                      |
| Float:fromZ  | موقعیت Z ای که دوربین باید از اونجا شروع به حرکت کنه                                                                      |
| Float:toX    | موقعیت X ای که دوربین باید بهش حرکت کنه                                                                                   |
| Float:toY    | موقعیت Y ای که دوربین باید بهش حرکت کنه                                                                                   |
| Float:toZ    | موقعیت Z ای که دوربین باید بهش حرکت کنه                                                                                   |
| time         | زمان به میلی‌ثانیه                                                                                                        |
| CAM_MOVE:cut | [jumpcut](../resources/cameracutstyles) برای استفاده. پیش‌فرض CAMERA_CUT هست. برای حرکت نرم روی CAMERA_MOVE بذار |

## مقادیر برگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/moveme", true))
    {
        TogglePlayerSpectating(playerid, true);
        InterpolateCameraPos(playerid, 0.0, 0.0, 10.0, 1000.0, 1000.0, 30.0, 10000, CAMERA_MOVE);
        //Move the player's camera from point A to B in 10000 milliseconds (10 seconds).
        return 1;
    }
    return 0;
}
```

## نکات

:::tip

- از [TogglePlayerSpectating](TogglePlayerSpectating) استفاده کن تا آبجکت‌ها برای بازیکن stream بشن در حین حرکت دوربین و HUD حذف بشه.
- دوربین بازیکن رو می‌تونی پشت بازیکن reset کنی با [SetCameraBehindPlayer](SetCameraBehindPlayer).

:::

## توابع مرتبط

- [InterpolateCameraLookAt](InterpolateCameraLookAt): حرکت دادن نمای دوربین بازیکن از یه مکان به مکان دیگه.
- [SetPlayerCameraPos](SetPlayerCameraPos): تنظیم موقعیت دوربین بازیکن.
- [SetPlayerCameraLookAt](SetPlayerCameraLookAt): تنظیم اینکه دوربین بازیکن باید به کجا نگاه کنه.

## منابع مرتبط

- [استایل‌های Camera Cut](../resources/cameracutstyles)