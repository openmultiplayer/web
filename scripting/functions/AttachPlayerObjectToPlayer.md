# AttachPlayerObjectToPlayer

## Description

The same as AttachObjectToPlayer but for objects which were created for player.

| Name          | Description                                                        |
| ------------- | ------------------------------------------------------------------ |
| objectplayer  | The id of the player which is linked with the object.              |
| objectid      | The objectid you want to attach to the player.                     |
| attachid      | The id of the player you want to attach to the object.             |
| Float:OffsetX | The distance between the player and the object in the X direction. |
| Float:OffsetY | The distance between the player and the object in the Y direction. |
| Float:OffsetZ | The distance between the player and the object in the Z direction. |
| Float:RotX    | The X rotation.                                                    |
| Float:RotY    | The Y rotation.                                                    |
| Float:RotZ    | The Z rotation.                                                    |

## Returns

This function does not return any specific values.

## Examples

```c
AttachPlayerObjectToPlayer(objectplayer, objectid, attachplayer, 1.5, 0.5, 0, 0, 1.5, 2 );
```

## Notes

::: warning

This function was removed in SA-MP 0.3.

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
- SetPlayerAttachedObject: Attach an object to a player
- RemovePlayerAttachedObject: Remove an attached object from a player
- IsPlayerAttachedObjectSlotUsed: Check whether an object is attached to a player in a specified index
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
