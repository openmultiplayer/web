---
id: StopObject
title: StopObject
description: Stop a moving object after MoveObject has been used.
tags: []
---

## Description

Stop a moving object after MoveObject has been used.

| Name     | Description                          |
| -------- | ------------------------------------ |
| objectid | The ID of the object to stop moving. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnGameModeInit()
{
    new obj;
    obj = CreateObject(...);
    return 1;
}
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmd, "/stopobject", true) == 0)
    {
        StopObject(obj);
        return 1;
    }
    return 0;
}
```

## Related Functions

- [CreateObject](CreateObject.md): Create an object.
- [DestroyObject](DestroyObject.md): Destroy an object.
- [IsValidObject](IsValidObject.md): Checks if a certain object is vaild.
- [MoveObject](MoveObject.md): Move an object.
- [SetObjectPos](SetObjectPos.md): Set the position of an object.
- [SetObjectRot](SetObjectRot.md): Set the rotation of an object.
- [GetObjectPos](GetObjectPos.md): Locate an object.
- [GetObjectRot](GetObjectRot.md): Check the rotation of an object.
- [AttachObjectToPlayer](AttachObjectToPlayer.md): Attach an object to a player.
- [CreatePlayerObject](CreatePlayerObject.md): Create an object for only one player.
- [DestroyPlayerObject](DestroyPlayerObject.md): Destroy a player object.
- [IsValidPlayerObject](IsValidPlayerObject.md): Checks if a certain player object is vaild.
- [MovePlayerObject](MovePlayerObject.md): Move a player object.
- [StopPlayerObject](StopPlayerObject.md): Stop a player object from moving.
- [SetPlayerObjectPos](SetPlayerObjectPos.md): Set the position of a player object.
- [SetPlayerObjectRot](SetPlayerObjectRot.md): Set the rotation of a player object.
- [GetPlayerObjectPos](GetPlayerObjectPos.md): Locate a player object.
- [GetPlayerObjectRot](GetPlayerObjectRot.md): Check the rotation of a player object.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer.md): Attach a player object to a player.
- [OnObjectMoved](../callbacks/OnObjectMoved.md): Called when an object stops moving.
