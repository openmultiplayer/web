---
title: "CreatePlayerObject | open.mp"
description: "Creates an object which will be visible to only one player."
canonical: https://open.mp/docs/scripting/functions/CreatePlayerObject
language: en
---

# CreatePlayerObject

## Description

Creates an object which will be visible to only one player.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to create the object for. |
| modelid | The [model](https://models.open.mp/?cat=objects) to create. |
| Float:x | The X coordinate to create the object at. |
| Float:y | The Y coordinate to create the object at. |
| Float:z | The Z coordinate to create the object at. |
| Float:rotationX | The X rotation of the object. |
| Float:rotationY | The Y rotation of the object. |
| Float:rotationZ | The Z rotation of the object. |
| Float:drawDistance | The distance from which objects will appear to players. 0.0 will cause an object to render at its default distance. Leaving this parameter out will cause objects to be rendered at their default distance. |

## Returns

The ID of the object that was created, or INVALID\_OBJECT\_ID if the object limit (MAX\_OBJECTS) was reached.

## Examples

```c
new gPlayerObject[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);

    // Or alternatively, using the DrawDistance parameter to show it from as far away as possible:
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0, 300.0);
    return 1;
}

public OnPlayerDisconnect(playerid, reason)
{
    DestroyPlayerObject(playerid, gPlayerObject[playerid]);
    return 1;
}
```

## Related Functions

-   [DestroyPlayerObject](https://open.mp/docs/scripting/functions/DestroyPlayerObject): Destroy a player object.
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
