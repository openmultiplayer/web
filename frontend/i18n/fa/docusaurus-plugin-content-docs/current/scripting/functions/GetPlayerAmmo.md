---
title: GetPlayerAmmo
sidebar_label: GetPlayerAmmo
description: مقدار فشنگ موجود تو سلاح فعلی بازیکن رو برمیگردونه.
tags: ["player"]
---

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

مقدار فشنگ موجود تو سلاح فعلی بازیکن رو برمیگردونه.

| اسم     | توضیح                             |
| -------- | --------------------------------------- |
| playerid | شناسه بازیکنی که می‌خوای فشنگش رو بگیری. |

## مقادیر برگشتی

مقدار فشنگ موجود تو سلاح فعلی بازیکن.

## مثال‌ها

</div>

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/myammo", true))
    {
        new
            ammo = GetPlayerAmmo(playerid),
            string[32];

        format(string, sizeof(string), "Your ammo: %i", ammo);
        SendClientMessage(playerid, -1, string);
        return 1;
    }
    return 0;
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

## نکته‌ها

:::warning

فشنگ می‌تونه مقادیر 16-bit داشته باشه، بنابراین مقادیر بالای 32767 نتایج اشتباه برمیگردونن.

:::

## تابع‌های مرتبط

- [SetPlayerAmmo](SetPlayerAmmo): فشنگ سلاح مشخص بازیکن رو تنظیم می‌کنه.
- [GetPlayerWeaponData](GetPlayerWeaponData): اطلاعات سلاح‌های بازیکن رو برمیگردونه.

</div>