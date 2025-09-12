---
title: OnPlayerGiveDamageActor
sidebar_label: OnPlayerGiveDamageActor
description: این کالبک زمانی فراخوانده می‌شود که یک بازیکن به یک اکتور آسیب برساند.
tags: ["player", "actor"]
---

<VersionWarn name='callback' version='SA-MP 0.3.7' />

## توضیحات

این کالبک زمانی فراخوانده می‌شود که یک بازیکن به یک اکتور آسیب برساند.

| نام             | توضیحات                                                        |
| --------------- | ----------------------------------------------------- |
| playerid        | شناسه بازیکنی که آسیب زده است.                                |
| damaged_actorid | شناسه اکتوری که آسیب دیده است.                              |
| Float:amount    | مقدار سلامتی/زره که damaged_actorid از دست داده است.        |
| WEAPON:weaponid | دلیلی که باعث آسیب شده است.                                   |
| bodypart        | [قسمت بدن](../resources/bodyparts) که مورد اصابت قرار گرفته |

## مقادیر برگشتی

1 - کالبک در filterscript های دیگر فراخوانده نخواهد شد.

0 - اجازه می‌دهد این کالبک در filterscript های دیگر فراخوانده شود.

همیشه اول در filterscript ها فراخوانده می‌شود بنابراین برگرداندن 1 در آنجا سایر filterscript ها را از پردازش آن مسدود می‌کند.

## مثال‌ها

```c
public OnPlayerGiveDamageActor(playerid, damaged_actorid, Float:amount, WEAPON:weaponid, bodypart)
{
    new string[128];
    new attackerName[MAX_PLAYER_NAME];
    new weaponName[24];

    GetPlayerName(playerid, attackerName, sizeof (attackerName));
    GetWeaponName(weaponid, weaponName, sizeof (weaponName));

    format(string, sizeof(string), "%s has made %.0f damage to actor id %d, weapon: %s", attackerName, amount, damaged_actorid, weaponName);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## نکته‌ها

:::tip

اگر اکتور تنظیم شده به عنوان غیرقابل آسیب باشد (که به طور پیش‌فرض است) این تابع فراخوانده نمی‌شود. [SetActorInvulnerable](../functions/SetActorInvulnerable) را ببینید.

:::

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [OnActorStreamOut](OnActorStreamOut): این کالبک زمانی فراخوانده می‌شود که اکتور توسط کلاینت بازیکن از stream خارج شود.
- [OnActorStreamIn](OnActorStreamOut): این کالبک زمانی فراخوانده می‌شود که اکتور توسط کلاینت بازیکن به stream وارد شود.

## توابع مرتبط

توابع زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [CreateActor](../functions/CreateActor): ایجاد یک اکتور (NPC ثابت).
- [SetActorInvulnerable](../functions/SetActorInvulnerable): تنظیم اکتور به عنوان غیرقابل آسیب.
- [SetActorHealth](../functions/SetActorHealth): تنظیم سلامتی اکتور.
- [GetActorHealth](../functions/GetActorHealth): دریافت سلامتی اکتور.
- [IsActorInvulnerable](../functions/IsActorInvulnerable): بررسی اینکه آیا اکتور غیرقابل آسیب است یا نه.
- [IsValidActor](../functions/IsValidActor): بررسی اینکه آیا شناسه اکتور معتبر است یا نه.

## منابع مرتبط

- [Body Parts](../resources/bodyparts)