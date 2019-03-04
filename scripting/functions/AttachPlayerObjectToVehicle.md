---
title: AttachPlayerObjectToVehicle
description: Attach a player object to a vehicle.
tags: ["player", "vehicle"]
---

# AttachPlayerObjectToVehicle

::: warning

This function was added in SA-MP 0.3e and will not work in earlier versions!

:::

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
    if(newstate == PLAYER_STATE_DRIVER) // If player enters vehicle
    {
        // Attach massive cow.
        new cow_object = CreatePlayerObject(playerid, 16442, 0, 0, 0, 0, 0, 0);
 
        AttachPlayerObjectToVehicle(playerid, cow_object, GetPlayerVehicleID(playerid), 0.0, 0.0, 1.0, 0.0, 0.0, 0.0);
    }
}
```

## Notes

::: tip

You need to create the object before attempting to attach it to a vehicle.

:::

## Related Functions

- CreatePlayerObject: Create an object for only one player.
- DestroyPlayerObject: Destroy a player object.
- IsValidPlayerObject: Checks if a certain player object is vaild.
- MovePlayerObject: Move a player object.
- StopPlayerObject: Stop a player object from moving.
- SetPlayerObjectPos: Set the position of a player object.
- SetPlayerObjectRot: Set the rotation of a player object.
- GetPlayerObjectPos: Locate a player object.
- GetPlayerObjectRot: Check the rotation of a player object.
- AttachPlayerObjectToPlayer: Attach a player object to a player.
- CreateObject: Create an object.
- DestroyObject: Destroy an object.
- IsValidObject: Checks if a certain object is vaild.
- MoveObject: Move an object.
- StopObject: Stop an object from moving.
- SetObjectPos: Set the position of an object.
- SetObjectRot: Set the rotation of an object.
- GetObjectPos: Locate an object.
- GetObjectRot: Check the rotation of an object.
- AttachObjectToPlayer: Attach an object to a player.
