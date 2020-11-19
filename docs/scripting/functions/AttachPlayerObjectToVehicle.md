---
title: AttachPlayerObjectToVehicle
description: Attach a player object to a vehicle.
tags: ["player", "vehicle"]
---

<VersionWarn version='SA-MP 0.3e' />

## Description

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

## Returns

This function does not return any specific values.

## Examples

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

## Notes

:::tip

You need to create the object before attempting to attach it to a vehicle.

:::

## Related Functions

- [CreatePlayerObject](CreatePlayerObject.md): Create an object for only one player.
- [DestroyPlayerObject](DestroyPlayerObject.md): Destroy a player object.
- [IsValidPlayerObject](IsValidPlayerObject.md): Checks if a certain player object is vaild.
- [MovePlayerObject](MovePlayerObject.md): Move a player object.
- [StopPlayerObject](StopPlayerObject.md): Stop a player object from moving.
- [SetPlayerObjectRot](SetPlayerObjectRot.md): Set the rotation of a player object.
- [GetPlayerObjectPos](GetPlayerObjectPos.md): Locate a player object.
- [SetPlayerObjectPos](SetPlayerObjectPos.md): Set the position of a player object.
- [GetPlayerObjectRot](GetPlayerObjectRot.md): Check the rotation of a player object.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer.md): Attach a player object to a player
- [CreateObject](CreateObject.md): Create an object.
- [DestroyObject](DestroyObject.md): Destroy an object.
- [IsValidObject](IsValidObject.md): Checks if a certain object is vaild.
- [MoveObject](MoveObject.md): Move a object.
- [StopObject](StopObject.md): Stop an object from moving.
- [SetObjectPos](SetObjectPos.md): Set the position of an object.
- [SetObjectRot](SetObjectRot.md): Set the rotation of an object.
- [GetObjectPos](GetObjectPos.md): Locate an object.
- [GetObjectRot](GetObjectRot.md): Check the rotation of an object.
- [AttachObjectToPlayer](AttachObjectToPlayer.md): Attach an object to a player.
