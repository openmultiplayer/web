---
title: GetPlayerSpecialAction
description: Retrieves a player's current special action.
tags: ['player']
---

# GetPlayerSpecialAction

<TagLinks />

## Description

Retrieves a player's current special action.


| Name | Description |
|------|-------------|
|playerid | The ID of the player to get the special action of.|


## Returns

The special action of the player.


## Examples


```c
public OnPlayerUpdate(playerid)
{
    // Ban players if they have a jetpack
    if(GetPlayerSpecialAction(playerid) == SPECIAL_ACTION_USEJETPACK)
    {
        Ban(playerid);
    }
    return 1;
}
```


## Related Functions


-  SetPlayerSpecialAction: Set a player's special action.
-  GetPlayerState: Get a player's current state.