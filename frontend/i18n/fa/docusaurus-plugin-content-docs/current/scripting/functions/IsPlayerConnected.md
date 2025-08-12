---
title: IsPlayerConnected
sidebar_label: IsPlayerConnected
description: چک می‌کنه که بازیکن متصل هست یا نه (آیا یک شناسه توسط بازیکن متصل گرفته شده).
tags: ["player"]
---

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

چک می‌کنه که بازیکن متصل هست یا نه (آیا یک شناسه توسط بازیکن متصل گرفته شده).

| اسم      | توضیح                             |
| -------- | -------------------------------- |
| playerid | شناسه بازیکنی که می‌خوای چک کنی. |

## مقادیر برگشتی

**true** - بازیکن متصل هست.

**false** - بازیکن متصل نیست.

## مثال‌ها

</div>

```c
KillPlayer(playerid)
{
    if (!IsPlayerConnected(playerid))
    {
        printf("Player ID %i is not connected!", playerid);
    }
    else
    {
        SetPlayerHealth(playerid, 0.0);
    }
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

## نکته‌ها

:::tip

این تابع در خیلی از موارد می‌تونه حذف بشه. خیلی از تابع‌های دیگه از قبل نوعی چک اتصال داخلی دارن.

:::

## تابع‌های مرتبط

- [IsPlayerAdmin](IsPlayerAdmin): چک می‌کنه که بازیکن به RCON لاگین کرده یا نه.

## Callback های مرتبط

- [OnPlayerConnect](../callbacks/OnPlayerConnect): زمانی صدا زده میشه که بازیکن به سرور متصل میشه.
- [OnPlayerDisconnect](../callbacks/OnPlayerDisconnect): زمانی صدا زده میشه که بازیکن سرور رو ترک می‌کنه.

</div>