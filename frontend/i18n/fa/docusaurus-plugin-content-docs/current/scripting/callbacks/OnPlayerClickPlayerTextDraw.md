---
title: OnPlayerClickPlayerTextDraw
sidebar_label: OnPlayerClickPlayerTextDraw
description: این کالبک زمانی فراخوانده می‌شود که یک بازیکن روی یک player-textdraw کلیک کند.
tags: ["player", "textdraw", "playertextdraw"]
---

## توضیحات

این کالبک زمانی فراخوانده می‌شود که یک بازیکن روی یک player-textdraw کلیک کند. زمانی که بازیکن حالت انتخاب را لغو کند (ESC) فراخوانده نمی‌شود - اما OnPlayerClickTextDraw فراخوانده می‌شود.

| نام                     | توضیحات                                                |
| ----------------------- | ------------------------------------------------------- |
| playerid                | شناسه بازیکنی که textdraw را انتخاب کرد                |
| PlayerText:playertextid | شناسه player-textdraw که بازیکن آن را انتخاب کرده است. |

## مقادیر برگشتی

همیشه اول در filterscript ها فراخوانده می‌شود بنابراین برگرداندن 1 در آنجا سایر اسکریپت‌ها را از پردازش آن مسدود می‌کند.

## مثال‌ها

```c
new PlayerText:gPlayerTextDraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // Create the textdraw
    gPlayerTextDraw[playerid] = CreatePlayerTextDraw(playerid, 10.000000, 141.000000, "MyTextDraw");
    PlayerTextDrawTextSize(playerid, gPlayerTextDraw[playerid], 60.000000, 20.000000);
    PlayerTextDrawAlignment(playerid, gPlayerTextDraw[playerid], TEXT_DRAW_ALIGN_LEFT);
    PlayerTextDrawBackgroundColor(playerid, gPlayerTextDraw[playerid], 0x000000FF);
    PlayerTextDrawFont(playerid, gPlayerTextDraw[playerid], TEXT_DRAW_FONT_1);
    PlayerTextDrawLetterSize(playerid, gPlayerTextDraw[playerid], 0.250000, 1.000000);
    PlayerTextDrawColor(playerid, gPlayerTextDraw[playerid], -1);
    PlayerTextDrawSetProportional(playerid, gPlayerTextDraw[playerid], true);
    PlayerTextDrawSetShadow(playerid, gPlayerTextDraw[playerid], 1);

    // Make it selectable
    PlayerTextDrawSetSelectable(playerid, gPlayerTextDraw[playerid], true);

    // Show it to the player
    PlayerTextDrawShow(playerid, gPlayerTextDraw[playerid]);
    return 1;
}

public OnPlayerKeyStateChange(playerid, KEY:newkeys, KEY:oldkeys)
{
    if (newkeys == KEY_SUBMISSION)
    {
        SelectTextDraw(playerid, 0xFF4040AA);
    }
    return 1;
}

public OnPlayerClickPlayerTextDraw(playerid, PlayerText:playertextid)
{
    if (playertextid == gPlayerTextDraw[playerid])
    {
        SendClientMessage(playerid, 0xFFFFFFAA, "You clicked on a player-textdraw.");
        CancelSelectTextDraw(playerid);
        return 1;
    }
    return 0;
}
```

## نکته‌ها

:::warning

وقتی بازیکن ESC را فشار می‌دهد تا انتخاب textdraw را لغو کند، [OnPlayerClickTextDraw](OnPlayerClickTextDraw) با شناسه textdraw برابر 'INVALID_TEXT_DRAW' فراخوانده می‌شود. [OnPlayerClickPlayerTextDraw](OnPlayerClickPlayerTextDraw) نیز فراخوانده نخواهد شد.

:::

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [OnPlayerClickTextDraw](OnPlayerClickTextDraw): این کالبک زمانی فراخوانده می‌شود که بازیکن روی یک textdraw کلیک کند.
- [OnPlayerClickPlayer](OnPlayerClickPlayer): این کالبک زمانی فراخوانده می‌شود که بازیکن روی بازیکن دیگری کلیک کند.

## توابع مرتبط

توابع زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [PlayerTextDrawSetSelectable](../functions/PlayerTextDrawSetSelectable): تعیین می‌کند که آیا یک player-textdraw از طریق [SelectTextDraw](../functions/SelectTextDraw) قابل انتخاب است یا نه.