---
title: PlayerTextDrawSetString
sidebar_label: PlayerTextDrawSetString
description: متن یک player textdraw رو تغییر می‌ده.
tags: ["player", "textdraw", "playertextdraw"]
---

## توضیحات

متن یک player textdraw رو تغییر می‌ده.

| نام               | توضیحات                                     |
| ----------------- | ------------------------------------------- |
| playerid          | ID بازیکنی که رشته textdraw اون باید تنظیم بشه |
| PlayerText:textid | ID textdraw که باید تغییر کنه               |
| const format[]    | رشته جدید برای TextDraw                     |
| OPEN_MP_TAGS:...  | تعداد نامحدودی از آرگومان‌ها با هر tag.       |

## مقدار برگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
new PlayerText:pVehicleHealthTD[MAX_PLAYERS];
new pVehicleHealthTimer[MAX_PLAYERS];

public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    if (newstate == PLAYER_STATE_DRIVER) // Entered a vehicle as driver
    {
        pVehicleHealthTD[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, " ");
        PlayerTextDrawShow(playerid, pVehicleHealthTD[playerid]);

        // Set a timer to update the textdraw every second
        pVehicleHealthTimer[playerid] = SetTimerEx("UpdateVehicleHealthTextDraw", 1000, true, "i", playerid);
    }
    if (oldstate == PLAYER_STATE_DRIVER)
    {
        KillTimer(pVehicleHealthTimer[playerid]);
        PlayerTextDrawDestroy(playerid, pVehicleHealthTD[playerid]);
    }
    return 1;
}

forward UpdateVehicleHealthTextDraw(playerid);
public UpdateVehicleHealthTextDraw(playerid)
{
    new 
        string[32],
        vehicleid = GetPlayerVehicleID(playerid),
        Float:health;

    GetVehicleHealth(vehicleid, health);

    format(string, sizeof(string), "Vehicle Health: %.0f", health);
    PlayerTextDrawSetString(playerid, pVehicleHealthTD[playerid], string); // <<< Update the text to show the vehicle health

    // PRO TIP: You don't need `format` in open.mp
    PlayerTextDrawSetString(playerid, pVehicleHealthTD[playerid], "Vehicle Health: %.0f", health);
    return 1;
}

/*
NOTE: This example is purely for demonstration purposes, it is not guaranteed to work in-game. It is merely to show the usage of the PlayerTextDrawSetString function.
*/
```

## نکات

:::tip

لازم نیست دوباره TextDraw رو نمایش بدی تا تغییرات اعمال بشن.

:::

:::warning

برای طول رشته‌های textdraw محدودیت وجود داره! برای اطلاعات بیشتر [Limits](../resources/limits) رو ببین.

:::

## توابع مرتبط

- [CreatePlayerTextDraw](CreatePlayerTextDraw): ساخت یک player textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): از بین بردن یک player textdraw.
- [PlayerTextDrawGetString](PlayerTextDrawGetString): گرفتن متن یک player textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): تنظیم رنگ متن در یک player textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): تنظیم رنگ جعبه یک player textdraw.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): تنظیم رنگ پس‌زمینه یک player textdraw.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): تنظیم تراز یک player textdraw.
- [PlayerTextDrawFont](PlayerTextDrawFont): تنظیم فونت یک player textdraw.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): تنظیم اندازه حروف متن در یک player textdraw.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): تنظیم اندازه جعبه player textdraw (یا منطقه قابل کلیک برای PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): فعال/غیرفعال کردن outline روی یک player textdraw.
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): تنظیم سایه روی یک player textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): مقیاس کردن فاصله متن در یک player textdraw به نسبت متناسب.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): فعال/غیرفعال کردن جعبه روی یک player textdraw.
- [PlayerTextDrawShow](PlayerTextDrawShow): نمایش یک player textdraw.
- [PlayerTextDrawHide](PlayerTextDrawHide): مخفی کردن یک player textdraw.