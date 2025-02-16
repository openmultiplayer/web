---
title: CreateObject
description: Creates an object at specified coordinates in the game world.
tags: []
---

## คำอธิบาย

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
| Float:DrawDistance | (optional) The distance that San Andreas renders objects at. 0.0 will cause objects to render at their default distances. |

## ตัวอย่าง

```c
public OnGameModeInit()
{
    CreateObject(2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0); // Object will render at its default distance.
    CreateObject(2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0, 300.0); // Object will render at 300.0 units.
    return 1;
}
```

## บันทึก

:::tip

There is a limit of 1000 objects (MAX_OBJECTS). To circumvent this limit, you can use a streamer.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [DestroyObject](../../scripting/functions/DestroyObject.md): Destroy an object.
- [IsValidObject](../../scripting/functions/IsValidObject.md): Checks if a certain object is vaild.
- [MoveObject](../../scripting/functions/MoveObject.md): Move an object.
- [StopObject](../../scripting/functions/StopObject.md): Stop an object from moving.
- [SetObjectPos](../../scripting/functions/SetObjectPos.md): Set the position of an object.
- [SetObjectRot](../../scripting/functions/SetObjectRot.md): Set the rotation of an object.
- [GetObjectPos](../../scripting/functions/GetObjectPos.md): Locate an object.
- [GetObjectRot](../../scripting/functions/GetObjectRot.md): Check the rotation of an object.
- [AttachObjectToPlayer](../../scripting/functions/AttachObjectToPlayer.md): Attach an object to a player.
- [SetObjectMaterialText](../../scripting/functions/SetObjectMaterialText.md): Replace the texture of an object with text.
- [SetObjectMaterial](../../scripting/functions/SetObjectMaterial.md): Replace the texture of an object with the texture from another model in the game.
- [CreatePlayerObject](../../scripting/functions/CreatePlayerObject.md): Create an object for only one player.
- [DestroyPlayerObject](../../scripting/functions/DestroyPlayerObject.md): Destroy a player object.
- [IsValidPlayerObject](../../scripting/functions/IsValidPlayerObject.md): Checks if a certain player object is vaild.
- [MovePlayerObject](../../scripting/functions/MovePlayerObject.md): Move a player object.
- [StopPlayerObject](../../scripting/functions/StopPlayerObject.md): Stop a player object from moving.
- [SetPlayerObjectPos](../../scripting/functions/SetPlayerObjectPos.md): Set the position of a player object.
- [SetPlayerObjectRot](../../scripting/functions/SetPlayerObjectRot.md): Set the rotation of a player object.
- [GetPlayerObjectPos](../../scripting/functions/GetPlayerObjectPos.md): Locate a player object.
- [GetPlayerObjectRot](../../scripting/functions/GetPlayerObjectRot.md): Check the rotation of a player object.
- [AttachPlayerObjectToPlayer](../../scripting/functions/AttachPlayerObjectToPlayer.md): Attach a player object to a player.
- [SetPlayerObjectMaterialText](../../scripting/functions/SetPlayerObjectMaterialText.md): Replace the texture of a player object with text.
- [SetPlayerObjectMaterial](../../scripting/functions/SetPlayerObjectMaterial.md): Replace the texture of a player object with the texture from another model in the game.
