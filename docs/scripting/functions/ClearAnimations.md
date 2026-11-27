---
title: "ClearAnimations | open.mp"
description: "Clears all animations for the given player."
canonical: https://open.mp/docs/scripting/functions/ClearAnimations
language: en
---

# ClearAnimations

## Description

Clears all animations for the given player (it also cancels all current tasks such as jetpacking, parachuting, entering vehicles, driving (removes player out of vehicle), swimming, etc).

| Name | Description |
| --- | --- |
| playerid | The ID of the player to clear the animations of. |
| FORCE\_SYNC:forceSync | Set to `SYNC_ALL` to force playerid to sync the animation with other players in streaming radius (default=SYNC\_NONE) |

## Returns

This function always returns **true**, even when the player specified is not connected.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/animclear", true))
    {
        ClearAnimations(playerid);
        return 1;
    }
    return 0;
}
```

## Notes

note

-   ClearAnimations doesn't do anything when the animation ends if we pass 'true' for the freeze parameter in [ApplyAnimation](https://open.mp/docs/scripting/functions/ApplyAnimation).
-   Unlike some other ways to remove player from a vehicle, this will also reset the vehicle's velocity to zero, instantly stopping the car. Player will appear on top of the vehicle with the same location as he was in his car seat.

## Related Functions

-   [ApplyAnimation](https://open.mp/docs/scripting/functions/ApplyAnimation): Apply an animation to a player.
