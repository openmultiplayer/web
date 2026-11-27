---
title: "CancelEdit | open.mp"
description: "Cancel object edition mode for a player."
canonical: https://open.mp/docs/scripting/functions/CancelEdit
language: en
---

# CancelEdit

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
        CancelEdit(playerid);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: You stopped editing the object!");
        return 1;
    }
    return 0;
}
```

## Related Functions

-   [SelectObject](https://open.mp/docs/scripting/functions/SelectObject): Select an object.
-   [EditObject](https://open.mp/docs/scripting/functions/EditObject): Edit an object.
-   [EditPlayerObject](https://open.mp/docs/scripting/functions/EditPlayerObject): Edit an object.
-   [EditAttachedObject](https://open.mp/docs/scripting/functions/EditAttachedObject): Edit an attached object.
-   [CreateObject](https://open.mp/docs/scripting/functions/CreateObject): Create an object.
-   [DestroyObject](https://open.mp/docs/scripting/functions/DestroyObject): Destroy an object.
-   [MoveObject](https://open.mp/docs/scripting/functions/MoveObject): Move an object.
