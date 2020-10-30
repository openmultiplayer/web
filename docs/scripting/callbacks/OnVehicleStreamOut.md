---
title: OnVehicleStreamOut
description: This callback is called when a vehicle is streamed out for a player's client (it's so far away that they can't see it).
tags: ["vehicle"]
---

import T from '../../../src/components/templates.js'

<T.VersionWarn name='callback' version='SA-MP 0.3a' />

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

<T.TipNPCCallbacks />

## Related Functions
