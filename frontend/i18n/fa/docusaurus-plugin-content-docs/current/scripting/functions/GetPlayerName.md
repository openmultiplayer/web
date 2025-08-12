---
title: GetPlayerName
sidebar_label: GetPlayerName
description: اسم بازیکن رو می‌گیره.
tags: ["player"]
---

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

اسم بازیکن رو می‌گیره.

| اسم     | توضیح                                                                                                                                     |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid | شناسه بازیکنی که می‌خوای اسمش رو بگیری.                                                                                                        |
| name[]   | آرایه‌ای که اسم توش ذخیره میشه، که با reference پاس داده میشه.                                                                                     |
| len      | طول رشته‌ای که باید ذخیره بشه. پیشنهادی MAX_PLAYER_NAME + 1 هست. +1 برای null terminator لازمه. |

## مقادیر برگشتی

طول اسم بازیکن رو برمی‌گردونه.

**0** اگه بازیکن مشخص شده وجود نداشته باشه.

## مثال‌ها

</div>

```c
public OnPlayerConnect(playerid)
{
    // اسم بازیکنی که وصل شده رو بگیر و پیام join رو برای بقیه بازیکنا نمایش بده

    new name[MAX_PLAYER_NAME + 1];
    GetPlayerName(playerid, name, sizeof(name));

    new string[128];
    format(string, sizeof(string), "%s has joined the server.", name);
    SendClientMessageToAll(0xC4C4C4FF, string);

    return 1;
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

## نکته‌ها

:::tip

اسم بازیکن می‌تونه با استفاده از [SetPlayerName](SetPlayerName) تا 24 کاراکتر طولانی باشه.

این به عنوان `MAX_PLAYER_NAME` تعریف شده.

ولی کلاینت فقط می‌تونه با نیک‌نیم بین 3 تا 20 کاراکتر join بشه، وگرنه connection رد میشه و بازیکن باید quit کنه تا اسم معتبری انتخاب کنه.

:::

## تابع‌های مرتبط

- [SetPlayerName](SetPlayerName): تنظیم اسم بازیکن.
- [IsValidNickName](IsValidNickName): چک کردن معتبر بودن نیک‌نیم.
- [GetPlayerIp](GetPlayerIp): گرفتن IP بازیکن.
- [GetPlayerPing](GetPlayerPing): گرفتن پینگ بازیکن.
- [GetPlayerScore](GetPlayerScore): گرفتن امتیاز بازیکن.
- [GetPlayerVersion](GetPlayerVersion): گرفتن ورژن کلاینت بازیکن.

</div>