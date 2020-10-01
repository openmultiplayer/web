---
id: GetPlayerAnimationIndex
title: GetPlayerAnimationIndex
description: Returns the index of any running applied animations.
tags: ["player"]
---

:::warning

This function was added in SA-MP 0.3b and will not work in earlier versions!

:::

## Description

Returns the index of any running applied animations.

| Name     | Description                                                      |
| -------- | ---------------------------------------------------------------- |
| playerid | ID of the player of whom you want to get the animation index of. |

## Returns

0 if there is no animation applied

## Examples

```c
public OnPlayerUpdate(playerid)
{
    if(GetPlayerAnimationIndex(playerid))
    {
        new animlib[32];
        new animname[32];
        new msg[128];
        GetAnimationName(GetPlayerAnimationIndex(playerid),animlib,32,animname,32);
        format(msg, 128, "Running anim: %s %s", animlib, animname);
        SendClientMessage(playerid, 0xFFFFFFFF, msg);
    }
    return 1;
}
```

## Related Functions

- [GetAnimationName](../functions/GetAnimationName): Get the animation library/name for the index.
