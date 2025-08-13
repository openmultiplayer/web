---
title: PlayAudioStreamForPlayer
sidebar_label: PlayAudioStreamForPlayer
description: 'audio stream' برای بازیکن پخش کن.
tags: ["player"]
---

## توضیحات

'audio stream' برای بازیکن پخش می‌کند. فایل‌های صوتی معمولی هم کار می‌کنند (مثل MP3).

| نام            | توضیحات                                                                                                                       |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| playerid       | ID بازیکنی که صدا برایش پخش می‌شود.                                                                                           |
| const url[]    | url برای پخش. فرمت‌های معتبر mp3 و ogg/vorbis هستند. لینک به فایل .pls (playlist) آن playlist را پخش می‌کند.              |
| Float:posX     | موقعیت X که صدا در آن پخش می‌شود. پیش‌فرض 0.0. تأثیری ندارد مگر اینکه usepos روی (true) تنظیم شود.                       |
| Float:posY     | موقعیت Y که صدا در آن پخش می‌شود. پیش‌فرض 0.0. تأثیری ندارد مگر اینکه usepos روی (true) تنظیم شود.                       |
| Float:posZ     | موقعیت Z که صدا در آن پخش می‌شود. پیش‌فرض 0.0. تأثیری ندارد مگر اینکه usepos روی (true) تنظیم شود.                       |
| Float:distance | فاصله‌ای که صدا در آن شنیده می‌شود. تأثیری ندارد مگر اینکه usepos روی (true) تنظیم شود.                                    |
| bool:usepos    | از موقعیت‌ها و فاصله مشخص شده استفاده کن. پیش‌فرض غیرفعال (false).                                                          |

## مقدار بازگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - اجرای تابع ناموفق بود. بازیکن مشخص شده وجود ندارد.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp("/radio", cmdtext, true) == 0)
    {
        PlayAudioStreamForPlayer(playerid, "http://somafm.com/tags.pls");
        return 1;
    }
    if (strcmp("/radiopos", cmdtext, true) == 0)
    {
        new Float:x, Float:y, Float:z, Float:distance = 5.0;
        GetPlayerPos(playerid, x, y, z);
        PlayAudioStreamForPlayer(playerid, "http://somafm.com/tags.pls", x, y, z, distance, true);
        return 1;
    }
    return 0;
}
```

## توابع مرتبط

- [StopAudioStreamForPlayer](StopAudioStreamForPlayer): audio stream فعلی برای بازیکن را متوقف کن.
- [PlayerPlaySound](PlayerPlaySound): صدایی برای بازیکن پخش کن.