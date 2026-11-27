---
title: "BeginObjectEditing | open.mp"
description: "Allows a player to edit an object (position and rotation) using their mouse on a GUI (Graphical User Interface)."
canonical: https://open.mp/docs/scripting/functions/BeginObjectEditing
language: en
---

# BeginObjectEditing

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Allows a player to edit an object (position and rotation) using their mouse on a GUI (Graphical User Interface).

| Name | Description |
| --- | --- |
| playerid | The ID of the player that should edit the object. |
| objectid | The ID of the object to be edited by the player. |

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

tip

You can move the camera while editing by pressing and holding the spacebar (or W in vehicle) and moving your mouse.

## Related Functions

-   [CreateObject](https://open.mp/docs/scripting/functions/CreateObject): Create an object.
-   [DestroyObject](https://open.mp/docs/scripting/functions/DestroyObject): Destroy an object.
-   [MoveObject](https://open.mp/docs/scripting/functions/MoveObject): Move an object.
-   [BeginPlayerObjectEditing](https://open.mp/docs/scripting/functions/BeginPlayerObjectEditing): Edit an object.
-   [EditAttachedObject](https://open.mp/docs/scripting/functions/EditAttachedObject): Edit an attached object.
-   [BeginObjectSelecting](https://open.mp/docs/scripting/functions/BeginObjectSelecting): Select an object.
-   [EndObjectEditing](https://open.mp/docs/scripting/functions/EndObjectEditing): Cancel the edition of an object.
