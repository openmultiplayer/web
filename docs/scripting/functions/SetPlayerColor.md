---
title: "SetPlayerColor | open.mp"
description: "Set the colour of a player's nametag and marker (radar blip)."
canonical: https://open.mp/docs/scripting/functions/SetPlayerColor
language: en
---

# SetPlayerColor

## Description

Set the colour of a player's nametag and marker (radar blip).

| Name | Description |
| --- | --- |
| playerid | The ID of the player whose color to set. |
| colour | The color to set. Supports [alpha values](https://open.mp/docs/scripting/resources/colorslist#alpha-values-transparency). |

## Returns

This function does not return any specific values.

## Examples

```c
// Red, using hexadecimal notation:
SetPlayerColor(playerid, 0xFF0000FF);

//Red, using decimal notation:
SetPlayerColor(playerid, 4278190335);
```

## Notes

note

-   This function will change player's color for everyone, even if player's color was changed with [SetPlayerMarkerForPlayer](https://open.mp/docs/scripting/functions/SetPlayerMarkerForPlayer) for any other player.
-   If used under [OnPlayerConnect](https://open.mp/docs/scripting/callbacks/OnPlayerConnect), the affecting player will not see the color in the TAB menu.

## Related Functions

-   [SetPlayerMarkerForPlayer](https://open.mp/docs/scripting/functions/SetPlayerMarkerForPlayer): Set a player's marker.
-   [GetPlayerColor](https://open.mp/docs/scripting/functions/GetPlayerColor): Check the color of a player.
-   [ChangeVehicleColor](https://open.mp/docs/scripting/functions/ChangeVehicleColor): Set the color of a vehicle.

## Related Resources

-   [Color List](https://open.mp/docs/scripting/resources/colorslist)
