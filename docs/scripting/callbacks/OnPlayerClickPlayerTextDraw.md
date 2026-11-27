---
title: "OnPlayerClickPlayerTextDraw | open.mp"
description: "This callback is called when a player clicks on a player-textdraw."
canonical: https://open.mp/docs/scripting/callbacks/OnPlayerClickPlayerTextDraw
language: en
---

# OnPlayerClickPlayerTextDraw

## Description

This callback is called when a player clicks on a player-textdraw. It is not called when player cancels the select mode (ESC) - however, [OnPlayerClickTextDraw](https://open.mp/docs/scripting/callbacks/OnPlayerClickTextDraw) is.

| Name | Description |
| --- | --- |
| playerid | The ID of the player that selected a textdraw |
| PlayerText:playertextid | The ID of the player-textdraw that the player selected. |

## Returns

Returning 1 in this callback will prevent it being called in other scripts. This should be used to signal that the textdraw on which they clicked was 'found' and no further processing is needed. You should return 0 if the textdraw on which they clicked wasn't found, just like in [OnPlayerCommandText](https://open.mp/docs/scripting/callbacks/OnPlayerCommandText).

It is always called first in filterscripts so returning 1 there also blocks other scripts from processing it.

## Examples

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

## Notes

warning

When a player presses ESC to cancel selecting a textdraw, [OnPlayerClickTextDraw](https://open.mp/docs/scripting/callbacks/OnPlayerClickTextDraw) is called with a textdraw ID of 'INVALID\_TEXT\_DRAW'. [OnPlayerClickPlayerTextDraw](https://open.mp/docs/scripting/callbacks/OnPlayerClickPlayerTextDraw) won't be called also.

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another.

-   [OnPlayerClickTextDraw](https://open.mp/docs/scripting/callbacks/OnPlayerClickTextDraw): This callback is called when a player clicks on a textdraw.
-   [OnPlayerClickPlayer](https://open.mp/docs/scripting/callbacks/OnPlayerClickPlayer): This callback is called when a player click on another.

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

-   [PlayerTextDrawSetSelectable](https://open.mp/docs/scripting/functions/PlayerTextDrawSetSelectable): Sets whether a player-textdraw is selectable through [SelectTextDraw](https://open.mp/docs/scripting/functions/SelectTextDraw)
