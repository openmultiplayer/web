---
title: EnableStuntBonusForPlayer
sidebar_label: EnableStuntBonusForPlayer
description: پاداش شیرین‌کاری را برای بازیکن فعال/غیرفعال می‌کند.
tags: ["player"]
---

## توضیحات

پاداش شیرین‌کاری را برای بازیکن فعال/غیرفعال می‌کند. به طور پیش‌فرض فعال است.

| نام        | توضیحات                                                                |
| ----------- | ---------------------------------------------------------------------- |
| playerid    | شناسه بازیکن برای فعال/غیرفعال کردن پاداش شیرین‌کاری.                |
| bool:enable | 'true' برای فعال کردن پاداش شیرین‌کاری و 'false' برای غیرفعالش.     |

## مقادیر بازگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا ناموفق بود. بازیکن متصل نیست.

## مثال‌ها

```c
public OnPlayerConnect(playerid)
{
    EnableStuntBonusForPlayer(playerid, false); // غیرفعال کردن پاداش شیرین‌کاری زمانی که بازیکن به سرور متصل می‌شود.
    return 1;
}
```

## توابع مرتبط

- [EnableStuntBonusForAll](EnableStuntBonusForAll): فعال/غیرفعال کردن پاداش شیرین‌کاری برای همه بازیکنان.