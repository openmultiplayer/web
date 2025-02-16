---
title: OnPlayerClickTextDraw
sidebar_label: OnPlayerClickTextDraw
description: This callback is called when a player clicks on a textdraw or cancels the select mode with the Escape key.
tags: ["player", "textdraw"]
---

## Description

This callback is called when a player clicks on a textdraw or cancels the select mode with the Escape key.

| Name           | Description                                                                   |
| -------------- | ----------------------------------------------------------------------------- |
| playerid       | The ID of the player that clicked on the textdraw.                            |
| Text:clickedid | The ID of the clicked textdraw. INVALID_TEXT_DRAW if selection was cancelled. |

## Returns

It is always called first in filterscripts so returning 1 there also blocks other scripts from seeing it.

## Examples

```c
new Text:gTextDraw;

public OnGameModeInit()
{
    gTextDraw = TextDrawCreate(10.000000, 141.000000, "MyTextDraw");
    TextDrawTextSize(gTextDraw, 60.000000, 20.000000);
    TextDrawAlignment(gTextDraw, TEXT_DRAW_ALIGN_LEFT);
    TextDrawBackgroundColor(gTextDraw, 0x000000FF);
    TextDrawFont(gTextDraw, TEXT_DRAW_FONT_1);
    TextDrawLetterSize(gTextDraw, 0.250000, 1.000000);
    TextDrawColor(gTextDraw, -1);
    TextDrawSetProportional(gTextDraw, true);
    TextDrawSetShadow(gTextDraw, 1);
    TextDrawSetSelectable(gTextDraw, true);
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

## Notes

:::warning

- The clickable area is defined by [TextDrawTextSize](../functions/TextDrawTextSize).
- The `x` and `y` parameters passed to that function must not be zero or negative.
- Do not use [CancelSelectTextDraw](../functions/CancelSelectTextDraw) unconditionally within this callback. This results in an **infinite loop**.

:::

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another. 

- [OnPlayerClickPlayerTextDraw](OnPlayerClickPlayerTextDraw): This callback is called when a player clicks on a player-textdraw.
- [OnPlayerClickPlayer](OnPlayerClickPlayer): This callback is called when a player click on another.

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another. 

- [SelectTextDraw](../functions/SelectTextDraw): Enables the mouse, so the player can select a textdraw.
- [CancelSelectTextDraw](../functions/CancelSelectTextDraw): Cancel textdraw selection with the mouse.
