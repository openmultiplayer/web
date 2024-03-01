---
title: GetPlayerSurfingObjectID
description: Returns the ID of the object the player is surfing on.
tags: ["player"]
---

## Description

Returns the ID of the object the player is surfing on.

| Name     | Description                             |
| -------- | --------------------------------------- |
| playerid | The ID of the player surfing the object |

## Returns

The ID of the moving object the player is surfing. If the player isn't surfing a moving object, it will return INVALID_OBJECT_ID

## Examples

```c
/* when the player types 'objectsurfing' in to the chat box, they'll see this.*/
public OnPlayerText(playerid, text[])
{
    if (strcmp(text, "objectsurfing", true) == 0)
    {
        new
            szMessage[30];

        format(szMessage, sizeof(szMessage), "You're surfing on object #%d.", GetPlayerSurfingObjectID(playerid));
        SendClientMessage(playerid, 0xA9C4E4FF, szMessage);
    }
    return 0;
}
```

## Related Functions

- [GetPlayerSurfingPlayerObjectID](GetPlayerSurfingPlayerObjectID): Get the ID of the player-object that the player is surfing on.
- [GetPlayerSurfingVehicleID](GetPlayerSurfingVehicleID): Get the ID of the vehicle that the player is surfing (stuck to the roof of).
- [GetPlayerSurfingOffsets](GetPlayerSurfingOffsets): Gets a player's surfing offsets.
