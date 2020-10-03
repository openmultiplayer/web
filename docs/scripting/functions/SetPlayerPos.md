---
id: SetPlayerPos
title: SetPlayerPos
description: Set a player's position.
tags: ["player"]
---

## Description

Set a player's position.

| Name     | Description                                  |
| -------- | -------------------------------------------- |
| playerid | The ID of the player to set the position of. |
| Float:x  | The X coordinate to position the player at.  |
| Float:y  | The Y coordinate to position the player at.  |
| Float:z  | The Z coordinate to position the player at.  |

## Returns

1: The function executed successfully.

0: The function failed to execute. This means the player specified does not exist.

## Examples

```c
// Teleports players to the center of San Andreas when they type /middle
public OnPlayerCommandText(playerid,cmdtext[])
{
    if(!strcmp(cmdtext, "/middle", true))
    {
        SetPlayerPos(playerid, 0.0, 0.0, 3.0);
        return 1;
    }
    return 0;
}
```

## Notes

:::tip

Using this function on a player in a vehicle will instantly remove them from the vehicle. Useful for quickly ejecting players.

:::

:::tip

When setting a player's position to an interior, their interior must be set also.

:::

## Related Functions

- [SetPlayerPosFindZ](functions/SetPlayerPosFindZ.md): Set a player's position and find the ground.
- [GetPlayerPos](functions/GetPlayerPos.md): Get a player's position.
- [SetVehiclePos](functions/SetVehiclePos.md): Set the position of a vehicle.
- [GetVehiclePos](functions/GetVehiclePos.md): Get the position of a vehicle.
