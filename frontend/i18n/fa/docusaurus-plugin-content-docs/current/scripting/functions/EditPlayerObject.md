---
title: EditPlayerObject
sidebar_label: EditPlayerObject
description: به بازیکنان اجازه ویرایش آبجکت بازیکن (موقعیت و چرخش) با GUI و ماوس را می‌دهد.
tags: ["player"]
---

## توضیحات

به بازیکنان اجازه ویرایش آبجکت بازیکن (موقعیت و چرخش) با GUI و ماوس را می‌دهد.

| نام     | توضیحات                                         |
| -------- | ----------------------------------------------- |
| playerid | شناسه بازیکنی که باید آبجکت را ویرایش کند    |
| objectid | آبجکتی که باید توسط بازیکن ویرایش شود        |

## مقادیر بازگشتی

1: تابع با موفقیت اجرا شد.

0: تابع در اجرا ناموفق بود. بازیکن یا آبجکت معتبر نیست.

## مثال‌ها

```c
new object[MAX_PLAYERS];
public OnPlayerSpawn(playerid)
{
    object[playerid] = CreatePlayerObject(playerid, 1337, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/edit", true))
    {
        EditPlayerObject(playerid, object[playerid]);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: You now edit your object!");
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
- [EditAttachedObject](EditAttachedObject): ویرایش آبجکت چسبانده شده.
- [SelectObject](SelectObject): انتخاب یک آبجکت.
- [CancelEdit](CancelEdit): لغو ویرایش یک آبجکت.