---
title: AttachPlayerObjectToVehicle
sidebar_label: AttachPlayerObjectToVehicle
description: Attach a player object to a vehicle.
tags: ["player", "object", "playerobject", "vehicle"]
---

## Description

Attach a player object to a vehicle.

| Name            | Description                                      |
| --------------- | ------------------------------------------------ |
| playerid        | The ID of the player the object was created for. |
| objectid        | The ID of the object to attach to the vehicle.   |
| parentid        | The ID of the vehicle to attach the object to.   |
| Float:offsetX   | The X position offset for attachment.            |
| Float:offsetY   | The Y position offset for attachment.            |
| Float:offsetZ   | The Z position offset for attachment.            |
| Float:rotationX | The X rotation offset for attachment.            |
| Float:rotationY | The Y rotation offset for attachment.            |
| Float:rotationZ | The Z rotation offset for attachment.            |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    if (newstate == PLAYER_STATE_DRIVER) // If player enters vehicle
    {
        // Attach massive cow.
        new cowObject = CreatePlayerObject(playerid, 16442, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
        new vehicleid = GetPlayerVehicleID(playerid);

        AttachPlayerObjectToVehicle(playerid, cowObject, vehicleid, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0);
    }
    return 1;
}
```

## Notes

:::tip

You need to create the object before attempting to attach it to a vehicle.

:::

## Related Functions

- [CreatePlayerObject](CreatePlayerObject): Create an object for only one player.
- [DestroyPlayerObject](DestroyPlayerObject): Destroy a player object.
- [IsValidPlayerObject](IsValidPlayerObject): Checks if a certain player object is vaild.
- [MovePlayerObject](MovePlayerObject): Move a player object.
- [StopPlayerObject](StopPlayerObject): Stop a player object from moving.
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
