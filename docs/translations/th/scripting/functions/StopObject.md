---
title: StopObject
description: Stop a moving object after MoveObject has been used.
tags: []
---

## คำอธิบาย

Stop a moving object after MoveObject has been used.

| Name     | Description                          |
| -------- | ------------------------------------ |
| objectid | The ID of the object to stop moving. |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

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

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- CreateObject: Create an object.
- DestroyObject: Destroy an object.
- IsValidObject: Checks if a certain object is vaild.
- MoveObject: Move an object.
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
- OnObjectMoved: Called when an object stops moving.
