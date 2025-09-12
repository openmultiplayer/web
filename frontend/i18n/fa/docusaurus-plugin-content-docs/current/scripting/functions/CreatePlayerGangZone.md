---
title: CreatePlayerGangZone
sidebar_label: CreatePlayerGangZone
description: ایجاد گنگ زون بازیکن
tags: ["player", "gangzone", "playergangzone"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

ایجاد گنگ زون بازیکن. این می‌تواند به عنوان راهی برای دور زدن محدودیت گنگ زون عمومی استفاده شود.

| نام        | توضیحات                                                    |
| ---------- | ---------------------------------------------------------- |
| playerid   | ID بازیکنی که برایش گنگ زون بازیکن ایجاد خواهد شد.      |
| Float:minX | مختصات X برای سمت غربی گنگ زون بازیکن.                   |
| Float:minY | مختصات Y برای سمت جنوبی گنگ زون بازیکن.                  |
| Float:maxX | مختصات X برای سمت شرقی گنگ زون بازیکن.                   |
| Float:maxY | مختصات Y برای سمت شمالی گنگ زون بازیکن.                  |

## مقادیر بازگشتی

ID گنگ زون بازیکن ایجاد شده، **-1** را برمی‌گرداند اگر ایجاد نشود

## مثال‌ها

```c
// این متغیر برای ذخیره id گنگ زون استفاده می‌شود
// تا بتوانیم در سراسر اسکریپت از آن استفاده کنیم
new gGangZoneID[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // ایجاد گنگ زون
    gGangZoneID[playerid] = CreatePlayerGangZone(playerid, 2236.1475, 2424.7266, 2319.1636, 2502.4348);
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

- حداکثر 1024 گنگ زون وجود دارد.
- قرار دادن پارامترها در ترتیب اشتباه باعث رفتار باگی می‌شود.

:::

:::tip

این تابع فقط گنگ زون را ایجاد می‌کند، باید از [PlayerGangZoneShow](PlayerGangZoneShow) برای نمایش آن استفاده کنید.

:::

## توابع مرتبط

- [PlayerGangZoneDestroy](PlayerGangZoneDestroy): حذف گنگ زون بازیکن.
- [PlayerGangZoneShow](PlayerGangZoneShow): نمایش گنگ زون بازیکن با یک رنگ.
- [PlayerGangZoneHide](PlayerGangZoneHide): مخفی کردن گنگ زون بازیکن.
- [PlayerGangZoneFlash](PlayerGangZoneFlash): شروع چشمک زدن گنگ زون بازیکن.
- [PlayerGangZoneStopFlash](PlayerGangZoneStopFlash): توقف چشمک زدن گنگ زون بازیکن.
- [PlayerGangZoneGetColour](PlayerGangZoneGetColour): دریافت رنگ گنگ زون بازیکن.
- [PlayerGangZoneGetFlashColour](PlayerGangZoneGetFlashColour): دریافت رنگ چشمک زدن گنگ زون بازیکن.
- [PlayerGangZoneGetPos](PlayerGangZoneGetPos): دریافت موقعیت گنگ زون، نمایش داده شده با مختصات minX، minY، maxX، maxY.
- [IsValidPlayerGangZone](IsValidPlayerGangZone): بررسی معتبر بودن گنگ زون بازیکن.
- [IsPlayerInPlayerGangZone](IsPlayerInPlayerGangZone): بررسی اینکه آیا بازیکن در گنگ زون بازیکن است.
- [IsPlayerGangZoneVisible](IsPlayerGangZoneVisible): بررسی اینکه آیا گنگ زون بازیکن قابل مشاهده است.
- [IsPlayerGangZoneFlashing](IsPlayerGangZoneFlashing): بررسی اینکه آیا گنگ زون بازیکن در حال چشمک زدن است.
- [UsePlayerGangZoneCheck](UsePlayerGangZoneCheck): فعال کردن کالبک زمانی که بازیکن وارد/خارج این منطقه می‌شود.

## ویرایشگرهای گنگ زون

- [Prineside DevTools GangZone Editor](https://dev.prineside.com/en/gtasa_gangzone_editor/)