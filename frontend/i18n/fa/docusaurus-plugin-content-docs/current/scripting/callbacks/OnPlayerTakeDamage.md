---
title: OnPlayerTakeDamage
sidebar_label: OnPlayerTakeDamage
description: این کالبک زمانی فراخوانده می‌شود که یک بازیکن آسیب ببیند.
tags: ["player"]
---

## توضیحات

این کالبک زمانی فراخوانده می‌شود که یک بازیکن آسیب ببیند.

| نام             | توضیحات                                                                           |
| --------------- | --------------------------------------------------------------------------------- |
| playerid        | شناسه بازیکنی که آسیب دیده است.                                                  |
| issuerid        | شناسه بازیکنی که آسیب وارد کرده است. INVALID_PLAYER_ID اگر خودزنی باشد.           |
| Float:amount    | مقدار آسیب که بازیکن دیده است (سلامتی و زره ترکیبی).                            |
| WEAPON:weaponid | شناسه اسلحه/دلیل آسیب.                                                           |
| bodypart        | [قسمت بدن](../resources/bodyparts) که مورد اصابت قرار گرفته است.                 |

## مقادیر برگشتی

1 - کالبک در filterscript های دیگر فراخوانده نخواهد شد.

0 - اجازه می‌دهد این کالبک در filterscript های دیگر فراخوانده شود.

همیشه اول در filterscript ها فراخوانده می‌شود بنابراین برگرداندن 1 در آنجا سایر filterscript ها را از پردازش آن مسدود می‌کند.

## مثال‌ها

```c
public OnPlayerTakeDamage(playerid, issuerid, Float:amount, WEAPON:weaponid, bodypart)
{
    if (issuerid != INVALID_PLAYER_ID) // If not self-inflicted
    {
        new
            infoString[128],
            weaponName[24],
            victimName[MAX_PLAYER_NAME],
            attackerName[MAX_PLAYER_NAME];

        GetPlayerName(playerid, victimName, sizeof (victimName));
        GetPlayerName(issuerid, attackerName, sizeof (attackerName));

        GetWeaponName(weaponid, weaponName, sizeof (weaponName));

        format(infoString, sizeof(infoString), "%s has made %.0f damage to %s, weapon: %s, bodypart: %d", attackerName, amount, victimName, weaponName, bodypart);
        SendClientMessageToAll(-1, infoString);
    }
    return 1;
}
```

<br />

```c
public OnPlayerTakeDamage(playerid, issuerid, Float:amount, WEAPON:weaponid, bodypart)
{
    if (issuerid != INVALID_PLAYER_ID && weaponid == 34 && bodypart == 9)
    {
        // One shot to the head to kill with sniper rifle
        SetPlayerHealth(playerid, 0.0);
    }
    return 1;
}
```

## نکته‌ها

:::tip

- weaponid مقدار 37 (flame thrower) را از هر منبع آتش (مثل مولوتوف، 18) برخواهد گرداند.
- weaponid مقدار 51 را از هر اسلحه‌ای که انفجار ایجاد می‌کند (مثل RPG، نارنجک) برخواهد گرداند
- **playerid** تنها کسی است که می‌تواند کالبک را فراخوانی کند.
- amount همیشه حداکثر آسیبی است که weaponid می‌تواند وارد کند، حتی وقتی سلامتی باقی‌مانده کمتر از آن حداکثر آسیب باشد. بنابراین وقتی بازیکن 100.0 سلامتی دارد و با Desert Eagle که مقدار آسیب 46.2 دارد شلیک می‌شود، برای کشتن آن بازیکن 3 تیر لازم است. هر 3 تیر مقدار 46.2 را نشان خواهند داد، حتی وقتی تیر آخر برخورد کند، بازیکن فقط 7.6 سلامتی باقی دارد.

:::

:::warning

- [GetPlayerHealth](../functions/GetPlayerHealth) و [GetPlayerArmour](../functions/GetPlayerArmour) مقادیر قدیمی بازیکن را قبل از این کالبک برخواهند گرداند.
- همیشه قبل از استفاده از issuerid به عنوان ایندکس آرایه، بررسی کنید که معتبر است.

:::

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [OnPlayerGiveDamage](OnPlayerGiveDamage): این کالبک زمانی فراخوانده می‌شود که بازیکن آسیب وارد کند.
- [OnPlayerWeaponShot](OnPlayerWeaponShot): این کالبک زمانی فراخوانده می‌شود که بازیکن با اسلحه تیراندازی کند.

## منابع مرتبط

- [Body Parts](../resources/bodyparts)