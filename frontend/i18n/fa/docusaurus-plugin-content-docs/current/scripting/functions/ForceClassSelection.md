---
title: ForceClassSelection
sidebar_label: ForceClassSelection
description: مجبور کردن یک پلیر برای برگشت به انتخاب کلاس.
tags: ["class"]
---

## توضیحات

یک پلیر رو مجبور می‌کنه که برگرده به انتخاب کلاس.

| نام      | توضیحات                                    |
| -------- | ------------------------------------------ |
| playerid | پلیری که به انتخاب کلاس فرستاده می‌شه. |

## مقدار بازگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/class", true))
    {
        ForceClassSelection(playerid);
        TogglePlayerSpectating(playerid, true);
        TogglePlayerSpectating(playerid, false);
        return 1;
    }
    return 0;
}
```

## نکات

:::warning

این تابع وقتی با TogglePlayerSpectating ترکیب می‌شه (مثال بالا رو ببینین) تغییر وضعیت به `PLAYER_STATE_WASTED` انجام نمی‌ده، همونطور که اینجا لیست شده.

:::

## توابع مرتبط

- [AddPlayerClass](AddPlayerClass): اضافه کردن یک کلاس.
- [SetPlayerSkin](SetPlayerSkin): تنظیم اسکین یک پلیر.
- [GetPlayerSkin](GetPlayerSkin): گرفتن اسکین فعلی یک پلیر.

## کال‌بک‌های مرتبط

- [OnPlayerRequestClass](../callbacks/OnPlayerRequestClass): وقتی که یک پلیر کلاس رو در انتخاب کلاس تغییر می‌ده صدا زده می‌شه.