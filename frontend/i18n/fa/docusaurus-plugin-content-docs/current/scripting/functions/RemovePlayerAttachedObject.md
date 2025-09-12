---
title: RemovePlayerAttachedObject
sidebar_label: RemovePlayerAttachedObject
description: حذف یک آبجکت متصل شده از یک بازیکن
tags: ["player", "object", "attachment"]
---

## توضیحات

یک آبجکت متصل شده رو از یک بازیکن حذف می‌کنه.

| نام      | توضیحات                                                                                                     |
| -------- | ----------------------------------------------------------------------------------------------------------- |
| playerid | آی‌دی بازیکنی که آبجکت ازش حذف می‌شه.                                                                           |
| index    | ایندکس آبجکتی که باید حذف بشه (با [SetPlayerAttachedObject](SetPlayerAttachedObject) تنظیم شده).              |

## مقادیر بازگشتی

**1** در صورت موفقیت، **0** در صورت شکست.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strmp(cmdtext, "/remove", true)) // Hazfe Attached Objects
    {
        for (new i = 0; i < MAX_PLAYER_ATTACHED_OBJECTS; i++)
        {
            if (IsPlayerAttachedObjectSlotUsed(playerid, i))
            {
                RemovePlayerAttachedObject(playerid, i);
            }
        }
        return 1;
    }
    return 0;
}
```

## توابع مرتبط

- [SetPlayerAttachedObject](SetPlayerAttachedObject): اتصال یک آبجکت به یک بازیکن
- [IsPlayerAttachedObjectSlotUsed](IsPlayerAttachedObjectSlotUsed): بررسی اینکه آیا آبجکتی به بازیکن در ایندکس مشخصی متصل هست یا نه