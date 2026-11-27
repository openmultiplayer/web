---
title: "SetPlayerTeam | open.mp"
description: "Set the team of a player."
canonical: https://open.mp/docs/scripting/functions/SetPlayerTeam
language: en
---

# SetPlayerTeam

## Description

Set the team of a player.

| Name | Description |
| --- | --- |
| playerid | The ID of the player you want to set the team of. |
| teamid | The team to put the player in. Use NO\_TEAM to remove the player from any team. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerSpawn(playerid)
{
    // Set a player's team to 4 when they spawn
    SetPlayerTeam(playerid, 4);
    return 1;
}
```

## Notes

note

-   Players can not damage/kill players on the same team unless they use a knife to slit their throat. Players are also unable to damage vehicles driven by a player from the same team. This can be enabled with [EnableVehicleFriendlyFire](https://open.mp/docs/scripting/functions/EnableVehicleFriendlyFire).
-   255 (or `NO_TEAM`) is the default team to be able to shoot other players, not 0.

## Related Functions

-   [GetPlayerTeam](https://open.mp/docs/scripting/functions/GetPlayerTeam): Check what team a player is on.
-   [SetTeamCount](https://open.mp/docs/scripting/functions/SetTeamCount): Set the number of teams available.
-   [EnableVehicleFriendlyFire](https://open.mp/docs/scripting/functions/EnableVehicleFriendlyFire): Enable friendly fire for team vehicles.
