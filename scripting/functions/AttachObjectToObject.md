# AttachObjectToObject

::: warning

This function was added in SA-MP 0.3d and will not work in earlier versions!

:::

## Description

You can use this function to attach objects to other objects. The objects will folow the main object.

| Name          | Description                                                             |
| ------------- | ----------------------------------------------------------------------- |
| objectid      | The object to attach to another object.                                 |
| attachtoid    | The object to attach the object to.                                     |
| Float:OffsetX | The distance between the main object and the object in the X direction. |
| Float:OffsetY | The distance between the main object and the object in the Y direction. |
| Float:OffsetZ | The distance between the main object and the object in the Z direction. |
| Float:RotX    | The X rotation between the object and the main object.                  |
| Float:RotY    | The Y rotation between the object and the main object.                  |
| Float:RotZ    | The Z rotation between the object and the main object.                  |
| SyncRotation  | If set to 0, objectid's rotation will not change with attachtoid's.     |

## Returns

1: The function executed successfully.

0: The function failed to execute. This means the first object (objectid) does not exist. There are no internal checks to verify that the second object (attachtoid) exists.

## Examples

```c
new objectid = CreateObject(...);
new attachtoid = CreateObject(...);

AttachObjectToObject(objectid, attachtoid, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1);
```

## Notes

::: tip

Both objects need to be created before attempting to attach them.
There is no player-object version of this function (AttachPlayerObjectToObject), meaning it will not be supported by streamers.

:::

## Related Functions

- AttachObjectToPlayer: Attach an object to a player.
- AttachObjectToVehicle: Attach an object to a vehicle.
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
- CreatePlayerObject: Create an object for only one player.
- DestroyPlayerObject: Destroy a player object.
- IsValidPlayerObject: Checks if a certain player object is vaild.
- MovePlayerObject: Move a player object.
- StopPlayerObject: Stop a player object from moving.
- SetPlayerObjectPos: Set the position of a player object.
- SetPlayerObjectRot: Set the rotation of a player object.
- GetPlayerObjectPos: Locate a player object.
- GetPlayerObjectRot: Check the rotation of a player object.
