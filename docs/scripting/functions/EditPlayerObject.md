---
title: "EditPlayerObject | open.mp"
description: "Allows players to edit a player-object (position and rotation) with a GUI and their mouse."
canonical: https://open.mp/docs/scripting/functions/EditPlayerObject
language: en
---

# EditPlayerObject

## Description

Allows players to edit a player-object (position and rotation) with a GUI and their mouse.

| Name | Description |
| --- | --- |
| playerid | The ID of the player that should edit the object |
| objectid | The object to be edited by the player |

## Returns

**1**: The function executed successfully.

**0**: The function failed to execute. Player or object not valid.

## Examples

```c
new object[MAX_PLAYERS];
public OnPlayerSpawn(playerid)
{
    object[playerid] = CreatePlayerObject(playerid, 1337, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/edit", true))
    {
        EditPlayerObject(playerid, object[playerid]);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: You now edit your object!");
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
-   [EditAttachedObject](https://open.mp/docs/scripting/functions/EditAttachedObject): Edit an attached object.
-   [SelectObject](https://open.mp/docs/scripting/functions/SelectObject): Select an object.
-   [CancelEdit](https://open.mp/docs/scripting/functions/CancelEdit): Cancel the edition of an object.
-   [EditObject](https://open.mp/docs/scripting/functions/EditObject): Edit an object.
