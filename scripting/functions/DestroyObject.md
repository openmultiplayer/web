# DestroyObject

## Description

Destroys (removes) an object that was created using CreateObject.

| Name     | Description                                                |
| -------- | ---------------------------------------------------------- |
| objectid | The ID of the object to destroy. Returned by CreateObject. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnObjectMoved(objectid)
{
    DestroyObject(objectid);
    return 1;
}
```

## Related Functions

- CreateObject: Create an object.
- IsValidObject: Checks if a certain object is vaild.
- MoveObject: Move an object.
- StopObject: Stop an object from moving.
- SetObjectPos: Set the position of an object.
- SetObjectRot: Set the rotation of an object.
- GetObjectPos: Locate an object.
- GetObjectRot: Check the rotation of an object.
- AttachObjectToPlayer: Attach an object to a player.
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
