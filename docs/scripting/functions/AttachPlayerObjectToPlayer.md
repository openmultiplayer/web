---
title: "AttachPlayerObjectToPlayer | open.mp"
description: "The same as AttachObjectToPlayer but for objects which were created for player."
canonical: https://open.mp/docs/scripting/functions/AttachPlayerObjectToPlayer
language: en
---

# AttachPlayerObjectToPlayer

## Description

The same as [AttachObjectToPlayer](https://open.mp/docs/scripting/functions/AttachObjectToPlayer) but for objects which were created for player.

| Name | Description |
| --- | --- |
| playerid | The id of the player which is linked with the object. |
| objectid | The objectid you want to attach to the player. |
| parentid | The id of the player you want to attach to the object. |
| Float:offsetX | The distance between the player and the object in the X direction. |
| Float:offsetY | The distance between the player and the object in the Y direction. |
| Float:offsetZ | The distance between the player and the object in the Z direction. |
| Float:rotationX | The X rotation. |
| Float:rotationY | The Y rotation. |
| Float:rotationZ | The Z rotation. |

## Returns

This function does not return any specific values.

## Examples

```c
new gPlayerObject[MAX_PLAYERS];

public OnPlayerSpawn(playerid)
{
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);

    AttachPlayerObjectToPlayer(playerid, gPlayerObject[playerid], other_playerid, 1.5, 0.5, 0.0, 0.0, 1.5, 2.0);
    return 1;
}
```

## Notes

warning

This function was removed in SA-MP 0.3.

## Related Functions

-   [CreatePlayerObject](https://open.mp/docs/scripting/functions/CreatePlayerObject): Create an object for only one player.
-   [DestroyPlayerObject](https://open.mp/docs/scripting/functions/DestroyPlayerObject): Destroy a player object.
-   [IsValidPlayerObject](https://open.mp/docs/scripting/functions/IsValidPlayerObject): Checks if a certain player object is vaild.
-   [MovePlayerObject](https://open.mp/docs/scripting/functions/MovePlayerObject): Move a player object.
-   [StopPlayerObject](https://open.mp/docs/scripting/functions/StopPlayerObject): Stop a player object from moving.
-   [SetPlayerObjectRot](https://open.mp/docs/scripting/functions/SetPlayerObjectRot): Set the rotation of a player object.
-   [GetPlayerObjectPos](https://open.mp/docs/scripting/functions/GetPlayerObjectPos): Locate a player object.
-   [SetPlayerObjectPos](https://open.mp/docs/scripting/functions/SetPlayerObjectPos): Set the position of a player object.
-   [GetPlayerObjectRot](https://open.mp/docs/scripting/functions/GetPlayerObjectRot): Check the rotation of a player object.
-   [SetPlayerAttachedObject](https://open.mp/docs/scripting/functions/SetPlayerAttachedObject): Attach an object to a player
-   [RemovePlayerAttachedObject](https://open.mp/docs/scripting/functions/RemovePlayerAttachedObject): Remove an attached object from a player
-   [IsPlayerAttachedObjectSlotUsed](https://open.mp/docs/scripting/functions/IsPlayerAttachedObjectSlotUsed): Check whether an object is attached to a player in a specified index
-   [CreateObject](https://open.mp/docs/scripting/functions/CreateObject): Create an object.
-   [DestroyObject](https://open.mp/docs/scripting/functions/DestroyObject): Destroy an object.
-   [IsValidObject](https://open.mp/docs/scripting/functions/IsValidObject): Checks if a certain object is vaild.
-   [MoveObject](https://open.mp/docs/scripting/functions/MoveObject): Move a object.
-   [StopObject](https://open.mp/docs/scripting/functions/StopObject): Stop an object from moving.
-   [SetObjectPos](https://open.mp/docs/scripting/functions/SetObjectPos): Set the position of an object.
-   [SetObjectRot](https://open.mp/docs/scripting/functions/SetObjectRot): Set the rotation of an object.
-   [GetObjectPos](https://open.mp/docs/scripting/functions/GetObjectPos): Locate an object.
-   [GetObjectRot](https://open.mp/docs/scripting/functions/GetObjectRot): Check the rotation of an object.
-   [AttachObjectToPlayer](https://open.mp/docs/scripting/functions/AttachObjectToPlayer): Attach an object to a player.
