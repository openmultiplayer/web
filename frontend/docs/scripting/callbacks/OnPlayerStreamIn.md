---
title: OnPlayerStreamIn
sidebar_label: OnPlayerStreamIn
description: This callback is called when a player is streamed by some other player's client.
tags: ["player"]
---

## Description

This callback is called when a player is streamed by some other player's client.

| Name        | Description                                             |
| ----------- | ------------------------------------------------------- |
| playerid    | The ID of the player who has been streamed.             |
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

<TipNPCCallbacks />

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another.

- [OnPlayerStreamOut](OnPlayerStreamOut): This callback is called when a player streams out for another player.
- [OnActorStreamIn](OnPlayerStreamOut): This callback is called when an actor is streamed in by a player.
- [OnVehicleStreamIn](OnVehicleStreamIn): This callback is called when a vehicle streams in for a player.
