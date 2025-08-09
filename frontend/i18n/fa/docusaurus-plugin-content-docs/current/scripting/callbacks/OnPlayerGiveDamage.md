---
title: OnPlayerGiveDamage
sidebar_label: OnPlayerGiveDamage
description: این کالبک زمانی فراخوانده می‌شود که یک بازیکن به بازیکن دیگری آسیب برساند.
tags: ["player"]
---

## توضیحات

این کالبک زمانی فراخوانده می‌شود که یک بازیکن به بازیکن دیگری آسیب برساند.

| نام             | توضیحات                                                        |
| --------------- | ---------------------------------------------------------- |
| playerid        | شناسه بازیکنی که آسیب زده است.                               |
| damagedid       | شناسه بازیکنی که آسیب دیده است.                               |
| Float:amount    | مقدار سلامتی/زره که damagedid از دست داده است (ترکیبی).      |
| WEAPON:weaponid | دلیلی که باعث آسیب شده است.                                   |
| bodypart        | [قسمت بدن](../resources/bodyparts) که مورد اصابت قرار گرفته. |

## مقادیر برگشتی

1 - کالبک در filterscript های دیگر فراخوانده نخواهد شد.

0 - اجازه می‌دهد این کالبک در filterscript های دیگر فراخوانده شود.

همیشه اول در filterscript ها فراخوانده می‌شود بنابراین برگرداندن 1 در آنجا سایر filterscript ها را از پردازش آن مسدود می‌کند.

## مثال‌ها

```c
public OnPlayerGiveDamage(playerid, damagedid, Float:amount, WEAPON:weaponid, bodypart)
{
    new string[128], victim[MAX_PLAYER_NAME], attacker[MAX_PLAYER_NAME];
    new weaponname[24];
    GetPlayerName(playerid, attacker, sizeof (attacker));
    GetPlayerName(damagedid, victim, sizeof (victim));

    GetWeaponName(weaponid, weaponname, sizeof (weaponname));
    format(string, sizeof(string), "%s has made %.0f damage to %s, weapon: %s, bodypart: %d", attacker, amount, victim, weaponname, bodypart);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## نکته‌ها

:::tip

- در نظر داشته باشید که این تابع ممکن است در برخی موارد نادرست باشد.
- اگر می‌خواهید از آسیب رساندن بازیکنان خاص به یکدیگر جلوگیری کنید، از [SetPlayerTeam](../functions/SetPlayerTeam) استفاده کنید.
- weaponid مقدار 37 (flame thrower) را از هر منبع آتش (مثل مولوتوف، 18) برخواهد گرداند
- weaponid مقدار 51 را از هر اسلحه‌ای که انفجار ایجاد می‌کند (مثل RPG، نارنجک) برخواهد گرداند
- **playerid** تنها کسی است که می‌تواند کالبک را فراخوانی کند.
- amount همیشه حداکثر آسیبی است که weaponid می‌تواند وارد کند، حتی وقتی سلامتی باقی‌مانده کمتر از آن حداکثر آسیب باشد. بنابراین وقتی بازیکن 100.0 سلامتی دارد و با Desert Eagle که مقدار آسیب 46.2 دارد شلیک می‌شود، برای کشتن آن بازیکن 3 تیر لازم است. هر 3 تیر مقدار 46.2 را نشان خواهند داد، حتی وقتی تیر آخر برخورد کند، بازیکن فقط 7.6 سلامتی باقی دارد.

:::

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [OnPlayerTakeDamage](OnPlayerTakeDamage): این کالبک زمانی فراخوانده می‌شود که بازیکن آسیب ببیند.
- [OnPlayerWeaponShot](OnPlayerWeaponShot): این کالبک زمانی فراخوانده می‌شود که بازیکن با اسلحه تیراندازی کند.

## منابع مرتبط

- [Body Parts](../resources/bodyparts)