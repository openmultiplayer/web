---
title: CreatePlayerObject
description: Creates an object which will be visible to only one player.
tags: ["player"]
---

## คำอธิบาย

Creates an object which will be visible to only one player.

| Name               | Description                                                                                                                                                                                                                                                                                                       |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid           | The ID of the player to create the object for.                                                                                                                                                                                                                                                                    |
| modelid            | The model to create.                                                                                                                                                                                                                                                                                              |
| Float:X            | The X coordinate to create the object at.                                                                                                                                                                                                                                                                         |
| Float:Y            | The Y coordinate to create the object at.                                                                                                                                                                                                                                                                         |
| Float:Z            | The Z coordinate to create the object at.                                                                                                                                                                                                                                                                         |
| Float:rX           | The X rotation of the object.                                                                                                                                                                                                                                                                                     |
| Float:rY           | The Y rotation of the object.                                                                                                                                                                                                                                                                                     |
| Float:rZ           | The Z rotation of the object.                                                                                                                                                                                                                                                                                     |
| Float:DrawDistance | The distance from which objects will appear to players. 0.0 will cause an object to render at its default distance. Leaving this parameter out will cause objects to be rendered at their default distance. |

## ส่งคืน

The ID of the object that was created, or INVALID_OBJECT_ID if the object limit (MAX_OBJECTS) was reached.

## ตัวอย่าง

```c
new pObject[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    pObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0, 0, 96);

    // Or alternatively, using the DrawDistance parameter to show it from as far away as possible:
    pObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0, 0, 96, 300.0);
    return 1;
}

public OnPlayerDisconnect(playerid, reason)
{
    DestroyPlayerObject(playerid, pObject[playerid]);
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [DestroyPlayerObject](../../scripting/functions/DestroyPlayerObject.md): Destroy a player object.
- [IsValidPlayerObject](../../scripting/functions/IsValidPlayerObject.md): Checks if a certain player object is vaild.
- [MovePlayerObject](../../scripting/functions/MovePlayerObject.md): Move a player object.
- [StopPlayerObject](../../scripting/functions/StopPlayerObject.md): Stop a player object from moving.
- [SetPlayerObjectPos](../../scripting/functions/SetPlayerObjectPos.md): Set the position of a player object.
- [SetPlayerObjectRot](../../scripting/functions/SetPlayerObjectRot.md): Set the rotation of a player object.
- [GetPlayerObjectPos](../../scripting/functions/GetPlayerObjectPos.md): Locate a player object.
- [GetPlayerObjectRot](../../scripting/functions/GetPlayerObjectRot.md): Check the rotation of a player object.
- [AttachPlayerObjectToPlayer](../../scripting/functions/AttachPlayerObjectToPlayer.md): Attach a player object to a player.
- [CreateObject](../../scripting/functions/CreateObject.md): Create an object.
- [DestroyObject](../../scripting/functions/DestroyObject.md): Destroy an object.
- [IsValidObject](../../scripting/functions/IsValidObject.md): Checks if a certain object is vaild.
- [MoveObject](../../scripting/functions/MoveObject.md): Move an object.
- [StopObject](../../scripting/functions/StopObject.md): Stop an object from moving.
- [SetObjectPos](../../scripting/functions/SetObjectPos.md): Set the position of an object.
- [SetObjectRot](../../scripting/functions/SetObjectRot.md): Set the rotation of an object.
- [GetObjectPos](../../scripting/functions/GetObjectPos.md): Locate an object.
- [GetObjectRot](../../scripting/functions/GetObjectRot.md): Check the rotation of an object.
- [AttachObjectToPlayer](../../scripting/functions/AttachObjectToPlayer.md): Attach an object to a player.
