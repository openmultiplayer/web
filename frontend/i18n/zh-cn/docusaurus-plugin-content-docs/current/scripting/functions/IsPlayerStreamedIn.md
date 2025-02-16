---
title: IsPlayerStreamedIn
description: Checks if a player is streamed in another player's client.
tags: ["player"]
---

## Description

Checks if a player is streamed in another player's client.

| Name        | Description                                                   |
| ----------- | ------------------------------------------------------------- |
| playerid    | The ID of the player to check is streamed in.                 |
| forplayerid | The ID of the player to check if playerid is streamed in for. |

## Returns

**true** - The player is streamed in.

**false** - The player is not streamed in.

## Examples

```c
if (IsPlayerStreamedIn(playerid, 0))
{
	SendClientMessage(playerid, -1, "ID 0 can see you.");
}
```

## Notes

:::tip

**SA-MP server:** Players stream out if they are more than 200.0 meters away (see [server.cfg](../../server/server.cfg) - **stream_distance**)

**open.mp server:** Players stream out if they are more than 200.0 meters away (see [config.json](../../server/config.json) - **network.stream_radius**)

:::

:::warning

Players aren't streamed in on their own client, so if playerid is the same as forplayerid it will return false!

:::

## Related Functions

- [IsActorStreamedIn](IsActorStreamedIn): Checks if an actor is streamed in for a player.
- [IsVehicleStreamedIn](IsVehicleStreamedIn): Checks if a vehicle is streamed in for a player.

## Related Callbacks

- [OnPlayerStreamIn](../callbacks/OnPlayerStreamIn): Called when a player streams in for another player.
- [OnPlayerStreamOut](../callbacks/OnPlayerStreamOut): Called when a player streams out for another player.
- [OnVehicleStreamIn](../callbacks/OnVehicleStreamIn): Called when a vehicle streams in for a player.
- [OnVehicleStreamOut](../callbacks/OnVehicleStreamOut): Called when a vehicle streams out for a player.
