---
title: GetPlayerCameraZoom
sidebar_label: GetPlayerCameraZoom
description: سطح زوم دوربین بازی برای یک بازیکن مشخص را دریافت می‌کند.
tags: ["player", "camera"]
---

## توضیحات

سطح زوم دوربین بازی برای یک بازیکن مشخص را دریافت می‌کند.

| نام      | توضیحات                                                |
| -------- | ----------------------------------------------------- |
| playerid | شناسه بازیکنی که می‌خواهید سطح زوم دوربینش را دریافت کنید. |

## مقدار بازگشتی

سطح زوم دوربین بازیکن (دوربین، اسنایپر و غیره)، یک عدد اعشاری.

## مثال‌ها

```c
new string[128];
format(string, sizeof(string), "Your camera zoom level: %f", GetPlayerCameraZoom(playerid));
SendClientMessage(playerid, -1, string);
```

## نکات

:::tip

این سطح زوم دوربین بازی (از جمله دوربین اسنایپر) را دریافت می‌کند، نه سلاح دوربین.

:::

## تابع‌های مرتبط

- [GetPlayerCameraAspectRatio](GetPlayerCameraAspectRation): نسبت ابعاد دوربین بازیکن را دریافت کنید.
- [GetPlayerCameraPos](GetPlayerCameraPos): موقعیت دوربین بازیکن را پیدا کنید.
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): بردار جلویی دوربین بازیکن را دریافت کنید