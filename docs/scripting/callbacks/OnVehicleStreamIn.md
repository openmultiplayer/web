---
title: OnVehicleStreamIn
description: Called when a vehicle is streamed to a player's client.
tags: ["vehicle"]
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

## Description

Called when a vehicle is streamed to a player's client.

| Name        | Description                                            |
| ----------- | ------------------------------------------------------ |
| vehicleid   | The ID of the vehicle that streamed in for the player. |
| forplayerid | The ID of the player who the vehicle streamed in for.  |

## Returns

It is always called first in filterscripts.

## Examples

```c
public OnVehicleStreamIn(vehicleid, forplayerid)
{
    new string[32];
    format(string, sizeof(string), "You can now see vehicle %d.", vehicleid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notes

<TipNPCCallbacks />
