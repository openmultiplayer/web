---
title: OnVehicleStreamOut
sidebar_label: OnVehicleStreamOut
description: This callback is called when a vehicle is streamed out for a player's client (it's so far away that they can't see it).
tags: ["vehicle"]
---

## Description

This callback is called when a vehicle is streamed out for a player's client (it's so far away that they can't see it).

| Name        | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| vehicleid   | The ID of the vehicle that streamed out.                     |
| forplayerid | The ID of the player who is no longer streaming the vehicle. |

## Returns

It is always called first in filterscripts.

## Examples

```c
public OnVehicleStreamOut(vehicleid, forplayerid)
{
    new string[48];
    format(string, sizeof(string), "Your client is no longer streaming vehicle %d", vehicleid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notes

<TipNPCCallbacks />

## Related Callbacks

- [OnVehicleStreamIn](OnVehicleStreamIn): This callback is called when a vehicle streams in for a player.
- [OnPlayerStreamIn](OnPlayerStreamIn): This callback is called when a player streams in for another player.
- [OnPlayerStreamOut](OnPlayerStreamOut): This callback is called when a player streams out for another player.
