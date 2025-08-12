---
title: EditAttachedObject
sidebar_label: EditAttachedObject
description: ورود به حالت ویرایش برای آبجکت چسبانده شده.
tags: ["player", "object", "attachment"]
---

## توضیحات

ورود به حالت ویرایش برای آبجکت چسبانده شده.

| نام     | توضیحات                                          |
| -------- | ------------------------------------------------ |
| playerid | شناسه بازیکن برای ورود به حالت ویرایش           |
| index    | ایندکس (اسلات) آبجکت چسبانده شده برای ویرایش   |

## مقادیر بازگشتی

**1** در صورت موفقیت و **0** در صورت شکست.

## مثال‌ها

```c
public OnPlayerSpawn(playerid)
{
    SetPlayerAttachedObject(playerid, 0, 1337, 2);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/edit", true))
    {
        EditAttachedObject(playerid, 0);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: You now edit your attached object on index slot 0!");
        return 1;
    }
    return 0;
}
```

## نکات

:::tip

می‌توانید دوربین را حین ویرایش با نگه داشتن کلید فاصله (یا W در خودرو) و حرکت دادن ماوس حرکت دهید.

:::

:::warning

بازیکنان قادر خواهند بود آبجکت‌ها را تا اندازه بسیار بزرگ یا منفی مقیاس کنند. باید محدودیت‌هایی با استفاده از OnPlayerEditAttachedObject برای لغو ویرایش یا کلیپ کردن مقادیر مقیاس در نظر گرفته شود.

:::

## توابع مرتبط

- [SetPlayerAttachedObject](SetPlayerAttachedObject): چسباندن آبجکت به بازیکن
- [RemovePlayerAttachedObject](RemovePlayerAttachedObject): حذف آبجکت چسبانده شده از بازیکن
- [IsPlayerAttachedObjectSlotUsed](IsPlayerAttachedObjectSlotUsed): بررسی چسبانده بودن آبجکت به بازیکن در ایندکس مشخص
- [EditObject](EditObject): ویرایش یک آبجکت.
- [EditPlayerObject](EditPlayerObject): ویرایش یک آبجکت.
- [SelectObject](SelectObject): انتخاب یک آبجکت.
- [CancelEdit](CancelEdit): لغو ویرایش یک آبجکت.

## کال‌بک‌های مرتبط

- [OnPlayerEditAttachedObject](../callbacks/OnPlayerEditAttachedObject): زمانی فراخوانی می‌شود که بازیکن ویرایش آبجکت چسبانده شده را تمام کند.