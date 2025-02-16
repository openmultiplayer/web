---
title: MoveObject
description: Move an object to a new position with a set speed.
tags: []
---

## คำอธิบาย

Move an object to a new position with a set speed. Players/vehicles will 'surf' the object as it moves.

| Name        | Description                                               |
| ----------- | --------------------------------------------------------- |
| objectid    | The ID of the object to move.                             |
| Float:X     | The X coordinate to move the object to.                   |
| Float:Y     | The Y coordinate to move the object to.                   |
| Float:Z     | The Z coordinate to move the object to.                   |
| Float:Speed | The speed at which to move the object (units per second). |
| Float:RotX  | The FINAL X rotation (optional).                          |
| Float:RotY  | The FINAL Y rotation (optional).                          |
| Float:RotZ  | The FINAL Z rotation (optional).                          |

## ส่งคืน

The time it will take for the object to move in milliseconds.

## ตัวอย่าง

```c
new obj; // Somewhere at the top of your script

public OnGameModeInit()
{
    obj = CreateObject(980, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/moveobject", true) == 0)
    {
        new string[50];
        new movetime = MoveObject(obj, 0, 0, 10, 2.00);
        format(string, sizeof(string), "Object will finish moving in %d milliseconds", movetime);
        SendClientMessage(playerid, 0xFF000000, string);
        return 1;
    }
    return 0;
}
```

## บันทึก

:::warning

This function can be used to make objects rotate smoothly. In order to achieve this however, the object must also be moved. The specified rotation is the rotation the object will have after the movement. Hence the object will not rotate when no movement is applied. For a script example take a look at the ferriswheel.pwn filterscript made by Kye included in the server package (SA-MP 0.3d and above). To fully understand the above note, you can (but not limited to) increase the z position by (+0.001) and then (-0.001) after moving it again, as not changing the X,Y or Z will not rotate the object.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [CreateObject](../functions/CreateObject.md): Create an object.
- [DestroyObject](../functions/DestroyObject.md): Destroy an object.
- [IsValidObject](../functions/IsValidObject.md): Checks if a certain object is vaild.
- [IsObjectMoving](../functions/IsObjectMoving.md): Check if the object is moving.
- [StopObject](../functions/StopObject.md): Stop an object from moving.
- [SetObjectPos](../functions/SetObjectPos.md): Set the position of an object.
- [SetObjectRot](../functions/SetObjectRot.md): Set the rotation of an object.
- [GetObjectPos](../functions/GetObjectPos.md): Locate an object.
- [GetObjectRot](../functions/GetObjectRot.md): Check the rotation of an object.
- [AttachObjectToPlayer](../functions/AttachObjectToPlayer.md): Attach an object to a player.
- [CreatePlayerObject](../functions/CreatePlayerObject.md): Create an object for only one player.
- [DestroyPlayerObject](../functions/DestroyPlayerObject.md): Destroy a player object.
- [IsValidPlayerObject](../functions/IsValidPlayerObject.md): Checks if a certain player object is vaild.
- [MovePlayerObject](../functions/MovePlayerObject.md): Move a player object.
- [StopPlayerObject](../functions/StopPlayerObject.md): Stop a player object from moving.
- [IsPlayerObjectMoving](../functions/IsPlayerObjectMoving.md): Check if the player object is moving.
- [SetPlayerObjectPos](../functions/SetPlayerObjectPos.md): Set the position of a player object.
- [SetPlayerObjectRot](../functions/SetPlayerObjectRot.md): Set the rotation of a player object.
- [GetPlayerObjectPos](../functions/GetPlayerObjectPos.md): Locate a player object.
- [GetPlayerObjectRot](../functions/GetPlayerObjectRot.md): Check the rotation of a player object.
- [AttachPlayerObjectToPlayer](../functions/AttachPlayerObjectToPlayer.md): Attach a player object to a player.
