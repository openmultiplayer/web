---
title: "EditObject | open.mp"
description: "Allows a player to edit an object (position and rotation) using their mouse on a GUI (Graphical User Interface)."
canonical: https://open.mp/docs/scripting/functions/EditObject
language: en
---

# EditObject

## Description

Allows a player to edit an object (position and rotation) using their mouse on a GUI (Graphical User Interface).

| Name | Description |
| --- | --- |
| playerid | The ID of the player that should edit the object. |
| objectid | The ID of the object to be edited by the player. |

## Returns

**1**: The function executed successfully. Success is reported when a non-existent object is specified, but nothing will happen.

**0**: The function failed to execute. The player is not connected.

## Examples

```c
new object;
public OnGameModeInit()
{
    object = CreateObject(1337, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/oedit", true))
    {
        EditObject(playerid, object);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: You can now edit the object!");
        return 1;
    }
    return 0;
}
```

## Notes

tip

You can move the camera while editing by pressing and holding the **spacebar** (or **W** in vehicle) and moving your mouse.

## Related Functions

-   [CreateObject](https://open.mp/docs/scripting/functions/CreateObject): Create an object.
-   [DestroyObject](https://open.mp/docs/scripting/functions/DestroyObject): Destroy an object.
-   [MoveObject](https://open.mp/docs/scripting/functions/MoveObject): Move an object.
-   [EditPlayerObject](https://open.mp/docs/scripting/functions/EditPlayerObject): Edit an object.
-   [EditAttachedObject](https://open.mp/docs/scripting/functions/EditAttachedObject): Edit an attached object.
-   [SelectObject](https://open.mp/docs/scripting/functions/SelectObject): Select an object.
-   [CancelEdit](https://open.mp/docs/scripting/functions/CancelEdit): Cancel the edition of an object.
