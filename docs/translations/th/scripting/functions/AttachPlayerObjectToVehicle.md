---
title: AttachPlayerObjectToVehicle
description: Attach a player object to a vehicle.
tags: ["player", "vehicle"]
---

:::warning

This function was added in SA-MP 0.3e and will not work in earlier versions!

:::

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

- [CreatePlayerObject](CreateObject): Create an object for only one player.
- [DestroyPlayerObject](DestroyObject): Destroy a player object.
- [IsValidPlayerObject](IsValidObject): Checks if a certain player object is vaild.
- [MovePlayerObject](MoveObject): Move a player object.
- [StopPlayerObject](StopObject): Stop a player object from moving.
- [SetPlayerObjectRot](SetPlayerObjectRot): Set the rotation of a player object.
- [GetPlayerObjectPos](GetPlayerObjectPos): Locate a player object.
- [SetPlayerObjectPos](SetPlayerObjectPos): Set the position of a player object.
- [GetPlayerObjectRot](GetPlayerObjectRot): Check the rotation of a player object.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Attach a player object to a player
- [CreateObject](CreateObject): Create an object.
- [DestroyObject](DestroyObject): Destroy an object.
- [IsValidObject](IsValidObject): Checks if a certain object is vaild.
- [MoveObject](MoveObject): Move a object.
- [StopObject](StopObject): Stop an object from moving.
- [SetObjectPos](SetObjectPos): Set the position of an object.
- [SetObjectRot](SetObjectRot): Set the rotation of an object.
- [GetObjectPos](GetObjectPos): Locate an object.
- [GetObjectRot](GetObjectRot): Check the rotation of an object.
- [AttachObjectToPlayer](AttachObjectToPlayer): Attach an object to a player.
