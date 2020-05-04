---
id: CancelEdit
title: CancelEdit
description: Cancel object edition mode for a player.
tags: []
---

<TagLinks />

:::warning

This function was added in SA-MP 0.3e and will not work in earlier versions!

:::

## Description

Cancel object edition mode for a player

| Name     | Description                                |
| -------- | ------------------------------------------ |
| playerid | The ID of the player to cancel edition for |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if(!strcmp(cmdtext, "/stopedit", true))
    {
        CancelEdit(playerid);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: You stopped editing the object!");
        return 1;
    }
    return 0;
}
```

## Related Functions

- SelectObject: Select an object.
- EditObject: Edit an object.
- EditPlayerObject: Edit an object.
- EditAttachedObject: Edit an attached object.
- CreateObject: Create an object.
- DestroyObject: Destroy an object.
- MoveObject: Move an object.
