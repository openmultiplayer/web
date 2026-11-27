---
title: "CreateObject | open.mp"
description: "Creates an object at specified coordinates in the game world."
canonical: https://open.mp/docs/scripting/functions/CreateObject
language: en
---

# CreateObject

## Description

Creates an object at specified coordinates in the game world.

| Name | Description |
| --- | --- |
| modelid | The [model](https://models.open.mp/?cat=objects) to create. |
| Float:x | The X coordinate to create the object at. |
| Float:y | The Y coordinate to create the object at. |
| Float:z | The Z coordinate to create the object at. |
| Float:rotationX | The X rotation of the object. |
| Float:rotationY | The Y rotation of the object. |
| Float:rotationZ | The Z rotation of the object. |
| Float:drawDistance | (optional) The distance that San Andreas renders objects at. 0.0 will cause objects to render at their default distances. |

## Returns

The ID of the object that was created, or INVALID\_OBJECT\_ID if the object limit (MAX\_OBJECTS) was reached.

## Examples

```c
public OnGameModeInit()
{
    CreateObject(2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0); // Object will render at its default distance.
    CreateObject(2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0, 300.0); // Object will render at 300.0 units.
    return 1;
}
```

## Notes

note

-   Objects that emit light (lampposts, police lights, bollard lights, neons etc.) that have a greater rotation than **16.26 degrees** (or -16.26) on either the **X or Y axis** will stop shining. This effect also applies to light objects attached to other objects, players and vehicles. If a light object is attached to a car and the car is rotated over 16.26 degrees (like in a rollover), the object will also stop emitting light. This is a GTA:SA issue, not a server bug. In case the light is attached to another object, one fix for this is to set `syncRotation` to `false` in [AttachObjectToObject](https://open.mp/docs/scripting/functions/AttachObjectToObject). This will ensure the light stays at 0 rotation. This would only really work for objects that consist ONLY of light, so it wouldn't work for the police light for example.
-   There is a limit of 1000 objects ([MAX\_OBJECTS](https://open.mp/docs/scripting/resources/limits)). To circumvent this limit, you can use the [streamer](https://github.com/samp-incognito/samp-streamer-plugin) plugin.

## Related Functions

-   [DestroyObject](https://open.mp/docs/scripting/functions/DestroyObject): Destroy an object.
-   [IsValidObject](https://open.mp/docs/scripting/functions/IsValidObject): Checks if a certain object is vaild.
-   [MoveObject](https://open.mp/docs/scripting/functions/MoveObject): Move an object.
-   [StopObject](https://open.mp/docs/scripting/functions/StopObject): Stop an object from moving.
-   [SetObjectPos](https://open.mp/docs/scripting/functions/SetObjectPos): Set the position of an object.
-   [SetObjectRot](https://open.mp/docs/scripting/functions/SetObjectRot): Set the rotation of an object.
-   [GetObjectPos](https://open.mp/docs/scripting/functions/GetObjectPos): Locate an object.
-   [GetObjectRot](https://open.mp/docs/scripting/functions/GetObjectRot): Check the rotation of an object.
-   [AttachObjectToPlayer](https://open.mp/docs/scripting/functions/AttachObjectToPlayer): Attach an object to a player.
-   [SetObjectMaterialText](https://open.mp/docs/scripting/functions/SetObjectMaterialText): Replace the texture of an object with text.
-   [SetObjectMaterial](https://open.mp/docs/scripting/functions/SetObjectMaterial): Replace the texture of an object with the texture from another model in the game.
-   [CreatePlayerObject](https://open.mp/docs/scripting/functions/CreatePlayerObject): Create an object for only one player.
-   [DestroyPlayerObject](https://open.mp/docs/scripting/functions/DestroyPlayerObject): Destroy a player object.
-   [IsValidPlayerObject](https://open.mp/docs/scripting/functions/IsValidPlayerObject): Checks if a certain player object is vaild.
-   [MovePlayerObject](https://open.mp/docs/scripting/functions/MovePlayerObject): Move a player object.
-   [StopPlayerObject](https://open.mp/docs/scripting/functions/StopPlayerObject): Stop a player object from moving.
-   [SetPlayerObjectPos](https://open.mp/docs/scripting/functions/SetPlayerObjectPos): Set the position of a player object.
-   [SetPlayerObjectRot](https://open.mp/docs/scripting/functions/SetPlayerObjectRot): Set the rotation of a player object.
-   [GetPlayerObjectPos](https://open.mp/docs/scripting/functions/GetPlayerObjectPos): Locate a player object.
-   [GetPlayerObjectRot](https://open.mp/docs/scripting/functions/GetPlayerObjectRot): Check the rotation of a player object.
-   [AttachPlayerObjectToPlayer](https://open.mp/docs/scripting/functions/AttachPlayerObjectToPlayer): Attach a player object to a player.
-   [SetPlayerObjectMaterialText](https://open.mp/docs/scripting/functions/SetPlayerObjectMaterialText): Replace the texture of a player object with text.
-   [SetPlayerObjectMaterial](https://open.mp/docs/scripting/functions/SetPlayerObjectMaterial): Replace the texture of a player object with the texture from another model in the game.
