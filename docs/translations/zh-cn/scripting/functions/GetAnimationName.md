---
title: GetAnimationName
description: Get the animation library/name for the index.
tags: []
---

## Description

Get the animation library/name for the index.

| Name                             | Description                                               |
| -------------------------------- | --------------------------------------------------------- |
| index                            | The animation index, returned by GetPlayerAnimationIndex. |
| animationLibrary[]               | String variable that stores the animation library.        |
| len1 = sizeof (animationLibrary) | Size of the string that stores the animation library.     |
| animationName[]                  | String variable that stores the animation name.           |
| len2 = sizeof (animationName)    | Size of the string that stores the animation name.        |

## Returns

1 on success, 0 on failure.

## Examples

```c
public OnPlayerUpdate(playerid)
{
    if (GetPlayerAnimationIndex(playerid))
    {
        new
            animLib[32],
            animName[32],
            msgText[128];

        GetAnimationName(GetPlayerAnimationIndex(playerid), animLib, sizeof animLib, animName, sizeof animName);
        format(msgText, sizeof msgText, "Running anim: %s %s", animLib, animName);
        SendClientMessage(playerid, 0xFFFFFFFF, msgText);
    }
    return 1;
}
```

## Related Functions

- [GetPlayerAnimationIndex](GetPlayerAnimationIndex): Returns the index of any running applied animations
