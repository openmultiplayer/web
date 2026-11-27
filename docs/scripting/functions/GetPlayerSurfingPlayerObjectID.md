---
title: "GetPlayerSurfingPlayerObjectID | open.mp"
description: "Returns the ID of the player-object the player is surfing on."
canonical: https://open.mp/docs/scripting/functions/GetPlayerSurfingPlayerObjectID
language: en
---

# GetPlayerSurfingPlayerObjectID

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Returns the ID of the player-object the player is surfing on.

| Name | Description |
| --- | --- |
| playerid | The ID of the player surfing the object |

## Returns

The ID of the moving object the player is surfing. If the player isn't surfing a moving object, it will return INVALID\_OBJECT\_ID

## Examples

```c
/* when the player types 'objectsurfing' in to the chat box, they'll see this.*/
public OnPlayerText(playerid, text[])
{
    if (strcmp(text, "objectsurfing", true) == 0)
    {
        new
            szMessage[46];

        format(szMessage, sizeof(szMessage), "You're surfing on object #%d.", GetPlayerSurfingPlayerObjectID(playerid));
        SendClientMessage(playerid, 0xA9C4E4FF, szMessage);
    }
    return 0;
}
```

## Related Functions

-   [GetPlayerSurfingObjectID](https://open.mp/docs/scripting/functions/GetPlayerSurfingObjectID): Get the ID of the object that the player is surfing on.
-   [GetPlayerSurfingVehicleID](https://open.mp/docs/scripting/functions/GetPlayerSurfingVehicleID): Get the ID of the vehicle that the player is surfing (stuck to the roof of).
-   [GetPlayerSurfingOffsets](https://open.mp/docs/scripting/functions/GetPlayerSurfingOffsets): Gets a player's surfing offsets.
