---
title: CreateObject
sidebar_label: CreateObject
description: Creates an object at specified coordinates in the game world.
tags: ["object"]
---

## Description

Creates an object at specified coordinates in the game world.

| Name               | Description                                                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| modelid            | The model to create.                                                                                                      |
| Float:x            | The X coordinate to create the object at.                                                                                 |
| Float:y            | The Y coordinate to create the object at.                                                                                 |
| Float:z            | The Z coordinate to create the object at.                                                                                 |
| Float:rotationX    | The X rotation of the object.                                                                                             |
| Float:rotationY    | The Y rotation of the object.                                                                                             |
| Float:rotationZ    | The Z rotation of the object.                                                                                             |
| Float:drawDistance | (optional) The distance that San Andreas renders objects at. 0.0 will cause objects to render at their default distances. |

## Returns

The ID of the object that was created, or INVALID_OBJECT_ID if the object limit (MAX_OBJECTS) was reached.

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

:::note

- Objects that emit light (lampposts, police lights, bollard lights, neons etc.) that have a greater rotation than 16.26 degrees (or -16.26) on either the X or Y axis will stop shining. This effect also applies to light objects attached to other objects, players and vehicles. If a light object is attached to a car and the car is rotated over 16.26 degrees (like in a rollover), the object will also stop emitting light. This is a GTA:SA issue, not a server bug.
- In case the light is attached to another object, one fix for this is to set `syncRotation` to `false` in [AttachObjectToObject](AttachObjectToObject). This will ensure the light stays at 0 rotation. This would only really work for objects that consist ONLY of light, so it wouldn't work for the police light for example.
- There is a limit of 1000 objects (MAX_OBJECTS). To circumvent this limit, you can use the [streamer](https://github.com/samp-incognito/samp-streamer-plugin) plugin.

:::

## Related Functions

- [DestroyObject](DestroyObject): Destroy an object.
- [IsValidObject](IsValidObject): Checks if a certain object is vaild.
- [MoveObject](MoveObject): Move an object.
- [StopObject](StopObject): Stop an object from moving.
- [SetObjectPos](SetObjectPos): Set the position of an object.
- [SetObjectRot](SetObjectRot): Set the rotation of an object.
- [GetObjectPos](GetObjectPos): Locate an object.
- [GetObjectRot](GetObjectRot): Check the rotation of an object.
- [AttachObjectToPlayer](AttachObjectToPlayer): Attach an object to a player.
- [SetObjectMaterialText](SetObjectMaterialText): Replace the texture of an object with text.
- [SetObjectMaterial](SetObjectMaterial): Replace the texture of an object with the texture from another model in the game.
- [CreatePlayerObject](CreatePlayerObject): Create an object for only one player.
- [DestroyPlayerObject](DestroyPlayerObject): Destroy a player object.
- [IsValidPlayerObject](IsValidPlayerObject): Checks if a certain player object is vaild.
- [MovePlayerObject](MovePlayerObject): Move a player object.
- [StopPlayerObject](StopPlayerObject): Stop a player object from moving.
- [SetPlayerObjectPos](SetPlayerObjectPos): Set the position of a player object.
- [SetPlayerObjectRot](SetPlayerObjectRot): Set the rotation of a player object.
- [GetPlayerObjectPos](GetPlayerObjectPos): Locate a player object.
- [GetPlayerObjectRot](GetPlayerObjectRot): Check the rotation of a player object.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Attach a player object to a player.
- [SetPlayerObjectMaterialText](SetPlayerObjectMaterialText): Replace the texture of a player object with text.
- [SetPlayerObjectMaterial](SetPlayerObjectMaterial): Replace the texture of a player object with the texture from another model in the game.
