---
title: AttachPlayerObjectToObject
sidebar_label: AttachPlayerObjectToObject
description: You can use this function to attach player-objects to other player-objects.
tags: ["player", "object", "playerobject"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

You can use this function to attach player-objects to other player-objects. The objects will follow the main object.

| Name              | Description                                                             |
|-------------------|-------------------------------------------------------------------------|
| playerid          | The ID of the player.                                                   |
| objectid          | The player-object to attach to another player-object.                   |
| parentid          | The object to attach the object to.                                     |
| Float:OffsetX     | The distance between the main object and the object in the X direction. |
| Float:OffsetY     | The distance between the main object and the object in the Y direction. |
| Float:OffsetZ     | The distance between the main object and the object in the Z direction. |
| Float:RotX        | The X rotation between the object and the main object.                  |
| Float:RotY        | The Y rotation between the object and the main object.                  |
| Float:RotZ        | The Z rotation between the object and the main object.                  |
| bool:syncRotation | If set to `false`, objectid's rotation will not change with parentid's. |

## Returns

`true` - The function executed successfully.

`false` - The function failed to execute. This means the first object (objectid) does not exist. There are no internal checks to verify that the second object (parentid) exists.

## Examples

```c
new objectid = CreatePlayerObject(...);
new parentid = CreatePlayerObject(...);

AttachPlayerObjectToObject(playerid, objectid, parentid, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, true);
```

## Notes

:::tip

Both objects need to be created before attempting to attach them.

:::

## Related Functions

- [AttachObjectToObject](AttachObjectToObject): Attach an object to other object.
- [AttachObjectToPlayer](AttachObjectToPlayer): Attach an object to a player.
- [AttachObjectToVehicle](AttachObjectToVehicle): Attach an object to a vehicle.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Attach a player object to a player.
- [CreatePlayerObject](CreatePlayerObject): Create an object for only one player.
- [DestroyPlayerObject](DestroyPlayerObject): Destroy a player object.
- [IsValidPlayerObject](IsValidPlayerObject): Checks if a certain player object is vaild.
- [MovePlayerObject](MovePlayerObject): Move a player object.
- [StopPlayerObject](StopPlayerObject): Stop a player object from moving.
- [SetPlayerObjectPos](SetPlayerObjectPos): Set the position of a player object.
- [SetPlayerObjectRot](SetPlayerObjectRot): Set the rotation of a player object.
- [GetPlayerObjectPos](GetPlayerObjectPos): Locate a player object.
- [GetPlayerObjectRot](GetPlayerObjectRot): Check the rotation of a player object.
