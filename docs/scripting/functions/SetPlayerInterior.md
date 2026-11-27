---
title: "SetPlayerInterior | open.mp"
description: "Set a player's interior."
canonical: https://open.mp/docs/scripting/functions/SetPlayerInterior
language: en
---

# SetPlayerInterior

## Description

Set a player's interior. A list of currently known interiors and their positions can be found [here](https://open.mp/docs/scripting/resources/interiorids).

| Name | Description |
| --- | --- |
| playerid | The ID of the player to set the interior of. |
| interiorid | The [interior ID](https://open.mp/docs/scripting/resources/interiorids) to set the player in. |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. This means the player is not connected.

## Examples

```c
// Set player to default interior (outside)
SetPlayerInterior(playerid, 0);
```

## Related Functions

-   [GetPlayerInterior](https://open.mp/docs/scripting/functions/GetPlayerInterior): Get the current interior of a player.
-   [LinkVehicleToInterior](https://open.mp/docs/scripting/functions/LinkVehicleToInterior): Change the interior that a vehicle is seen in.
-   [OnPlayerInteriorChange](https://open.mp/docs/scripting/callbacks/OnPlayerInteriorChange): Called when a player changes interior.

## Related Resources

-   [Interior IDs](https://open.mp/docs/scripting/resources/interiorids)
