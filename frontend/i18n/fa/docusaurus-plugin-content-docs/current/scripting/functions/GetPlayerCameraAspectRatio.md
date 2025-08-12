---
title: GetPlayerCameraAspectRatio
sidebar_label: GetPlayerCameraAspectRatio
description: نسبت ابعاد دوربین یک بازیکن را بازمی‌گرداند.
tags: ["player", "camera"]
---

## توضیحات

نسبت ابعاد دوربین یک بازیکن را بازمی‌گرداند.

| نام      | توضیحات                                            |
| -------- | -------------------------------------------------- |
| playerid | شناسه بازیکنی که می‌خواهید نسبت ابعاد دوربینش را دریافت کنید. |

## مقدار بازگشتی

نسبت ابعاد دوربین بازیکن، به صورت عدد اعشاری.

نسبت ابعاد می‌تواند یکی از سه مقدار باشد: 4:3 (1.3333334, Float:0x3FAAAAAB) وقتی widescreen خاموش است، 5:4 (1.2470589, Float:0x3F9F9FA0) وقتی letterbox mode فعال است، و 16:9 (1.7764707, Float:0x3FE36364) وقتی widescreen فعال است صرف نظر از letterbox mode.

## مثال‌ها

```c
new string[128];
format(string, sizeof(string), "Your aspect ratio: %f", GetPlayerCameraAspectRatio(playerid));
SendClientMessage(playerid, -1, string);
```

## نکات

:::tip

مقدار بازگشتی این تابع نشان‌دهنده مقدار گزینه "widescreen" در تنظیمات نمایش بازی است، نه نسبت ابعاد واقعی نمایشگر بازیکن.

:::

## تابع‌های مرتبط

- [GetPlayerCameraZoom](GetPlayerCameraZoom): سطح زوم دوربین بازیکن را دریافت کنید.
- [GetPlayerCameraPos](GetPlayerCameraPos): موقعیت دوربین بازیکن را پیدا کنید.
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): بردار جلویی دوربین بازیکن را دریافت کنید