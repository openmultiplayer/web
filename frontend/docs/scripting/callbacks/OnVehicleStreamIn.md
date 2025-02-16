---
title: OnVehicleStreamIn
sidebar_label: OnVehicleStreamIn
description: This callback is called when a vehicle is streamed to a player's client.
tags: ["vehicle"]
---

## Description

This callback is called when a vehicle is streamed to a player's client.

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

## Related Callbacks

- [OnVehicleStreamOut](OnVehicleStreamOut): This callback is called when a vehicle streams out for a player.
- [OnPlayerStreamIn](OnPlayerStreamIn): This callback is called when a player streams in for another player.
- [OnPlayerStreamOut](OnPlayerStreamOut): This callback is called when a player streams out for another player.
