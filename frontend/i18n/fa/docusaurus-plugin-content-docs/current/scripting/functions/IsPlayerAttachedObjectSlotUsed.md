---
title: IsPlayerAttachedObjectSlotUsed
sidebar_label: IsPlayerAttachedObjectSlotUsed
description: چک می‌کنه که آیا بازیکن یه آبجکت در ایندکس مشخص شده (اسلات) attach داره یا نه.
tags: ["player", "object", "attachment"]
---

## توضیحات

چک می‌کنه که آیا بازیکن یه آبجکت در ایندکس مشخص شده (اسلات) attach داره یا نه.

| نام      | توضیحات                         |
| -------- | ------------------------------- |
| playerid | ID بازیکنی که باید چک بشه.      |
| index    | ایندکس (اسلات) که باید چک بشه.   |

## مقادیر برگشتی

**true** - اسلات مشخص شده برای یه آبجکت attached استفاده می‌شه.

**false** - اسلات مشخص شده برای آبجکت attached استفاده نمی‌شه.

## مثال‌ها

```c
stock CountAttachedObjects(playerid)
{
    new count;
    for (new i = 0; i < MAX_PLAYER_ATTACHED_OBJECTS; i++)
    {
        if (IsPlayerAttachedObjectSlotUsed(playerid, i))
        {
            count++;
        }
    }
    return count;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/count", true))
    {
        new string[32];
        format(string, sizeof(string), "Attached objects: %d", CountAttachedObjects(playerid));
        SendClientMessage(playerid, -1, string);
        return 1;
    }
    return 0;
}
```

## توابع مرتبط

- [SetPlayerAttachedObject](SetPlayerAttachedObject): attach کردن یه آبجکت به بازیکن
- [RemovePlayerAttachedObject](RemovePlayerAttachedObject): حذف یه آبجکت attached از بازیکن
- [GetPlayerAttachedObject](GetPlayerAttachedObject): دریافت داده آبجکت attachment بازیکن بر اساس ایندکس.