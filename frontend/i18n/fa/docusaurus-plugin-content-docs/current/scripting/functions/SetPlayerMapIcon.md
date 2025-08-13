---
title: SetPlayerMapIcon
sidebar_label: SetPlayerMapIcon
description: یک icon/marker روی نقشه پلیر قرار می‌ده.
tags: ["player"]
---

## توضیحات

یک icon/marker روی نقشه پلیر قرار می‌ده. می‌تونه برای مشخص کردن مکان‌هایی مثل بانک و بیمارستان به پلیر ها استفاده بشه.

| نام           | توضیحات                                                                                                                                                |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| playerid      | آیدی پلیری که قراره map icon براش تنظیم بشه                                                                                                             |
| iconid        | آیدی icon پلیر، از 0 تا 99. یعنی حداکثر 100 تا map icon می‌تونی داشته باشی. ID می‌تونه توی [RemovePlayerMapIcon](RemovePlayerMapIcon) استفاده بشه      |
| Float:x       | مختصات X برای قرار دادن map icon                                                                                                                        |
| Float:y       | مختصات Y برای قرار دادن map icon                                                                                                                        |
| Float:z       | مختصات Z برای قرار دادن map icon                                                                                                                        |
| markerType    | [آیکونی](../resources/mapicons) که قراره تنظیم بشه                                                                                                      |
| colour        | رنگ آیکون، به عنوان عدد صحیح یا hex با فرمت رنگ RGBA. این باید فقط با آیکون مربعی (ID: 0) استفاده بشه                                                |
| MAPICON:style | [سبک](../resources/mapiconstyles) آیکون                                                                                                               |

## مقادیر بازگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع نتونست اجرا بشه. پلیر متصل نیست.

## مثال‌ها

```c
public OnPlayerConnect(playerid)
{
    // in mesal neshoon mide che juri ye dollar-icon bala ye 24/7 
    // ke dar Las Venturas gharar dare besazim. be in tariigh player haye jadid 
    // midunan kojam baran ba puleshunn!
    SetPlayerMapIcon(playerid, 12, 2204.9468, 1986.2877, 16.7380, 52, 0, MAPICON_LOCAL);
}
```

## نکات

:::tip

- اگه از marker type نامعتبری استفاده کنی، ID 1 (مربع سفید ![](https://assets.open.mp/assets/images/mapIcons/icon1.gif)) رو می‌سازه.
- اگه از icon ID ای استفاده کنی که قبلاً در حال استفاده هست، map icon فعلی که از اون ID استفاده می‌کنه رو جایگزین می‌کنه.

:::

:::warning

- فقط می‌تونی 100 تا map icon داشته باشی. برای دور زدن این محدودیت، می‌تونی از plugin [streamer](https://github.com/samp-incognito/samp-streamer-plugin) استفاده کنی.
- Marker type های 1 (![](https://assets.open.mp/assets/images/mapIcons/icon1.gif))، 2 (![](https://assets.open.mp/assets/images/mapIcons/icon2.gif))، 4 (![](https://assets.open.mp/assets/images/mapIcons/icon4.gif))، و 56 (![](https://assets.open.mp/assets/images/mapIcons/icon56.gif)) باعث کرش بازیت می‌شن اگه map legend ها فعال باشن در حین دیدن نقشه.

:::

## توابع مرتبط

- [RemovePlayerMapIcon](RemovePlayerMapIcon): یک map icon رو برای پلیر حذف می‌کنه.
- [SetPlayerMarkerForPlayer](SetPlayerMarkerForPlayer): marker پلیر رو تنظیم می‌کنه.

## منابع مرتبط

- [Map Icons](../resources/mapicons): لیست map icon ها.
- [Map Icon Styles](../resources/mapiconstyles): لیست سبک‌های map icon.