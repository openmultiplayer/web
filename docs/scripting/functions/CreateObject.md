---
id: CreateObject
title: CreateObject
description: Creates an object at specified coordinates in the game world.
tags: []
---

## Description

Creates an object at specified coordinates in the game world.

| Name               | Description                                                                                                                                                                |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| modelid            | The model to create.                                                                                                                                                       |
| Float:X            | The X coordinate to create the object at.                                                                                                                                  |
| Float:Y            | The Y coordinate to create the object at.                                                                                                                                  |
| Float:Z            | The Z coordinate to create the object at.                                                                                                                                  |
| Float:rX           | The X rotation of the object.                                                                                                                                              |
| Float:rY           | The Y rotation of the object.                                                                                                                                              |
| Float:rZ           | The Z rotation of the object.                                                                                                                                              |
| Float:DrawDistance | (optional) The distance that San Andreas renders objects at. 0.0 will cause objects to render at their default distances. Usable since 0.3b. Limited to 300 prior to 0.3x. |

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

:::tip

There is a limit of 1000 objects (MAX_OBJECTS). To circumvent this limit, you can use a streamer.

:::

## Related Functions

- [DestroyObject](../functions/DestroyObject.md): Destroy an object.
- [IsValidObject](../functions/IsValidObject.md): Checks if a certain object is vaild.
- [MoveObject](../functions/MoveObject.md): Move an object.
- [StopObject](../functions/StopObject.md): Stop an object from moving.
- [SetObjectPos](../functions/SetObjectPos.md): Set the position of an object.
- [SetObjectRot](../functions/SetObjectRot.md): Set the rotation of an object.
- [GetObjectPos](../functions/GetObjectPos.md): Locate an object.
- [GetObjectRot](../functions/GetObjectRot.md): Check the rotation of an object.
- [AttachObjectToPlayer](../functions/AttachObjectToPlayer.md): Attach an object to a player.
- [SetObjectMaterialText](../functions/SetObjectMaterialText.md): Replace the texture of an object with text.
- [SetObjectMaterial](../functions/SetObjectMaterial.md): Replace the texture of an object with the texture from another model in the game.
- [CreatePlayerObject](../functions/CreatePlayerObject.md): Create an object for only one player.
- [DestroyPlayerObject](../functions/DestroyPlayerObject.md): Destroy a player object.
- [IsValidPlayerObject](../functions/IsValidPlayerObject.md): Checks if a certain player object is vaild.
- [MovePlayerObject](../functions/MovePlayerObject.md): Move a player object.
- [StopPlayerObject](../functions/StopPlayerObject.md): Stop a player object from moving.
- [SetPlayerObjectPos](../functions/SetPlayerObjectPos.md): Set the position of a player object.
- [SetPlayerObjectRot](../functions/SetPlayerObjectRot.md): Set the rotation of a player object.
- [GetPlayerObjectPos](../functions/GetPlayerObjectPos.md): Locate a player object.
- [GetPlayerObjectRot](../functions/GetPlayerObjectRot.md): Check the rotation of a player object.
- [AttachPlayerObjectToPlayer](../functions/AttachPlayerObjectToPlayer.md): Attach a player object to a player.
- [SetPlayerObjectMaterialText](../functions/SetPlayerObjectMaterialText.md): Replace the texture of a player object with text.
- [SetPlayerObjectMaterial](../functions/SetPlayerObjectMaterial.md): Replace the texture of a player object with the texture from another model in the game.
