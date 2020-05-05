---
id: GetAnimationName
title: GetAnimationName
description: Get the animation library/name for the index.
tags: []
---


:::warning

This function was added in SA-MP 0.3b and will not work in earlier versions!

:::

## Description

Get the animation library/name for the index.

| Name       | Description                                               |
| ---------- | --------------------------------------------------------- |
| index      | The animation index, returned by GetPlayerAnimationIndex. |
| animlib[]  | String variable that stores the animation library.        |
| len1       | Size of the string that stores the animation library.     |
| animname[] | String variable that stores the animation name.           |
| len2       | Size of the string that stores the animation name.        |

## Returns

1 on success, 0 on failure.

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

- GetPlayerAnimationIndex: Returns the index of any running applied animations
