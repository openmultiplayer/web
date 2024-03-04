---
title: OnPlayerClickPlayerTextDraw
description: This callback is called when a player clicks on a player-textdraw.
tags: ["player", "textdraw", "playertextdraw"]
---

## คำอธิบาย

This callback is called when a player clicks on a player-textdraw. It is not called when player cancels the select mode (ESC) - however, OnPlayerClickTextDraw is.

| Name         | Description                                             |
| ------------ | ------------------------------------------------------- |
| playerid     | The ID of the player that selected a textdraw           |
| playertextid | The ID of the player-textdraw that the player selected. |

## ส่งคืน

It is always called first in filterscripts so returning 1 there also blocks other scripts from seeing it.

## ตัวอย่าง

```c
new PlayerText:gPlayerTextDraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // Create the textdraw
    gPlayerTextDraw[playerid] = CreatePlayerTextDraw(playerid, 10.000000, 141.000000, "MyTextDraw");
    PlayerTextDrawTextSize(playerid, gPlayerTextDraw[playerid], 60.000000, 20.000000);
    PlayerTextDrawAlignment(playerid, gPlayerTextDraw[playerid],0);
    PlayerTextDrawBackgroundColor(playerid, gPlayerTextDraw[playerid],0x000000ff);
    PlayerTextDrawFont(playerid, gPlayerTextDraw[playerid], 1);
    PlayerTextDrawLetterSize(playerid, gPlayerTextDraw[playerid], 0.250000, 1.000000);
    PlayerTextDrawColor(playerid, gPlayerTextDraw[playerid], 0xffffffff);
    PlayerTextDrawSetProportional(playerid, gPlayerTextDraw[playerid], 1);
    PlayerTextDrawSetShadow(playerid, gPlayerTextDraw[playerid], 1);

    // Make it selectable
    PlayerTextDrawSetSelectable(playerid, gPlayerTextDraw[playerid], 1);

    // Show it to the player
    PlayerTextDrawShow(playerid, gPlayerTextDraw[playerid]);
    return 1;
}

public OnPlayerKeyStateChange(playerid, newkeys, oldkeys)
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
         SendClientMessage(playerid, 0xFFFFFFAA, "You clicked on a textdraw.");
         CancelSelectTextDraw(playerid);
         return 1;
    }
    return 0;
}
```

## บันทึก

:::warning

When a player presses ESC to cancel selecting a textdraw, OnPlayerClickTextDraw is called with a textdraw ID of 'INVALID_TEXT_DRAW'. OnPlayerClickPlayerTextDraw won't be called also.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [PlayerTextDrawSetSelectable](../../scripting/functions/PlayerTextDrawSetSelectable.md): Sets whether a player-textdraw is selectable through SelectTextDraw
- [OnPlayerClickTextDraw](../../scripting/callbacks/OnPlayerClickTextDraw.md): Called when a player clicks on a textdraw.
- [OnPlayerClickPlayer](../../scripting/callbacks/OnPlayerClickPlayer.md): Called when a player click on another.
