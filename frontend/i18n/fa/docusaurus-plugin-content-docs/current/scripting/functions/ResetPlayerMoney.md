---
title: ResetPlayerMoney
sidebar_label: ResetPlayerMoney
description: پول بازیکن رو به $0 ریست می‌کنه.
tags: ["player"]
---

## توضیحات

پول بازیکن رو به $0 ریست می‌کنه.

| نام     | توضیحات                                 |
| -------- | ------------------------------------------- |
| playerid | ID بازیکن برای ریست کردن پولش. |

## مقدار برگشتی

**1** - تابع با موفقیت اجرا شد.

**0** - تابع اجرا نشد. یعنی بازیکن متصل نیست.

## مثال‌ها

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    SendClientMessage(playerid, 0xFFFFFFAA, "You died and lost all of your cash!");
    ResetPlayerMoney(playerid);
    return 1;
}
```

## توابع مرتبط

- [GetPlayerMoney](GetPlayerMoney): بررسی اینکه بازیکن چقدر پول داره.
- [GivePlayerMoney](GivePlayerMoney): دادن پول به بازیکن.