---
title: "SetPlayerPos | open.mp"
description: "Set a player's position."
canonical: https://open.mp/docs/scripting/functions/SetPlayerPos
language: en
---

# SetPlayerPos

## Description

Set a player's position.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to set the position of. |
| Float:x | The X coordinate to position the player at. |
| Float:y | The Y coordinate to position the player at. |
| Float:z | The Z coordinate to position the player at. |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. This means the player specified does not exist.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/middle", true))
    {
        // Teleports players to the center of San Andreas when they type /middle
        SetPlayerPos(playerid, 0.0, 0.0, 3.0);
        return 1;
    }
    return 0;
}
```

## Notes

note

Using this function on a player in a vehicle will instantly remove them from the vehicle. Useful for quickly ejecting players.

tip

When setting a player's position to an interior, [their interior](https://open.mp/docs/scripting/functions/SetPlayerInterior) must be set also.

## Related Functions

-   [SetPlayerPosFindZ](https://open.mp/docs/scripting/functions/SetPlayerPosFindZ): Set a player's position and find the ground.
-   [GetPlayerPos](https://open.mp/docs/scripting/functions/GetPlayerPos): Get a player's position.
-   [SetVehiclePos](https://open.mp/docs/scripting/functions/SetVehiclePos): Set the position of a vehicle.
-   [GetVehiclePos](https://open.mp/docs/scripting/functions/GetVehiclePos): Get the position of a vehicle.
