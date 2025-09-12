---
title: GetPlayerWeapon
sidebar_label: GetPlayerWeapon
description: ID اسلحه‌ای که بازیکن در حال حاضر در دست دارد را برمی‌گرداند.
tags: ["player"]
---

## توضیحات

ID اسلحه‌ای که بازیکن در حال حاضر در دست دارد را برمی‌گرداند.

| نام     | توضیحات                                               |
| -------- | --------------------------------------------------------- |
| playerid | ID بازیکن برای دریافت اسلحه فعلی‌اش. |

## مقادیر برگشتی

ID اسلحه فعلی بازیکن. -1 برمی‌گرداند اگر بازیکن مشخص شده وجود نداشته باشد.

## مثال‌ها

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    // Check if the killerid is not an invalid player (which means is connected).
    if (killerid != INVALID_PLAYER_ID)
    {
        // The WEAPON_MINIGUN constant is pre-defined in the standard library and is equal to 38.
        if (GetPlayerWeapon(killerid) == WEAPON_MINIGUN)
        {
            //Ban if they have a minigun
            Ban(killerid);
        }
    }
    return 1;
}
```

## نکات

:::tip

زمانی که وضعیت بازیکن `PLAYER_STATE_DRIVER` یا `PLAYER_STATE_PASSENGER` است، این تابع اسلحه‌ای را برمی‌گرداند که بازیکن قبل از ورود به وسیله نقلیه در دست داشته است. اگر از cheat برای spawn کردن اسلحه در وسیله نقلیه استفاده شود، این تابع آن را گزارش نخواهد کرد.

:::

:::warning

گاهی اوقات نتیجه می‌تواند -1 باشد که ID اسلحه نامعتبری است. شرایط این موضوع هنوز مشخص نیست، اما بهتر است اطلاعات را زمانی که اسلحه برگشتی -1 است نادیده بگیرید.

:::

## توابع مرتبط

- [GetPlayerWeaponData](GetPlayerWeaponData): کسب اطلاعات از اسلحه‌های بازیکن.
- [GivePlayerWeapon](GivePlayerWeapon): دادن اسلحه به بازیکن.
- [ResetPlayerWeapons](ResetPlayerWeapons): حذف همه اسلحه‌ها از بازیکن.
- [RemovePlayerWeapon](RemovePlayerWeapon): حذف اسلحه مشخصی از بازیکن.

## منابع مرتبط

- [Weapon IDs](../resources/weaponids)