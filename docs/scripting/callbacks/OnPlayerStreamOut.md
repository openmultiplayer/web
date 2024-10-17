---
title: OnPlayerStreamOut
description: This callback is called when a player is streamed out from some other player's client.
tags: ["player"]
---

## Description

This callback is called when a player is streamed out from some other player's client.

| Name        | Description                                     |
| ----------- | ----------------------------------------------- |
| playerid    | The player who has been destreamed.             |
| forplayerid | The player who has destreamed the other player. |

## Returns

It is always called first in filterscripts.

## Examples

```c
public OnPlayerStreamOut(playerid, forplayerid)
{
    new string[80];
    format(string, sizeof(string), "Your computer has just unloaded player ID %d", playerid);
    SendClientMessage(forplayerid, 0xFF0000FF, string);
    return 1;
}
```

## Notes

<TipNPCCallbacks />

:::warning

OnPlayerStreamOut is not called for both players when a player disconnects

:::

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another. 

- [OnPlayerStreamIn](OnPlayerStreamIn): This callback is called when a player streams in for another player. 
- [OnActorStreamIn](OnPlayerStreamOut): This callback is called when an actor is streamed in by a player. 
- [OnVehicleStreamIn](OnPlayerStreamOut): This callback is called when a vehicle streams in for a player. 
