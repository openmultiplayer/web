---
title: "SetPlayerScore | open.mp"
description: "Set a player's score."
canonical: https://open.mp/docs/scripting/functions/SetPlayerScore
language: en
---

# SetPlayerScore

## Description

Set a player's score. Players' scores are shown in the scoreboard (shown by holding the TAB key).

| Name | Description |
| --- | --- |
| playerid | The ID of the player to set the score of. |
| score | The value to set the player's score to. |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. This means the player specified does not exist.

## Examples

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    // Add 1 to this killer's score. We must check it is valid first.
    if (killerid != INVALID_PLAYER_ID)
    {
        SetPlayerScore(killerid, GetPlayerScore(killerid) + 1);
    }
    return 1;
}
```

## Related Functions

-   [GetPlayerScore](https://open.mp/docs/scripting/functions/GetPlayerScore): Get the score of a player.
