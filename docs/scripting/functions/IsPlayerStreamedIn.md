---
title: "IsPlayerStreamedIn | open.mp"
description: "Checks if a player is streamed in another player's client."
canonical: https://open.mp/docs/scripting/functions/IsPlayerStreamedIn
language: en
---

# IsPlayerStreamedIn

## Description

Checks if a player is streamed in another player's client.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to check is streamed in. |
| forplayerid | The ID of the player to check if playerid is streamed in for. |

## Returns

**true** - The player _is_ streamed in.

**false** - The player is _not_ streamed in.

## Examples

```c
if (IsPlayerStreamedIn(playerid, 0))
{
	SendClientMessage(playerid, -1, "ID 0 can see you.");
}
```

## Notes

note

-   **SA-MP server:** Players stream out if they are more than 200.0 meters away (see [server.cfg](https://open.mp/docs/server/server.cfg) - **stream\_distance**)
-   **open.mp server:** Players stream out if they are more than 200.0 meters away (see [config.json](https://open.mp/docs/server/config.json) - **network.stream\_radius**)

## Related Functions

-   [IsActorStreamedIn](https://open.mp/docs/scripting/functions/IsActorStreamedIn): Checks if an actor is streamed in for a player.
-   [IsVehicleStreamedIn](https://open.mp/docs/scripting/functions/IsVehicleStreamedIn): Checks if a vehicle is streamed in for a player.

## Related Callbacks

-   [OnPlayerStreamIn](https://open.mp/docs/scripting/callbacks/OnPlayerStreamIn): Called when a player streams in for another player.
-   [OnPlayerStreamOut](https://open.mp/docs/scripting/callbacks/OnPlayerStreamOut): Called when a player streams out for another player.
-   [OnVehicleStreamIn](https://open.mp/docs/scripting/callbacks/OnVehicleStreamIn): Called when a vehicle streams in for a player.
-   [OnVehicleStreamOut](https://open.mp/docs/scripting/callbacks/OnVehicleStreamOut): Called when a vehicle streams out for a player.
