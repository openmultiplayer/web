---
title: "SelectTextDraw | open.mp"
description: "Display the cursor and allow the player to select a textdraw."
canonical: https://open.mp/docs/scripting/functions/SelectTextDraw
language: en
---

# SelectTextDraw

## Description

Display the cursor and allow the player to select a textdraw

| Name | Description |
| --- | --- |
| playerid | The ID of the player that should be able to select a textdraw |
| hoverColour | The color of the textdraw when hovering over with mouse (RGBA) |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/tdselect", true))
    {
        SelectTextDraw(playerid, 0x00FF00FF); // Highlight green when hovering over
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: Please select a textdraw!");
        return 1;
    }
    return 0;
}
```

## Notes

note

-   [TextDrawSetSelectable](https://open.mp/docs/scripting/functions/TextDrawSetSelectable) or [PlayerTextDrawSetSelectable](https://open.mp/docs/scripting/functions/PlayerTextDrawSetSelectable) MUST be used first, to allow a textdraw to be selectable.
-   It is the TEXT which will be highlighted when hovered over, NOT the box (if one is shown).

## Related Functions

-   [CancelSelectTextDraw](https://open.mp/docs/scripting/functions/CancelSelectTextDraw): Cancel textdraw selection with the mouse
-   [TextDrawSetSelectable](https://open.mp/docs/scripting/functions/TextDrawSetSelectable): Sets whether a textdraw is selectable through SelectTextDraw
-   [PlayerTextDrawSetSelectable](https://open.mp/docs/scripting/functions/PlayerTextDrawSetSelectable): Sets whether a player-textdraw is selectable through SelectTextDraw

## Related Callbacks

-   [OnPlayerClickTextDraw](https://open.mp/docs/scripting/callbacks/OnPlayerClickTextDraw): Called when a player clicks on a textdraw.
-   [OnPlayerClickPlayerTextDraw](https://open.mp/docs/scripting/callbacks/OnPlayerClickPlayerTextDraw): Called when a player clicks on a player-textdraw.
