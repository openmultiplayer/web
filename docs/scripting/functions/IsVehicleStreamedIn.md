---
title: "IsVehicleStreamedIn | open.mp"
description: "Checks if a vehicle is streamed in for a player."
canonical: https://open.mp/docs/scripting/functions/IsVehicleStreamedIn
language: en
---

# IsVehicleStreamedIn

## Description

Checks if a vehicle is streamed in for a player. Only nearby vehicles are streamed in (visible) for a player.

| Name | Description |
| --- | --- |
| vehicleid | The ID of the vehicle to check. |
| playerid | The ID of the player to check. |

## Returns

**true** - Vehicle is streamed in for the player.

**false** - Vehicle is not streamed in for the player, or the function failed to execute (player and/or vehicle do not exist).

## Examples

```c
new streamedVehicleCount;

for (new i = 1; i < MAX_VEHICLES; i++)
{
    if (IsVehicleStreamedIn(i, playerid))
    {
        streamedVehicleCount ++;
    }
}

new string[144];
format(string, sizeof(string), "You currently have %i vehicles streamed in to your game.", streamedVehicleCount);
SendClientMessage(playerid, -1, string);
```

## Related Functions

-   [IsPlayerStreamedIn](https://open.mp/docs/scripting/functions/IsPlayerStreamedIn): Checks if a player is streamed in for another player.

## Related Callbacks

-   [OnVehicleStreamIn](https://open.mp/docs/scripting/callbacks/OnVehicleStreamIn): Called when a vehicle streams in for a player.
-   [OnVehicleStreamOut](https://open.mp/docs/scripting/callbacks/OnVehicleStreamOut): Called when a vehicle streams out for a player.
-   [OnPlayerStreamIn](https://open.mp/docs/scripting/callbacks/OnPlayerStreamIn): Called when a player streams in for another player.
-   [OnPlayerStreamOut](https://open.mp/docs/scripting/callbacks/OnPlayerStreamOut): Called when a player streams out for another player.
