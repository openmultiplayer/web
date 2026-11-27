---
title: "BeginObjectSelecting | open.mp"
description: "Display the cursor and allow the player to select an object."
canonical: https://open.mp/docs/scripting/functions/BeginObjectSelecting
language: en
---

# BeginObjectSelecting

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Display the cursor and allow the player to select an object. OnPlayerSelectObject is called when the player selects an object.

| Name | Description |
| --- | --- |
| playerid | The ID of the player that should be able to select the object |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/select", true))
    {
        BeginObjectSelecting(playerid);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: Please select the object you'd like to edit!");
        return 1;
    }
    return 0;
}
```

## Related Functions

-   [CreateObject](https://open.mp/docs/scripting/functions/CreateObject): Create an object.
-   [DestroyObject](https://open.mp/docs/scripting/functions/DestroyObject): Destroy an object.
-   [MoveObject](https://open.mp/docs/scripting/functions/MoveObject): Move an object.
-   [BeginObjectEditing](https://open.mp/docs/scripting/functions/BeginObjectEditing): Edit an object.
-   [BeginPlayerObjectEditing](https://open.mp/docs/scripting/functions/BeginPlayerObjectEditing): Edit an object.
-   [EditAttachedObject](https://open.mp/docs/scripting/functions/EditAttachedObject): Edit an attached object.
-   [EndObjectEditing](https://open.mp/docs/scripting/functions/EndObjectEditing): Cancel the edition of an object.

## Related Callbacks

-   [OnPlayerSelectObject](https://open.mp/docs/scripting/callbacks/OnPlayerSelectObject): Called when a player selected an object.
