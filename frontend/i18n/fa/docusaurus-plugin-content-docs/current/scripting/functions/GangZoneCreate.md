---
title: GangZoneCreate
sidebar_label: GangZoneCreate
description: ایجاد یک گنگ زون (ناحیه رنگی رادار).
tags: ["gangzone"]
---

## توضیحات

ایجاد یک گنگ زون (ناحیه رنگی رادار).

| نام        | توضیحات                                                   |
| ---------- | ------------------------------------------------------------ |
| Float:minX | مختصات X برای سمت غربی گنگ زون.                      |
| Float:minY | مختصات Y برای سمت جنوبی گنگ زون.                     |
| Float:maxX | مختصات X برای سمت شرقی گنگ زون.                      |
| Float:maxY | مختصات Y برای سمت شمالی گنگ زون.                     |

## مقادیر بازگشتی

شناسه ناحیه ایجادشده، اگر ایجاد نشود **-1** برمی‌گرداند

## مثال‌ها

```c
new gangZone;

public OnGameModeInit()
{
    gangZone = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);
    return 1;
}
```

```
                          MaxY
                          v
             -------------* < MaxX
             |            |
             |  gangzone  |
             |   center   |
             |            |
      MinX > *-------------
             ^
             MinY
```

## نکات

:::warning

- محدودیت 1024 گنگ زون وجود دارد.
- قرار دادن پارامترها به ترتیب اشتباه باعث رفتار غیرعادی می‌شود.

:::

:::tip

این تابع فقط گنگ زون را ایجاد می‌کند، برای نمایش آن باید از [GangZoneShowForPlayer](GangZoneShowForPlayer) یا [GangZoneShowForAll](GangZoneShowForAll) استفاده کنید.

:::

## توابع مرتبط

- [GangZoneDestroy](GangZoneDestroy): نابود کردن گنگ زون.
- [GangZoneShowForPlayer](GangZoneShowForPlayer): نمایش گنگ زون برای بازیکن.
- [GangZoneShowForAll](GangZoneShowForAll): نمایش گنگ زون برای تمام بازیکنان.
- [GangZoneHideForPlayer](GangZoneHideForPlayer): پنهان کردن گنگ زون برای بازیکن.
- [GangZoneHideForAll](GangZoneHideForAll): پنهان کردن گنگ زون برای تمام بازیکنان.
- [GangZoneFlashForPlayer](GangZoneFlashForPlayer): چشمک زدن گنگ زون برای بازیکن.
- [GangZoneFlashForAll](GangZoneFlashForAll): چشمک زدن گنگ زون برای تمام بازیکنان.
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): متوقف کردن چشمک زدن گنگ زون برای بازیکن.
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): متوقف کردن چشمک زدن گنگ زون برای تمام بازیکنان.

## ویرایشگرهای گنگ زون

- [ویرایشگر گنگ زون Prineside DevTools](https://dev.prineside.com/en/gtasa_gangzone_editor/)
