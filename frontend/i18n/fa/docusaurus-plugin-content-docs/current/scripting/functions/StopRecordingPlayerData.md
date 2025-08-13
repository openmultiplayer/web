---
title: StopRecordingPlayerData
sidebar_label: StopRecordingPlayerData
description: تمام ضبط‌هایی که با StartRecordingPlayerData برای یک بازیکن خاص شروع شده‌اند را متوقف می‌کند.
tags: ["player"]
---

## توضیحات

تمام ضبط‌هایی که با StartRecordingPlayerData برای یک بازیکن خاص شروع شده‌اند را متوقف می‌کند.

| نام      | توضیحات                                           |
| -------- | ------------------------------------------------ |
| playerid | بازیکنی که می‌خواهید ضبط‌های او را متوقف کنید. |

## مقادیر بازگشتی

این تابع هیچ مقدار خاصی بازنمی‌گرداند.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/stoprecording", cmdtext))
    {
        StopRecordingPlayerData(playerid);
        SendClientMessage(playerid, 0xFFFFFFFF, "Your recorded file has been saved to the scriptfiles folder!");
        return 1;
    }
}
```

## توابع مرتبط

- [StartRecordingPlayerData](StartRecordingPlayerData): شروع ضبط داده‌های بازیکن.