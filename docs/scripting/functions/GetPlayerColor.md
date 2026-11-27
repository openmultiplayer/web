---
title: "GetPlayerColor | open.mp"
description: "Gets the color of the player's name and radar marker."
canonical: https://open.mp/docs/scripting/functions/GetPlayerColor
language: en
---

# GetPlayerColor

## Description

Gets the color of the player's name and radar marker. Only works after [SetPlayerColor](https://open.mp/docs/scripting/functions/SetPlayerColor).

| Name | Description |
| --- | --- |
| playerid | The ID of the player to get the color of. |

## Returns

The player's color. 0 if no color set or player not connected.

## Examples

```c
SendClientMessage(playerid, GetPlayerColor(playerid), "This message is in your color :)");

new output[144];
format(output, sizeof(output), "You can also use the player's color for {%06x}color embedding!", GetPlayerColor(playerid) >>> 8);
SendClientMessage(playerid, -1, output);
// will output the message in white, with ''color embedding'' in the player's color
```

## Notes

warning

GetPlayerColor will return nothing (0) unless [SetPlayerColor](https://open.mp/docs/scripting/functions/SetPlayerColor) has been used first. Click [HERE](https://open.mp/docs/tutorials/colorfix) for a fix.

## Related Functions

-   [SetPlayerColor](https://open.mp/docs/scripting/functions/SetPlayerColor): Set a player's color.
-   [ChangeVehicleColor](https://open.mp/docs/scripting/functions/ChangeVehicleColor): Set the color of a vehicle.
