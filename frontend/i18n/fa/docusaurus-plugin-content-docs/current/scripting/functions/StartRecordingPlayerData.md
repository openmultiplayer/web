---
title: StartRecordingPlayerData
sidebar_label: StartRecordingPlayerData
description: شروع ضبط حرکات یک بازیکن در یک فایل که سپس می‌تواند توسط یک NPC بازتولید شود.
tags: ["player"]
---

## توضیحات

شروع ضبط حرکات یک بازیکن در یک فایل که سپس می‌تواند توسط یک NPC بازتولید شود.

| نام                              | توضیحات                                                                                                                                                                                                                                  |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid                         | شناسه بازیکنی که باید ضبط شود.                                                                                                                                                                                                           |
| PLAYER_RECORDING_TYPE:recordType | [نوع](../resources/recordtypes) ضبط.                                                                                                                                                                                                      |
| const recordFile[]               | نام فایلی که داده‌های ضبط شده را در خود نگه خواهد داشت. در دایرکتوری scriptfiles ذخیره می‌شود، با پسوند .rec که به طور خودکار اضافه می‌شود، شما باید فایل را به npcmodes/recordings منتقل کنید تا برای پخش استفاده شود. |

## مقادیر بازگشتی

این تابع هیچ مقدار خاصی بازنمی‌گرداند.

## مثال‌ها

```c
if (!strcmp("/recordme", cmdtext))
{
    if (GetPlayerState(playerid) == PLAYER_STATE_ONFOOT)
    {
        StartRecordingPlayerData(playerid, PLAYER_RECORDING_TYPE_ONFOOT, "MyFile");
    }
    else if (GetPlayerState(playerid) == PLAYER_STATE_DRIVER)
    {
        StartRecordingPlayerData(playerid, PLAYER_RECORDING_TYPE_DRIVER, "MyFile");
    }
    SendClientMessage(playerid, 0xFFFFFFFF, "All your movements are now being recorded!");
    return 1;
}
```

## توابع مرتبط

- [StopRecordingPlayerData](StopRecordingPlayerData): ضبط داده‌های بازیکن را متوقف می‌کند.

## منابع مرتبط

- [Record Types](../resources/recordtypes)