---
title: OnPlayerClickTextDraw
sidebar_label: OnPlayerClickTextDraw
description: This callback is called when a player clicks on a textdraw or cancels the select mode with the Escape key.
tags: ["player", "textdraw"]
---

## คำอธิบาย

This callback is called when a player clicks on a textdraw or cancels the select mode with the Escape key.

| Name      | Description                                                                   |
| --------- | ----------------------------------------------------------------------------- |
| playerid  | The ID of the player that clicked on the textdraw.                            |
| clickedid | The ID of the clicked textdraw. INVALID_TEXT_DRAW if selection was cancelled. |

## ส่งคืน

It is always called first in filterscripts so returning 1 there also blocks other scripts from seeing it.

## ตัวอย่าง

```c
new Text:gTextDraw;

public OnGameModeInit()
{
    gTextDraw = TextDrawCreate(10.000000, 141.000000, "MyTextDraw");
    TextDrawTextSize(gTextDraw,60.000000, 20.000000);
    TextDrawAlignment(gTextDraw,0);
    TextDrawBackgroundColor(gTextDraw,0x000000ff);
    TextDrawFont(gTextDraw,1);
    TextDrawLetterSize(gTextDraw,0.250000, 1.000000);
    TextDrawColor(gTextDraw,0xffffffff);
    TextDrawSetProportional(gTextDraw,1);
    TextDrawSetShadow(gTextDraw,1);
    TextDrawSetSelectable(gTextDraw, 1);
    return 1;
}

public OnPlayerKeyStateChange(playerid, KEY:newkeys, KEY:oldkeys)
{
    if (newkeys == KEY_SUBMISSION)
    {
        TextDrawShowForPlayer(playerid, gTextDraw);
        SelectTextDraw(playerid, 0xFF4040AA);
    }
    return 1;
}

public OnPlayerClickTextDraw(playerid, Text:clickedid)
{
    if (clickedid == gTextDraw)
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

The clickable area is defined by TextDrawTextSize. The x and y parameters passed to that function must not be zero or negative. Do not use CancelSelectTextDraw unconditionally within this callback. This results in an infinite loop.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [OnPlayerClickPlayerTextDraw](../../scripting/callbacks/OnPlayerClickPlayerTextDraw.md): Called when a player clicks on a player-textdraw.
- [OnPlayerClickPlayer](../../scripting/callbacks/OnPlayerClickPlayer.md): Called when a player click on another.
