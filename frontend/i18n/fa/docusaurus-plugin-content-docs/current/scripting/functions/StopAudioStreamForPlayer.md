---
title: StopAudioStreamForPlayer
sidebar_label: StopAudioStreamForPlayer
description: جریان صوتی فعلی را برای یک بازیکن متوقف می‌کند.
tags: ["player"]
---

## توضیحات

جریان صوتی فعلی را برای یک بازیکن متوقف می‌کند.

| نام      | توضیحات                                                    |
| -------- | --------------------------------------------------------- |
| playerid | بازیکنی که می‌خواهید جریان صوتی را برای او متوقف کنید. |

## مقادیر بازگشتی

این تابع هیچ مقدار خاصی بازنمی‌گرداند.

## مثال‌ها

```c
public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    // اگر بازیکن از وسیله نقلیه خارج شود
    if (oldstate == PLAYER_STATE_DRIVER || oldstate == PLAYER_STATE_PASSENGER)
    {
        StopAudioStreamForPlayer(playerid); // جریان صوتی را متوقف کن
    }
    return 1;
}
```

## توابع مرتبط

- [PlayAudioStreamForPlayer](PlayAudioStreamForPlayer): یک جریان صوتی برای بازیکن پخش می‌کند.
- [PlayerPlaySound](PlayerPlaySound): یک صدا برای بازیکن پخش می‌کند.