---
title: OnPlayerStreamOut
description: This callback is called when a player is streamed out from some other player's client.
tags: ["player"]
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

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

## Related Functions
