---
title: BeginObjectSelecting
description: Display the cursor and allow the player to select an object.
tags: ["object"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Display the cursor and allow the player to select an object. OnPlayerSelectObject is called when the player selects an object.

| Name     | Description                                                   |
| -------- | ------------------------------------------------------------- |
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

- [CreateObject](CreateObject): Create an object.
- [DestroyObject](DestroyObject): Destroy an object.
- [MoveObject](MoveObject): Move an object.
- [BeginObjectEditing](BeginObjectEditing): Edit an object.
- [BeginPlayerObjectEditing](BeginPlayerObjectEditing): Edit an object.
- [EditAttachedObject](EditAttachedObject): Edit an attached object.
- [EndObjectEditing](EndObjectEditing): Cancel the edition of an object.

## Related Callbacks

- [OnPlayerSelectObject](../callbacks/OnPlayerSelectObject): Called when a player selected an object.
