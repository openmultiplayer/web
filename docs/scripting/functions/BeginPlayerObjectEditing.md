---
title: "BeginPlayerObjectEditing | open.mp"
description: "Allows players to edit a player-object (position and rotation) with a GUI and their mouse."
canonical: https://open.mp/docs/scripting/functions/BeginPlayerObjectEditing
language: en
---

# BeginPlayerObjectEditing

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Allows players to edit a player-object (position and rotation) with a GUI and their mouse.

| Name | Description |
| --- | --- |
| playerid | The ID of the player that should edit the object |
| objectid | The object to be edited by the player |

## Returns

`true` - The function executed successfully.

`false` - The function failed to execute. Player or object not valid.

## Examples

```c
new gPlayerObject[MAX_PLAYERS];

public OnPlayerSpawn(playerid)
{
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 1337, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/edit", true))
    {
        BeginPlayerObjectEditing(playerid, gPlayerObject[playerid]);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: You now edit your object!");
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
-   [EditAttachedObject](https://open.mp/docs/scripting/functions/EditAttachedObject): Edit an attached object.
-   [BeginObjectSelecting](https://open.mp/docs/scripting/functions/BeginObjectSelecting): Select an object.
-   [EndObjectEditing](https://open.mp/docs/scripting/functions/EndObjectEditing): Cancel the edition of an object.
