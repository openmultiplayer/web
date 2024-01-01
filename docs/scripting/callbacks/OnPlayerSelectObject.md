---
title: OnPlayerSelectObject
description: This callback is called when a player selects an object after SelectObject has been used.
tags: ["player"]
---

<VersionWarn name='callback' version='SA-MP 0.3e' />

## Description

This callback is called when a player selects an object after [SelectObject](../functions/SelectObject) has been used.

| Name     | Description                                                |
| -------- | ---------------------------------------------------------- |
| playerid | The ID of the player that selected an object               |
| type     | The [type](../resources/selectobjecttypes) of selection    |
| objectid | The ID of the selected object                              |
| modelid  | The model of the selected object                           |
| Float:fX | The X position of the selected object                      |
| Float:fY | The Y position of the selected object                      |
| Float:fZ | The Z position of the selected object                      |

## Returns

1 - Will prevent other scripts from receiving this callback.

0 - Indicates that this callback will be passed to the next script.

It is always called first in filterscripts.

## Examples

```c
public OnPlayerSelectObject(playerid, type, objectid, modelid, Float:fX, Float:fY, Float:fZ)
{
    printf("Player %d selected object %d", playerid, objectid);
    if (type == SELECT_OBJECT_GLOBAL_OBJECT)
    {
        EditObject(playerid, objectid);
    }
    else
    {
        EditPlayerObject(playerid, objectid);
    }
    SendClientMessage(playerid, 0xFFFFFFFF, "You now are able to edit your object!");
    return 1;
}
```

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another. 

- [SelectObject](../functions/SelectObject): Select an object.
