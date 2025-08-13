---
title: SetVehicleParamsForPlayer
sidebar_label: SetVehicleParamsForPlayer
description: پارامترهای یه ماشین رو برای یه پلیر تنظیم می‌کنه.
tags: ["player", "vehicle"]
---

## توضیحات

پارامترهای یه ماشین رو برای یه پلیر تنظیم می‌کنه.

| نام              | توضیحات                                                                                              |
| ---------------- | -------------------------------------------------------------------------------------------------------- |
| vehicle          | ID ماشینی که می‌خوای پارامترهاش رو تنظیم کنی.                                                          |
| playerid         | ID پلیری که می‌خوای پارامترهای ماشین برای اون تنظیم کنی.                                                |
| bool:objective   | 'false' برای غیرفعال کردن objective یا 'true' برای نمایش دادنش. این یه فلش زرد نوسان کننده بالای ماشین هست. |
| bool:doorslocked | 'false' برای باز کردن قفل درها یا 'true' برای قفل کردنشون.                                                      |

## مقدار برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا ناکام بود. پلیر و/یا ماشین مشخص شده وجود نداره.

## مثال‌ها

```c
// yek zamani ghablan:
SetVehicleParamsForPlayer(iPlayerVehicle, iPlayerID, true, false);

// yek zamani bad ke mikhay vehicle respawn beshe:
new
    bool:iEngine, bool:iLights, bool:iAlarm,
    bool:iDoors, bool:iBonnet, bool:iBoot,
    bool:iObjective;

GetVehicleParamsEx(iPlayerVehicle, iEngine, iLights, iAlarm, iDoors, iBonnet, iBoot, iObjective);
SetVehicleParamsEx(iPlayerVehicle, iEngine, iLights, iAlarm, iDoors, iBonnet, iBoot, false);

// mashin khodesho baraye hame playera gholf mikone, joz playeri ke command ro zade.
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/lock", true))
    {
        if (!IsPlayerInAnyVehicle(playerid))
        {
            return SendClientMessage(playerid,0xFFFFFFAA,"You have to be inside a vehicle.");
        }

        for (new i = 0; i < MAX_PLAYERS; i++)
        {
            if (i == playerid)
            {
                continue;
            }
            SetVehicleParamsForPlayer(GetPlayerVehicleID(playerid), i, false, true);
        }
        return 1;
    }
    return 0;
}

// vehicle marker haro baraye playerayi ke stream mishan neshon mide 0.3a+
new bool:iVehicleObjective[MAX_VEHICLES][2];

public OnGameModeInit() //ya yek callback dige
{
    new temp = AddStaticVehicleEx(400, 0.0, 0.0, 5.0, 0.0, 0, 0, -1); //ID 1
    iVehicleObjective[temp][0] = true; //Marker
    iVehicleObjective[temp][1] = false; //Door Lock
    return 1;
}

stock SetVehicleParamsForPlayerEx(vehicleid, playerid, bool:objective, bool:doorslocked)
{
    SetVehicleParamsForPlayer(vehicleid, playerid, objective, doorslocked);
    iVehicleObjective[vehicleid][0] = objective;
    iVehicleObjective[vehicleid][1] = doorslocked;
}

public OnVehicleStreamIn(vehicleid, forplayerid)
{
    SetVehicleParamsForPlayer(vehicleid, forplayerid, iVehicleObjective[vehicleid][0], iVehicleObjective[vehicleid][1]);
}

//Top
new myMarkedCar;

public OnGameModeInit() //ya yek callback dige
{
    myMarkedCar = AddStaticVehicleEx(400, 0.0, 0.0, 5.0, 0.0, 0, 0, -1); // mesal: Black Landstalker nazdike Blueberry Acres
    return 1;
}

//har chi ke mikhay
public OnVehicleStreamIn(vehicleid, forplayerid)
{
    if (vehicleid == myMarkedCar)
    {
        SetVehicleParamsForPlayer(myMarkedCar, forplayerid, true, false); // marker faghat age vehicle baraye player stream bashe mituname morede bashe
    }
    return 1;
}
```

## نکات

:::tip

ماشین‌ها باید respawn بشن تا 'objective' حذف بشه.

:::

:::warning

باید این تابع رو دوباره اعمال کنی وقتی [OnVehicleStreamIn](../callbacks/OnVehicleStreamIn) صدا زده می‌شه.

:::

## توابع مرتبط

- [SetVehicleParamsEx](SetVehicleParamsEx): پارامترهای یه ماشین رو برای همه پلیرها تنظیم می‌کنه.