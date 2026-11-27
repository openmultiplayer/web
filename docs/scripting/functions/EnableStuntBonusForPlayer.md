---
title: "EnableStuntBonusForPlayer | open.mp"
description: "Toggle stunt bonuses for a player."
canonical: https://open.mp/docs/scripting/functions/EnableStuntBonusForPlayer
language: en
---

# EnableStuntBonusForPlayer

## Description

Toggle stunt bonuses for a player. Enabled by default.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to toggle stunt bonuses for. |
| bool:enable | 'true' to enable stunt bonuses and 'false' to disable them. |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. The player is not connected.

## Examples

```c
public OnPlayerConnect(playerid)
{
    EnableStuntBonusForPlayer(playerid, false); // Disable stunt bonuses when the player connects to the server.
    return 1;
}
```

## Related Functions

-   [EnableStuntBonusForAll](https://open.mp/docs/scripting/functions/EnableStuntBonusForAll): Toggle stunt bonuses for all players.
