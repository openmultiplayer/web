---
title: "GetPlayerAnimationIndex | open.mp"
description: "Returns the index of any running applied animations."
canonical: https://open.mp/docs/scripting/functions/GetPlayerAnimationIndex
language: en
---

# GetPlayerAnimationIndex

## Description

Returns the index of any running applied animations.

| Name | Description |
| --- | --- |
| playerid | ID of the player of whom you want to get the animation index of. |

## Returns

0 if there is no animation applied.

## Examples

```c
public OnPlayerUpdate(playerid)
{
    if (GetPlayerAnimationIndex(playerid))
    {
        new
            animationLibrary[32],
            animationName[32],
            string[128];

        GetAnimationName(GetPlayerAnimationIndex(playerid), animationLibrary, sizeof (animationLibrary), animationName, sizeof (animationName));

        format(string, sizeof (string), "Running anim: %s %s", animationLibrary, animationName);
        SendClientMessage(playerid, 0xFFFFFFFF, string);
    }
    return 1;
}
```

## Related Functions

-   [ApplyAnimation](https://open.mp/docs/scripting/functions/ApplyAnimation): Apply an animation to a player.
-   [GetAnimationName](https://open.mp/docs/scripting/functions/GetAnimationName): Get the animation library/name for the index.
