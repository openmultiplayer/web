---
title: GetPlayerTeam
sidebar_label: GetPlayerTeam
description: دریافت ID تیمی که بازیکن در آن است.
tags: ["player"]
---

## توضیحات

دریافت ID تیمی که بازیکن در آن است.

| نام     | توضیحات                              |
| -------- | ---------------------------------------- |
| playerid | ID بازیکن برای دریافت تیمش. |

## مقادیر برگشتی

**0-254:** تیم بازیکن. (0 تیم معتبری است)

**255:** به عنوان NO_TEAM تعریف شده. بازیکن در هیچ تیمی نیست.

**-1:** تابع در اجرا ناموفق بود. بازیکن متصل نیست.

## مثال‌ها

```c
enum
{
    TEAM_ONE = 1,
    TEAM_TWO
};

public OnPlayerSpawn(playerid)
{
    // Players who are in team 1 should spawn at Las Venturas airport.

    if (GetPlayerTeam(playerid) == TEAM_ONE)
    {
        SetPlayerPos(playerid, 1667.8909, 1405.5618, 10.7801);
    }
    return 1;
}
```

## توابع مرتبط

- [SetPlayerTeam](SetPlayerTeam): تنظیم تیم بازیکن.
- [SetTeamCount](SetTeamCount): تنظیم تعداد تیم‌های موجود.