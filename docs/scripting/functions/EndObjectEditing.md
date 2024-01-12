---
title: EndObjectEditing
description: Cancel object edition mode for a player.
tags: []
---

<VersionWarn version='omp v1.1.0.2612' />

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

- [BeginObjectSelecting](BeginObjectSelecting): Select an object.
- [BeginObjectEditing](BeginObjectEditing): Edit an object.
- [BeginPlayerObjectEditing](BeginPlayerObjectEditing): Edit an player-object.
- [EditAttachedObject](EditAttachedObject): Edit an attached object.
- [CreateObject](CreateObject): Create an object.
- [DestroyObject](DestroyObject): Destroy an object.
- [MoveObject](MoveObject): Move an object.
