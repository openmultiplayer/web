---
title: BeginObjectEditing
sidebar_label: BeginObjectEditing
description: به بازیکن اجازه می‌دهد تا یک شی‌ء (موقعیت و چرخش) را با استفاده از ماوس در GUI (رابط گرافیکی کاربر) ویرایش کند.
tags: ["player", "object"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

به بازیکن اجازه می‌دهد تا یک شی‌ء (موقعیت و چرخش) را با استفاده از ماوس در GUI (رابط گرافیکی کاربر) ویرایش کند.

| نام      | توضیحات                                         |
| -------- | ------------------------------------------------- |
| playerid | شناسه بازیکنی که باید شی‌ء را ویرایش کند.        |
| objectid | شناسه شی‌ءی که توسط بازیکن ویرایش می‌شود.        |

## مقادیر بازگشتی

`true` - تابع با موفقیت اجرا شد. زمانی که شی‌ء غیر موجودی مشخص شود موفقیت گزارش می‌شود، اما هیچ اتفاقی نخواهد افتاد.

`false` - تابع در اجرا ناموفق بود. بازیکن متصل نیست.

## مثال‌ها

```c
new objectid;

public OnGameModeInit()
{
    objectid = CreateObject(1337, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/oedit", true))
    {
        BeginObjectEditing(playerid, objectid);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: You can now edit the object!");
        return 1;
    }
    return 0;
}
```

## نکات

:::tip

می‌توانید دوربین را حین ویرایش با فشردن و نگه داشتن کلید فاصله (یا W در وسیله نقلیه) و حرکت ماوس حرکت دهید.

:::

## توابع مرتبط

- [CreateObject](CreateObject): یک شی‌ء ایجاد می‌کند.
- [DestroyObject](DestroyObject): یک شی‌ء را نابود می‌کند.
- [MoveObject](MoveObject): یک شی‌ء را حرکت می‌دهد.
- [BeginPlayerObjectEditing](BeginPlayerObjectEditing): یک شی‌ء را ویرایش می‌کند.
- [EditAttachedObject](EditAttachedObject): یک شی‌ء متصل شده را ویرایش می‌کند.
- [BeginObjectSelecting](BeginObjectSelecting): یک شی‌ء را انتخاب می‌کند.
- [EndObjectEditing](EndObjectEditing): ویرایش یک شی‌ء را لغو می‌کند.
