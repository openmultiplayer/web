---
title: "OnVehicleStreamOut | open.mp"
description: "This callback is called when a vehicle streams out for a player's client (it's so far away that they can't see it)."
canonical: https://open.mp/docs/scripting/callbacks/OnVehicleStreamOut
language: en
---

# OnVehicleStreamOut

## Description

This callback is called when a vehicle streams out for a player's client (it's so far away that they can't see it).

| Name | Description |
| --- | --- |
| vehicleid | The ID of the vehicle that streamed out. |
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

note

This callback can also be called by NPC.

## Related Callbacks

-   [OnVehicleStreamIn](https://open.mp/docs/scripting/callbacks/OnVehicleStreamIn): This callback is called when a vehicle streams in for a player.
-   [OnPlayerStreamIn](https://open.mp/docs/scripting/callbacks/OnPlayerStreamIn): This callback is called when a player streams in for another player.
-   [OnPlayerStreamOut](https://open.mp/docs/scripting/callbacks/OnPlayerStreamOut): This callback is called when a player streams out for another player.
