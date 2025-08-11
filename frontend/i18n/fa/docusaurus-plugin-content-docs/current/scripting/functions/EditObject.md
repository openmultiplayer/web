---
title: EditObject
sidebar_label: EditObject
description: به بازیکن اجازه ویرایش آبجکت (موقعیت و چرخش) با استفاده از ماوس روی GUI (رابط گرافیکی کاربر) را می‌دهد.
tags: []
---

## توضیحات

به بازیکن اجازه ویرایش آبجکت (موقعیت و چرخش) با استفاده از ماوس روی GUI (رابط گرافیکی کاربر) را می‌دهد.

| نام     | توضیحات                                         |
| -------- | ----------------------------------------------- |
| playerid | شناسه بازیکنی که باید آبجکت را ویرایش کند.    |
| objectid | شناسه آبجکتی که باید توسط بازیکن ویرایش شود. |

## مقادیر بازگشتی

1: تابع با موفقیت اجرا شد. موفقیت زمانی گزارش می‌شود که آبجکت غیرموجود مشخص شود، اما هیچ اتفاقی نخواهد افتاد.

0: تابع در اجرا ناموفق بود. بازیکن متصل نیست.

## مثال‌ها

```c
new object;
public OnGameModeInit()
{
    object = CreateObject(1337, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/oedit", true))
    {
        EditObject(playerid, object);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: You can now edit the object!");
        return 1;
    }
    return 0;
}
```

## نکات

:::tip

می‌توانید دوربین را حین ویرایش با نگه داشتن کلید فاصله (یا W در خودرو) و حرکت دادن ماوس حرکت دهید.

:::

## توابع مرتبط

- [CreateObject](CreateObject): ایجاد یک آبجکت.
- [DestroyObject](DestroyObject): نابودی یک آبجکت.
- [MoveObject](MoveObject): حرکت دادن یک آبجکت.
- [EditPlayerObject](EditPlayerObject): ویرایش یک آبجکت.
- [EditAttachedObject](EditAttachedObject): ویرایش آبجکت چسبانده شده.
- [SelectObject](SelectObject): انتخاب یک آبجکت.
- [CancelEdit](CancelEdit): لغو ویرایش یک آبجکت.