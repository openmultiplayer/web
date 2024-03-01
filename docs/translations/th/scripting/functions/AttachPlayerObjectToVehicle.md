---
title: AttachPlayerObjectToVehicle
description: Attach a player object to a vehicle.
tags: ["player", "vehicle"]
---

## คำอธิบาย

Attach a player object to a vehicle.

| Name          | Description                                      |
| ------------- | ------------------------------------------------ |
| playerid      | The ID of the player the object was created for. |
| objectid      | The ID of the object to attach to the vehicle.   |
| vehicleid     | The ID of the vehicle to attach the object to.   |
| Float:OffsetX | The X position offset for attachment.            |
| Float:OffsetY | The Y position offset for attachment.            |
| Float:OffsetZ | The Z position offset for attachment.            |
| Float:RotX    | The X rotation offset for attachment.            |
| Float:RotY    | The Y rotation offset for attachment.            |
| Float:RotZ    | The Z rotation offset for attachment.            |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
public OnPlayerStateChange(playerid, newstate, oldstate)
{
    if (newstate == PLAYER_STATE_DRIVER) // If player enters vehicle
    {
        // Attach massive cow.
        new cow_object = CreatePlayerObject(playerid, 16442, 0, 0, 0, 0, 0, 0);

        AttachPlayerObjectToVehicle(playerid, cow_object, GetPlayerVehicleID(playerid), 0.0, 0.0, 1.0, 0.0, 0.0, 0.0);
    }
}
```

## บันทึก

:::tip

You need to create the object before attempting to attach it to a vehicle.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [CreatePlayerObject](../../scripting/functions/CreateObject.md): Create an object for only one player.
- [DestroyPlayerObject](../../scripting/functions/DestroyObject.md): Destroy a player object.
- [IsValidPlayerObject](../../scripting/functions/IsValidObject.md): Checks if a certain player object is vaild.
- [MovePlayerObject](../../scripting/functions/MoveObject.md): Move a player object.
- [StopPlayerObject](../../scripting/functions/StopObject.md): Stop a player object from moving.
- [SetPlayerObjectRot](../../scripting/functions/SetPlayerObjectRot.md): Set the rotation of a player object.
- [GetPlayerObjectPos](../../scripting/functions/GetPlayerObjectPos.md): Locate a player object.
- [SetPlayerObjectPos](../../scripting/functions/SetPlayerObjectPos.md): Set the position of a player object.
- [GetPlayerObjectRot](../../scripting/functions/GetPlayerObjectRot.md): Check the rotation of a player object.
- [AttachPlayerObjectToPlayer](../../scripting/functions/AttachPlayerObjectToPlayer.md): Attach a player object to a player
- [CreateObject](../../scripting/functions/CreateObject.md): Create an object.
- [DestroyObject](../../scripting/functions/DestroyObject.md): Destroy an object.
- [IsValidObject](../../scripting/functions/IsValidObject.md): Checks if a certain object is vaild.
- [MoveObject](../../scripting/functions/MoveObject.md): Move a object.
- [StopObject](../../scripting/functions/StopObject.md): Stop an object from moving.
- [SetObjectPos](../../scripting/functions/SetObjectPos.md): Set the position of an object.
- [SetObjectRot](../../scripting/functions/SetObjectRot.md): Set the rotation of an object.
- [GetObjectPos](../../scripting/functions/GetObjectPos.md): Locate an object.
- [GetObjectRot](../../scripting/functions/GetObjectRot.md): Check the rotation of an object.
- [AttachObjectToPlayer](../../scripting/functions/AttachObjectToPlayer.md): Attach an object to a player.
