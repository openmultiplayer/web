---
title: GetPlayerSpecialAction
sidebar_label: GetPlayerSpecialAction
description: دریافت عمل ویژه فعلی بازیکن.
tags: ["player"]
---

## توضیحات

دریافت عمل ویژه فعلی بازیکن.

| نام     | توضیحات                                        |
| -------- | -------------------------------------------------- |
| playerid | ID بازیکن برای دریافت عمل ویژه‌اش. |

## مقادیر برگشتی

عمل ویژه بازیکن (مراجعه کنید به: [Special Actions](../resources/specialactions)).

## مثال‌ها

```c
public OnPlayerUpdate(playerid)
{
    // Ban players if they have a jetpack
    if (GetPlayerSpecialAction(playerid) == SPECIAL_ACTION_USEJETPACK)
    {
        Ban(playerid);
    }
    return 1;
}
```

## توابع مرتبط

- [SetPlayerSpecialAction](SetPlayerSpecialAction): تنظیم عمل ویژه بازیکن.
- [GetPlayerState](GetPlayerState): دریافت وضعیت فعلی بازیکن.

## منابع مرتبط

- [Special Action IDs](../resources/specialactions)