---
title: InterpolateCameraLookAt
sidebar_label: InterpolateCameraLookAt
description: نقطه 'نگاه کردن' دوربین بازیکن رو بین دو مختصات با سرعت مشخص interpolate می‌کنه.
tags: ["player", "interpolate"]
---

## توضیحات

نقطه 'نگاه کردن' دوربین بازیکن رو بین دو مختصات با سرعت مشخص interpolate می‌کنه. می‌تونه با [InterpolateCameraPos](InterpolateCameraPos) استفاده بشه.

| نام          | توضیحات                                                                                                                              |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| playerid     | ID بازیکنی که دوربینش باید حرکت کنه                                                                                                    |
| Float:fromX  | موقعیت X ای که دوربین باید از اونجا شروع به حرکت کنه                                                                                    |
| Float:fromY  | موقعیت Y ای که دوربین باید از اونجا شروع به حرکت کنه                                                                                    |
| Float:fromZ  | موقعیت Z ای که دوربین باید از اونجا شروع به حرکت کنه                                                                                    |
| Float:toX    | موقعیت X ای که دوربین باید بهش حرکت کنه                                                                                                 |
| Float:toY    | موقعیت Y ای که دوربین باید بهش حرکت کنه                                                                                                 |
| Float:toZ    | موقعیت Z ای که دوربین باید بهش حرکت کنه                                                                                                 |
| time         | زمان به میلی‌ثانیه برای تکمیل interpolation                                                                                             |
| CAM_MOVE:cut | ['jumpcut'](../resources/cameracutstyles) برای استفاده. پیش‌فرض CAMERA_CUT هست (بی‌فایده). برای interpolation روی CAMERA_MOVE بذار. |

## مقادیر برگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/rotateme", true))
    {
        TogglePlayerSpectating(playerid, true);
        InterpolateCameraLookAt(playerid, 50.0, 50.0, 10.0, -50.0, 50.0, 10.0, 10000, CAMERA_MOVE);
        //                                 x1    y1    z1     x2    y2    z2
        // The camera starts off looking at (x1, y1, z1). It will then rotate and after
        // 10000 milliseconds (10 seconds) it will be looking at (x2, y2, z2).
        return 1;
    }
    return 0;
}
```

## نکات

:::tip

- از [TogglePlayerSpectating](TogglePlayerSpectating) استفاده کن تا آبجکت‌ها برای بازیکن stream بشن در حین حرکت دوربین.
- می‌تونی دوربین رو پشت بازیکن reset کنی با [SetCameraBehindPlayer](SetCameraBehindPlayer).

:::

## توابع مرتبط

- [InterpolateCameraPos](InterpolateCameraPos): حرکت دادن دوربین بازیکن از یه مکان به مکان دیگه.
- [SetPlayerCameraLookAt](SetPlayerCameraLookAt): تنظیم اینکه دوربین بازیکن باید به کجا نگاه کنه.
- [SetPlayerCameraPos](SetPlayerCameraPos): تنظیم موقعیت دوربین بازیکن.

## منابع مرتبط

- [استایل‌های Camera Cut](../resources/cameracutstyles)