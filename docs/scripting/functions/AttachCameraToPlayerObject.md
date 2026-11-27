---
title: "AttachCameraToPlayerObject | open.mp"
description: "Attaches a player's camera to a player-object."
canonical: https://open.mp/docs/scripting/functions/AttachCameraToPlayerObject
language: en
---

# AttachCameraToPlayerObject

## Description

Attaches a player's camera to a player-object. The player is able to move their camera while it is attached to an object. Can be used with [MovePlayerObject](https://open.mp/docs/scripting/functions/MovePlayerObject) and [AttachPlayerObjectToVehicle](https://open.mp/docs/scripting/functions/AttachPlayerObjectToVehicle).

| Name | Description |
| --- | --- |
| playerid | The ID of the player which will have their camera attached to a player-object. |
| playerobjectid | The ID of the player-object to which the player's camera will be attached. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/attach", false))
    {
        new playerobject = CreatePlayerObject(playerid, 1245, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0);
        AttachCameraToPlayerObject(playerid, playerobject);
        SendClientMessage(playerid, 0xFFFFFFAA, "Your camera is now attached to an object.");
        return 1;
    }
    return 0;
}
```

## Notes

note

The player-object must be [created](https://open.mp/docs/scripting/functions/CreatePlayerObject) before attempting to attach the player's camera to it.

## Related Functions

-   [AttachCameraToObject](https://open.mp/docs/scripting/functions/AttachCameraToObject): Attachs the player's camera on an global object.
-   [SetPlayerCameraPos](https://open.mp/docs/scripting/functions/SetPlayerCameraPos): Set a player's camera position.
-   [SetPlayerCameraLookAt](https://open.mp/docs/scripting/functions/SetPlayerCameraLookAt): Set where a player's camera should face.
