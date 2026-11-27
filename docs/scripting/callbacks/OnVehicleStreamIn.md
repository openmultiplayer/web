---
title: "OnVehicleStreamIn | open.mp"
description: "This callback is called when a vehicle is streamed to a player's client."
canonical: https://open.mp/docs/scripting/callbacks/OnVehicleStreamIn
language: en
---

# OnVehicleStreamIn

## Description

This callback is called when a vehicle is streamed to a player's client.

| Name | Description |
| --- | --- |
| vehicleid | The ID of the vehicle that streamed in for the player. |
| forplayerid | The ID of the player who the vehicle streamed in for. |

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

note

This callback can also be called by NPC.

## Related Callbacks

-   [OnVehicleStreamOut](https://open.mp/docs/scripting/callbacks/OnVehicleStreamOut): This callback is called when a vehicle streams out for a player.
-   [OnPlayerStreamIn](https://open.mp/docs/scripting/callbacks/OnPlayerStreamIn): This callback is called when a player streams in for another player.
-   [OnPlayerStreamOut](https://open.mp/docs/scripting/callbacks/OnPlayerStreamOut): This callback is called when a player streams out for another player.
