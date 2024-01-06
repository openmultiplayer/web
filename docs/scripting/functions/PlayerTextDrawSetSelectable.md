---
title: PlayerTextDrawSetSelectable
description: Toggles whether a player-textdraw can be selected or not.
tags: ["player", "textdraw", "playertextdraw"]
---

<VersionWarn version='SA-MP 0.3e' />

## Description

Toggles whether a player-textdraw can be selected or not.

| Name            | Description                                                                         |
| --------------- | ----------------------------------------------------------------------------------- |
| playerid        | The ID of the player whose player-textdraw to set the selectability of.             |
| PlayerText:text | The ID of the player-textdraw to set the selectability of.                          |
| set             | Set the player-textdraw selectable (1) or non-selectable (0). By default this is 0. |

## Returns

This function does not return any specific values.

## Examples

```c
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my server");
    PlayerTextDrawTextSize(playerid, welcomeText[playerid], 30.0, 10.0);
    
    // Set 'welcomeText[playerid]' selectable
    PlayerTextDrawSetSelectable(playerid, welcomeText[playerid], true);

    // Enable select textdraw for player
    SelectTextDraw(playerid, 0xFF0000FF);

    // Show 'welcomeText[playerid]' to the player
    PlayerTextDrawShow(playerid, welcomeText[playerid]);

    return 1;
}
```

## Notes

:::tip

Use [PlayerTextDrawTextSize](PlayerTextDrawTextSize) to define the clickable area.

:::

:::warning

PlayerTextDrawSetSelectable MUST be used BEFORE the textdraw is shown to the player.
`SelectTextDraw(playerid, hovercolor);` _must_ be used _before_ the textdraw is shown to the player.
:::

## Related Functions

- [PlayerTextDrawIsSelectable](PlayerTextDrawIsSelectable): Checks if a player-textdraw is selectable.
- [SelectTextDraw](SelectTextDraw): Enables the mouse, so the player can select a textdraw
- [CancelSelectTextDraw](CancelSelectTextDraw): Cancel textdraw selection with the mouse

## Related Callbacks

- [OnPlayerClickPlayerTextDraw](../callbacks/OnPlayerClickPlayerTextDraw): Called when a player clicks on a player-textdraw.
