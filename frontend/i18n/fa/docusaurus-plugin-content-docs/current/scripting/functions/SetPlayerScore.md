---
title: SetPlayerScore
sidebar_label: SetPlayerScore
description: امتیاز پلیر رو تنظیم می‌کنه.
tags: ["player"]
---

## توضیحات

امتیاز پلیر رو تنظیم می‌کنه. امتیاز پلیر ها در scoreboard نشون داده می‌شه (با نگه داشتن کلید TAB نمایش داده می‌شه).

| نام      | توضیحات                              |
| -------- | ------------------------------------ |
| playerid | آیدی پلیری که قراره امتیازش تنظیم بشه   |
| score    | مقداری که قراره امتیاز پلیر بهش تنظیم بشه |

## مقادیر بازگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع نتونست اجرا بشه. یعنی پلیر مشخص شده وجود نداره.

## مثال‌ها

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    // 1 ta be emtiaze in killer ezafe kon. bayad avval check konim ke mo'tabar bashe.
    if (killerid != INVALID_PLAYER_ID)
    {
        SetPlayerScore(killerid, GetPlayerScore(killerid) + 1);
    }
    return 1;
}
```

## توابع مرتبط

- [GetPlayerScore](GetPlayerScore): امتیاز پلیر رو دریافت می‌کنه.