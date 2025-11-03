---
title: GetVehicleComponentInSlot
sidebar_label: GetVehicleComponentInSlot
description: ID کامپوننت نصب شده (modshop mod) روی یه وسیله نقلیه در یه slot خاص رو دریافت می‌کنه.
tags: ["vehicle"]
---

## توضیحات

ID کامپوننت نصب شده (modshop mod) روی یه وسیله نقلیه در یه slot خاص رو دریافت می‌کنه.

| نام            | توضیحات                                                                |
| --------------- | -------------------------------------------------------------------------- |
| vehicleid       | ID وسیله نقلیه‌ای که می‌خوای کامپوننت‌ش رو چک کنی.                          |
| CARMODTYPE:slot | [slot کامپوننت](../resources/componentslots) که می‌خوای برای کامپوننت چک کنی. |

## مقادیر برگشتی

ID کامپوننت نصب شده در slot مشخص شده.

**0** برمی‌گردونه اگه هیچ کامپوننتی در slot مشخص شده وسیله نقلیه نباشه، یا اگه وسیله نقلیه وجود نداشته باشه.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/myspoiler", cmdtext, true))
    {
        if (!IsPlayerInAnyVehicle(playerid))
        {
            return 1;
        }

        new
            component = GetVehicleComponentInSlot(GetPlayerVehicleID(playerid), CARMODTYPE_SPOILER);

        if (component == 1049)
        {
            SendClientMessage(playerid, -1, "You have an Alien spoiler installed in your Elegy!");
        }
        return 1;
    }
    return 0;
}
```

## نکات

:::warning

Bug های شناخته شده:

- برای CARMODTYPE_STEREO کار نمی‌کنه.
- هم front bull bars و هم front bumper کامپوننت‌ها در slot CARMODTYPE_FRONT_BUMPER ذخیره می‌شن. اگه یه وسیله نقلیه هر دوتاشون رو نصب داشته باشه، این تابع فقط اونی رو برمی‌گردونه که آخری نصب شده. 
- هم rear bull bars و هم rear bumper کامپوننت‌ها در slot CARMODTYPE_REAR_BUMPER ذخیره می‌شن. اگه یه وسیله نقلیه هر دوتاشون رو نصب داشته باشه، این تابع فقط اونی رو برمی‌گردونه که آخری نصب شده.
- هم left side skirt و هم right side skirt در slot CARMODTYPE_SIDESKIRT ذخیره می‌شن. اگه یه وسیله نقلیه هر دوتاشون رو نصب داشته باشه، این تابع فقط اونی رو برمی‌گردونه که آخری نصب شده.

:::

## توابع مرتبط

- [AddVehicleComponent](AddVehicleComponent): اضافه کردن کامپوننت به وسیله نقلیه.
- [GetVehicleComponentType](GetVehicleComponentType): بررسی نوع کامپوننت از طریق ID.

## Callback های مرتبط

- [OnVehicleMod](../callbacks/OnVehicleMod): وقتی یه وسیله نقلیه مود می‌شه فراخوانی می‌شه.
- [OnEnterExitModShop](../callbacks/OnEnterExitModShop): وقتی یه وسیله نقلیه وارد یا خارج mod shop می‌شه فراخوانی می‌شه.

## منابع مرتبط

- [Vehicle Component Slots](../resources/componentslots)