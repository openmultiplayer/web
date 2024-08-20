---
title: BeginObjectEditing
description: Allows a player to edit an object (position and rotation) using their mouse on a GUI (Graphical User Interface).
tags: ["player", "object"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Allows a player to edit an object (position and rotation) using their mouse on a GUI (Graphical User Interface).

| Name     | Description                                       |
| -------- | ------------------------------------------------- |
| playerid | The ID of the player that should edit the object. |
| objectid | The ID of the object to be edited by the player.  |

## Returns

`true` - The function executed successfully. Success is reported when a non-existent object is specified, but nothing will happen.

`false` - The function failed to execute. The player is not connected.

## Examples

```c
new objectid;

public OnGameModeInit()
{
    objectid = CreateObject(1337, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/oedit", true))
    {
        BeginObjectEditing(playerid, objectid);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: You can now edit the object!");
        return 1;
    }
    return 0;
}
```

## Notes

:::tip

You can move the camera while editing by pressing and holding the spacebar (or W in vehicle) and moving your mouse.

:::

## Related Functions

- [CreateObject](CreateObject): Create an object.
- [DestroyObject](DestroyObject): Destroy an object.
- [MoveObject](MoveObject): Move an object.
- [BeginPlayerObjectEditing](BeginPlayerObjectEditing): Edit an object.
- [EditAttachedObject](EditAttachedObject): Edit an attached object.
- [BeginObjectSelecting](BeginObjectSelecting): Select an object.
- [EndObjectEditing](EndObjectEditing): Cancel the edition of an object.
