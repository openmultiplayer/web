---
title: PutPlayerInVehicle
sidebar_label: PutPlayerInVehicle
description: قرار دادن یک بازیکن در وسیله نقلیه
tags: ["player", "vehicle"]
---

## توضیحات

یک بازیکن رو در وسیله نقلیه قرار می‌ده.

| نام       | توضیحات                                      |
| --------- | -------------------------------------------- |
| playerid  | آی‌دی بازیکنی که باید در وسیله نقلیه قرار بگیره.  |
| vehicleid | آی‌دی وسیله نقلیه ای که بازیکن باید توش قرار بگیره. |
| seatid    | آی‌دی صندلی که بازیکن باید روی قرار بگیره.      |

## مقادیر بازگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع اجرا نشد. بازیکن یا وسیله نقلیه وجود نداره.

## مثال‌ها

```c
// Global array baraye radgirigiye inke kodum vehicle motealeq be har player hast.
// INVALID_VEHICLE_ID baraye placeholder playerhayi ke vehicle nadarand estefade mishe.
static s_PlayerVehicle[MAX_PLAYERS] = { INVALID_VEHICLE_ID, ... };

public OnPlayerSpawn(playerid)
{
    // Check mikonim age player ghablan vehicle dashteh ya na.
    if (!IsValidVehicle(s_PlayerVehicle[playerid]))
    {
        // Age nadareh, ye vehicle jadid barash misazim va ID esh ro zakhire mikonim.
        s_PlayerVehicle[playerid] = CreateVehicle(411, 0.0, 0.0, 3.5, 0.0, -1, -1, -1);
    }

    // Moshakhas mikonim ke player bayad dar vehicle gharar begireh vaghti ke kamel load shod.
    // In az moshkelat jologirigiri mikone ke vehicle hanuz dar samte client load nashode bashe.
    SetPVarInt(playerid, "PutPlayerInVehicle", 1);

    return 1;
}

public OnVehicleStreamIn(vehicleid, forplayerid)
{
    // In callback vaghti ejra mishe ke ye vehicle baraye player stream in mishe (yaani dar hafeze load mishe).
    // Check mikonim age vehicle ke stream in shode motealeq be hamun player bashe va lazem bashe dar un gharar begire.
    if (vehicleid == s_PlayerVehicle[forplayerid] && GetPVarInt(forplayerid, "PutPlayerInVehicle"))
    {
        // Player ro dar vehicle gharar midim.
        PutPlayerInVehicle(forplayerid, vehicleid, 0);

        // Marker ro pak mikonim ta az tekrar gharar dadan player dar vehicle
        // jologirigiri konim (meslan age player az vehicle biyad birun va dobre stream in beshe).
        DeletePVar(forplayerid, "PutPlayerInVehicle");
    }

    return 1;
}
```

| آی‌دی | صندلی                         |
| ----- | ---------------------------- |
| 0     | راننده                        |
| 1     | مسافر جلو                     |
| 2     | مسافر عقب چپ                  |
| 3     | مسافر عقب راست                |
| 4+    | صندلی‌های مسافر (اتوبوس و غیره) |

## نکات

:::tip

می‌تونی از [GetPlayerVehicleSeat](GetPlayerVehicleSeat) در یک حلقه استفاده کنی تا چک کنی که آیا یک صندلی توسط کسی اشغال شده یا نه.

:::

:::warning

- اگه صندلی نامعتبر باشه یا قبلاً گرفته شده باشه، کلاینت هنگ می‌کنه وقتی از وسیله نقلیه خارج می‌شه.
- قرار دادن بازیکن در وسیله نقلیه ای که stream نشده می‌تونه غیرقابل اعتماد باشه. این به خاطر مشکل احتمالی کلاینت هست که وسیله نقلیه ممکنه هنوز کاملاً در حافظه لود نشده باشه.
- این موضوع وقتی هم اعمال می‌شه که می‌خوای بازیکن رو در وسیله نقلیه ای بذاری که تازه ساخته شده.

:::

## توابع مرتبط

- [RemovePlayerFromVehicle](RemovePlayerFromVehicle): بازیکن رو از وسیله نقلیه‌ش بیرون انداختن.
- [GetPlayerVehicleID](GetPlayerVehicleID): دریافت آی‌دی وسیله نقلیه ای که بازیکن توش هست.
- [GetPlayerVehicleSeat](GetPlayerVehicleSeat): بررسی اینکه بازیکن روی کدوم صندلی نشسته.
- [GetVehicleSeats](GetVehicleSeats): دریافت تعداد صندلی‌های موجود در وسیله نقلیه.

## Callback های مرتبط

- [OnPlayerEnterVehicle](../callbacks/OnPlayerEnterVehicle): وقتی فراخوانی می‌شه که بازیکن شروع به ورود به وسیله نقلیه می‌کنه.