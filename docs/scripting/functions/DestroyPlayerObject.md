---
title: "DestroyPlayerObject | open.mp"
description: "Destroy a player-object created using CreatePlayerObject."
canonical: https://open.mp/docs/scripting/functions/DestroyPlayerObject
language: en
---

# DestroyPlayerObject

## Description

Destroy a player-object created using [CreatePlayerObject](https://open.mp/docs/scripting/functions/CreatePlayerObject).

| Name | Description |
| --- | --- |
| playerid | The ID of the player whose player-object to destroy. |
| objectid | The ID of the player-object to destroy. Returned by [CreatePlayerObject](https://open.mp/docs/scripting/functions/CreatePlayerObject). |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerObjectMoved(playerid, objectid)
{
    DestroyPlayerObject(playerid, objectid);
    return 1;
}
```

## Related Functions

-   [CreatePlayerObject](https://open.mp/docs/scripting/functions/CreatePlayerObject): Create an object for only one player.
-   [IsValidPlayerObject](https://open.mp/docs/scripting/functions/IsValidPlayerObject): Checks if a certain player object is vaild.
-   [MovePlayerObject](https://open.mp/docs/scripting/functions/MovePlayerObject): Move a player object.
-   [StopPlayerObject](https://open.mp/docs/scripting/functions/StopPlayerObject): Stop a player object from moving.
-   [SetPlayerObjectPos](https://open.mp/docs/scripting/functions/SetPlayerObjectPos): Set the position of a player object.
-   [SetPlayerObjectRot](https://open.mp/docs/scripting/functions/SetPlayerObjectRot): Set the rotation of a player object.
-   [GetPlayerObjectPos](https://open.mp/docs/scripting/functions/GetPlayerObjectPos): Locate a player object.
-   [GetPlayerObjectRot](https://open.mp/docs/scripting/functions/GetPlayerObjectRot): Check the rotation of a player object.
-   [AttachPlayerObjectToPlayer](https://open.mp/docs/scripting/functions/AttachPlayerObjectToPlayer): Attach a player object to a player.
-   [CreateObject](https://open.mp/docs/scripting/functions/CreateObject): Create an object.
-   [DestroyObject](https://open.mp/docs/scripting/functions/DestroyObject): Destroy an object.
-   [IsValidObject](https://open.mp/docs/scripting/functions/IsValidObject): Checks if a certain object is vaild.
-   [MoveObject](https://open.mp/docs/scripting/functions/MoveObject): Move an object.
-   [StopObject](https://open.mp/docs/scripting/functions/StopObject): Stop an object from moving.
-   [SetObjectPos](https://open.mp/docs/scripting/functions/SetObjectPos): Set the position of an object.
-   [SetObjectRot](https://open.mp/docs/scripting/functions/SetObjectRot): Set the rotation of an object.
-   [GetObjectPos](https://open.mp/docs/scripting/functions/GetObjectPos): Locate an object.
-   [GetObjectRot](https://open.mp/docs/scripting/functions/GetObjectRot): Check the rotation of an object.
-   [AttachObjectToPlayer](https://open.mp/docs/scripting/functions/AttachObjectToPlayer): Attach an object to a player.
