---
title: OnPlayerUpdate
sidebar_label: OnPlayerUpdate
description: این کالبک هر بار که کلاینت/بازیکن سرور را با وضعیت خود به‌روزرسانی می‌کند، فراخوانده می‌شود.
tags: ["player"]
---

## توضیحات

این کالبک هر بار که کلاینت/بازیکن سرور را با وضعیت خود به‌روزرسانی می‌کند، فراخوانده می‌شود. اغلب برای ایجاد کالبک‌های سفارشی برای به‌روزرسانی‌های کلاینت که به طور فعال توسط سرور ردیابی نمی‌شوند، مثل به‌روزرسانی‌های سلامت یا زره یا تغییر سلاح بازیکنان استفاده می‌شود.

| نام     | توضیحات                                |
| -------- | ------------------------------------------ |
| playerid | شناسه بازیکنی که بسته به‌روزرسانی ارسال می‌کند. |

## مقادیر برگشتی

0 - به‌روزرسانی از این بازیکن به کلاینت‌های دیگر تکرار نخواهد شد.

1 - نشان می‌دهد که این به‌روزرسانی می‌تواند به طور معمول پردازش شده و به بازیکنان دیگر ارسال شود.

همیشه ابتدا در فیلتراسکریپت‌ها فراخوانده می‌شود.

## مثال‌ها

**مثال 1**

```c
new WEAPON:gPlayerCurrentWeapon[MAX_PLAYERS];

public OnPlayerUpdate(playerid)
{
    new WEAPON:weapon = GetPlayerWeapon(playerid); // Return the player's current weapon
    if (weapon != gPlayerCurrentWeapon[playerid]) // If he changed weapons since the last update
    {
        // Lets call a callback named OnPlayerWeaponChange
        CallLocalFunction("OnPlayerWeaponChange", "iii", playerid, gPlayerCurrentWeapon[playerid], weapon);
        gPlayerCurrentWeapon[playerid] = weapon; // Update the weapon variable
    }
    return 1; // Send this update to other players.
}

forward OnPlayerWeaponChange(playerid, WEAPON:oldWeapon, WEAPON:newWeapon);
public OnPlayerWeaponChange(playerid, WEAPON:oldWeapon, WEAPON:newWeapon)
{
    new
        string[128],
        oldWeaponName[24],
        newWeaponName[24];

    GetWeaponName(oldWeapon, oldWeaponName, sizeof(oldWeaponName));
    GetWeaponName(newWeapon, newWeaponName, sizeof(newWeaponName));

    format(string, sizeof(string), "You changed weapon from %s to %s!", oldWeaponName, newWeaponName);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

**مثال 2**

```c
public OnPlayerUpdate(playerid)
{
    new Float:fHealth;
    GetPlayerHealth(playerid, fHealth);

    if (fHealth != GetPVarFloat(playerid, "faPlayerHealth"))
    {
        // Player health has changed since the last update -> server, so obviously thats the thing updated.
        // Lets do further checks see if he's lost or gained health, anti-health cheat? ;)

        if (fHealth > GetPVarFloat(playerid, "faPlayerHealth"))
        {
            /* He has gained health! Cheating? Write your own scripts here to figure how a player
            gained health! */
        }
        else
        {
            /* He has lost health! */
        }

        SetPVarFloat(playerid, "faPlayerHealth", fHealth);
    }
}
```

## نکته‌ها

<TipNPCCallbacks />

:::warning

این کالبک به طور متوسط 30 بار در ثانیه برای هر بازیکن فراخوانده می‌شود؛ فقط زمانی از آن استفاده کنید که بدانید برای چه منظوری است (یا مهم‌تر اینکه برای چه نیست). فرکانس فراخوانی این کالبک برای هر بازیکن بسته به کاری که بازیکن انجام می‌دهد متفاوت است. رانندگی یا تیراندازی به‌روزرسانی‌های بیشتری نسبت به بی‌تحرکی ایجاد خواهد کرد.

:::