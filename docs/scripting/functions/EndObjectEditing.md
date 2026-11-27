---
title: "EndObjectEditing | open.mp"
description: "Cancel object edition mode for a player."
canonical: https://open.mp/docs/scripting/functions/EndObjectEditing
language: en
---

# EndObjectEditing

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Cancel object edition mode for a player

| Name | Description |
| --- | --- |
| playerid | The ID of the player to cancel edition for |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/stopedit", true))
    {
        EndObjectEditing(playerid);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: You stopped editing the object!");
        return 1;
    }
    return 0;
}
```

## Related Functions

-   [BeginObjectSelecting](https://open.mp/docs/scripting/functions/BeginObjectSelecting): Select an object.
-   [BeginObjectEditing](https://open.mp/docs/scripting/functions/BeginObjectEditing): Edit an object.
-   [BeginPlayerObjectEditing](https://open.mp/docs/scripting/functions/BeginPlayerObjectEditing): Edit an player-object.
-   [EditAttachedObject](https://open.mp/docs/scripting/functions/EditAttachedObject): Edit an attached object.
-   [CreateObject](https://open.mp/docs/scripting/functions/CreateObject): Create an object.
-   [DestroyObject](https://open.mp/docs/scripting/functions/DestroyObject): Destroy an object.
-   [MoveObject](https://open.mp/docs/scripting/functions/MoveObject): Move an object.
