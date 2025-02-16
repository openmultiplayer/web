---
title: AttachObjectToVehicle
description: Attach an object to a vehicle.
tags: ["vehicle"]
---

## คำอธิบาย

Attach an object to a vehicle.

| Name          | Description                                                                                                                                   |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| objectid      | The ID of the object to attach to the vehicle. Note that this is an object ID, not a model ID. The object must be CreateObject created first. |
| vehicleid     | The ID of the vehicle to attach the object to.                                                                                                |
| Float:OffsetX | The X axis offset from the vehicle to attach the object to.                                                                                   |
| Float:OffsetY | The Y axis offset from the vehicle to attach the object to.                                                                                   |
| Float:OffsetZ | The Z axis offset from the vehicle to attach the object to.                                                                                   |
| Float:RotX    | The X rotation offset for the object.                                                                                                         |
| Float:RotY    | The Y rotation offset for the object.                                                                                                         |
| Float:RotZ    | The Z rotation offset for the object.                                                                                                         |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
new objectid = CreateObject(...);
new vehicleid = GetPlayerVehicleID(playerid);
AttachObjectToVehicle(objectid, vehicleid, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0);
```

## บันทึก

:::tip

The object must be created first.

:::

:::warning

When the vehicle is destroyed or respawned, the attached objects won't be destroyed with it; they will remain stationary at the position the vehicle disappeared and be reattached to the next vehicle to claim the vehicle ID that the objects were attached to.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [AttachObjectToPlayer](../../scripting/functions/AttachObjectToPlayer.md): Attach an object to a player.
- [AttachObjectToObject](../../scripting/functions/AttachObjectToObject.md): Attach an object to an object.
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
- [CreatePlayerObject](../../scripting/functions/CreatePlayerObject.md): Create an object for only one player.
- [DestroyPlayerObject](../../scripting/functions/DestroyPlayerObject.md): Destroy a player object.
- [IsValidPlayerObject](../../scripting/functions/IsValidPlayerObject.md): Checks if a certain player object is vaild.
- [MovePlayerObject](../../scripting/functions/MovePlayerObject.md): Move a player object.
- [StopPlayerObject](../../scripting/functions/StopPlayerObject.md): Stop a player object from moving.
- [SetPlayerObjectPos](../../scripting/functions/SetPlayerObjectPos.md): Set the position of a player object.
- [SetPlayerObjectRot](../../scripting/functions/SetPlayerObjectRot.md): Set the rotation of a player object.
- [GetPlayerObjectPos](../../scripting/functions/GetPlayerObjectPos.md): Locate a player object.
- [GetPlayerObjectRot](../../scripting/functions/GetPlayerObjectRot.md): Check the rotation of a player object.
