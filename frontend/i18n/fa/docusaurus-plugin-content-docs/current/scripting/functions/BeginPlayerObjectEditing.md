---
title: BeginPlayerObjectEditing
sidebar_label: BeginPlayerObjectEditing
description: به بازیکنان اجازه می‌دهد تا یک شی‌ء بازیکن (موقعیت و چرخش) را با GUI و ماوس خود ویرایش کنند.
tags: ["player", "object", "playerobject"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

به بازیکنان اجازه می‌دهد تا یک شی‌ء بازیکن (موقعیت و چرخش) را با GUI و ماوس خود ویرایش کنند.

| نام      | توضیحات                                         |
| -------- | ------------------------------------------------ |
| playerid | شناسه بازیکنی که باید شی‌ء را ویرایش کند        |
| objectid | شی‌ءی که توسط بازیکن ویرایش می‌شود              |

## مقادیر بازگشتی

`true` - تابع با موفقیت اجرا شد.

`false` - تابع در اجرا ناموفق بود. بازیکن یا شی‌ء معتبر نیست.

## مثال‌ها

```c
new gPlayerObject[MAX_PLAYERS];

public OnPlayerSpawn(playerid)
{
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 1337, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/edit", true))
    {
        BeginPlayerObjectEditing(playerid, gPlayerObject[playerid]);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: You now edit your object!");
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
- [EditAttachedObject](EditAttachedObject): یک شی‌ء متصل شده را ویرایش می‌کند.
- [BeginObjectSelecting](BeginObjectSelecting): یک شی‌ء را انتخاب می‌کند.
- [EndObjectEditing](EndObjectEditing): ویرایش یک شی‌ء را لغو می‌کند.
