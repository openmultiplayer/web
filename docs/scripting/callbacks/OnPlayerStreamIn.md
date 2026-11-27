---
title: "OnPlayerStreamIn | open.mp"
description: "This callback is called when a player is streamed by some other player's client."
canonical: https://open.mp/docs/scripting/callbacks/OnPlayerStreamIn
language: en
---

# OnPlayerStreamIn

## Description

This callback is called when a player is streamed by some other player's client.

| Name | Description |
| --- | --- |
| playerid | The ID of the player who has been streamed. |
| forplayerid | The ID of the player that streamed the other player in. |

## Returns

It is always called first in filterscripts.

## Examples

```c
public OnPlayerStreamIn(playerid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "Player %d is now streamed in for you.", playerid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notes

note

This callback can also be called by NPC.

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another.

-   [OnPlayerStreamOut](https://open.mp/docs/scripting/callbacks/OnPlayerStreamOut): This callback is called when a player streams out for another player.
-   [OnActorStreamIn](https://open.mp/docs/scripting/callbacks/OnActorStreamIn): This callback is called when an actor streams in by a player.
-   [OnVehicleStreamIn](https://open.mp/docs/scripting/callbacks/OnVehicleStreamIn): This callback is called when a vehicle streams in for a player.
