---
id: MoveObject
title: MoveObject
description: Move an object to a new position with a set speed.
tags: []
---

<TagLinks />

## Description

Move an object to a new position with a set speed. Players/vehicles will 'surf' the object as it moves.


| Name | Description |
|------|-------------|
|objectid | The ID of the object to move.|
|Float:X | The X coordinate to move the object to.|
|Float:Y | The Y coordinate to move the object to.|
|Float:Z | The Z coordinate to move the object to.|
|Float:Speed | The speed at which to move the object (units per second).|
|Float:RotX | The FINAL X rotation (optional).|
|Float:RotY | The FINAL Y rotation (optional).|
|Float:RotZ | The FINAL Z rotation (optional).|


## Returns

The time it will take for the object to move in milliseconds.


## Examples


```c
new obj; // Somewhere at the top of your script
�
public OnGameModeInit()
{
    obj = CreateObject(980, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
    return 1;
}
�
public OnPlayerCommandText(playerid, cmdtext[])
{
    if(strcmp(cmdtext, "/moveobject", true) == 0)
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


## Notes

:::warning


 This function can be used to make objects rotate smoothly. In order to achieve this however, the object must also be moved. The specified rotation is the rotation the object will have after the movement. Hence the object will not rotate when no movement is applied. For a script example take a look at the ferriswheel.pwn filterscript made by Kye included in the server package (SA-MP 0.3d and above).
 To fully  understand the above note, you can (but not limited to) increase the z position by (+0.001) and then (-0.001) after moving it again, as not changing the X,Y or Z will not rotate the object.

:::


## Related Functions


-  CreateObject: Create an object.
-  DestroyObject: Destroy an object.
-  IsValidObject: Checks if a certain object is vaild.
-  IsObjectMoving: Check if the object is moving.
-  StopObject: Stop an object from moving.
-  SetObjectPos: Set the position of an object.
-  SetObjectRot: Set the rotation of an object.
-  GetObjectPos: Locate an object.
-  GetObjectRot: Check the rotation of an object.
-  AttachObjectToPlayer: Attach an object to a player.
-  CreatePlayerObject: Create an object for only one player.
-  DestroyPlayerObject: Destroy a player object.
-  IsValidPlayerObject: Checks if a certain player object is vaild.
-  MovePlayerObject: Move a player object.
-  StopPlayerObject: Stop a player object from moving.
-  IsPlayerObjectMoving: Check if the player object is moving.
-  SetPlayerObjectPos: Set the position of a player object.
-  SetPlayerObjectRot: Set the rotation of a player object.
-  GetPlayerObjectPos: Locate a player object.
-  GetPlayerObjectRot: Check the rotation of a player object.
-  AttachPlayerObjectToPlayer: Attach a player object to a player.