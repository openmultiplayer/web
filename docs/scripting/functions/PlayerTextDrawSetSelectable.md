---
title: "PlayerTextDrawSetSelectable | open.mp"
description: "Toggles whether a player-textdraw can be selected or not."
canonical: https://open.mp/docs/scripting/functions/PlayerTextDrawSetSelectable
language: en
---

# PlayerTextDrawSetSelectable

## Description

Toggles whether a player-textdraw can be selected or not.

| Name | Description |
| --- | --- |
| playerid | The ID of the player whose player-textdraw to set the selectability of. |
| PlayerText:textid | The ID of the player-textdraw to set the selectability of. |
| bool:selectable | Set the player-textdraw selectable 'true' or non-selectable 'false'. By default this is 'false'. |

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

tip

Use [PlayerTextDrawTextSize](https://open.mp/docs/scripting/functions/PlayerTextDrawTextSize) to define the clickable area.

warning

[PlayerTextDrawSetSelectable](https://open.mp/docs/scripting/functions/PlayerTextDrawSetSelectable) and [SelectTextDraw](https://open.mp/docs/scripting/functions/SelectTextDraw) MUST be used BEFORE the textdraw is shown to the player.

## Related Functions

-   [PlayerTextDrawIsSelectable](https://open.mp/docs/scripting/functions/PlayerTextDrawIsSelectable): Checks if a player-textdraw is selectable.
-   [SelectTextDraw](https://open.mp/docs/scripting/functions/SelectTextDraw): Enables the mouse, so the player can select a textdraw
-   [CancelSelectTextDraw](https://open.mp/docs/scripting/functions/CancelSelectTextDraw): Cancel textdraw selection with the mouse

## Related Callbacks

-   [OnPlayerClickPlayerTextDraw](https://open.mp/docs/scripting/callbacks/OnPlayerClickPlayerTextDraw): Called when a player clicks on a player-textdraw.
