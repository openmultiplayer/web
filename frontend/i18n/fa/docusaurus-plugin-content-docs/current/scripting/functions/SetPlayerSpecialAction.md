---
title: SetPlayerSpecialAction
sidebar_label: SetPlayerSpecialAction
description: این تابع اجازه می‌ده special action پلیر رو تنظیم کنی.
tags: ["player"]
---

## توضیحات

این تابع اجازه می‌ده special action پلیر رو تنظیم کنی.

| نام                     | توضیحات                                                        |
| ----------------------- | -------------------------------------------------------------- |
| playerid                | پلیری که قراره action رو انجام بده                             |
| SPECIAL_ACTION:actionid | [Action](../resources/specialactions) که قراره انجام بشه       |

## مقادیر بازگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع نتونست اجرا بشه. یعنی پلیر متصل نیست.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/handsup", true) == 0)
    {
        SetPlayerSpecialAction(playerid, SPECIAL_ACTION_HANDSUP);
        return 1;
    }
    if (strcmp(cmdtext, "/drink", true) == 0)
    {
        SetPlayerSpecialAction(playerid, SPECIAL_ACTION_DRINK_WINE);
        return 1;
    }
    return 0;
}
```

## نکات

:::tip

حذف jetpack از پلیر ها با تنظیم special action شون به `SPECIAL_ACTION_NONE` (0) باعث می‌شه صدا تا زمان مرگ باقی بمونه. یه راه حل برای این هست، فقط یه انیمیشن تصادفی به پلیر اعمال کن و jetpack اش حذف می‌شه.

:::

## توابع مرتبط

- [GetPlayerSpecialAction](GetPlayerSpecialAction): special action فعلی پلیر رو دریافت می‌کنه.
- [ApplyAnimation](ApplyAnimation): یک انیمیشن به پلیر اعمال می‌کنه.

## منابع مرتبط

- [Special Action IDs](../resources/specialactions)