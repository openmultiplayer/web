---
title: "GetPlayerScore | open.mp"
description: "This function returns a player's score as it was set using SetPlayerScore."
canonical: https://open.mp/docs/scripting/functions/GetPlayerScore
language: en
---

# GetPlayerScore

## Description

This function returns a player's score as it was set using [SetPlayerScore](https://open.mp/docs/scripting/functions/SetPlayerScore).

| Name | Description |
| --- | --- |
| playerid | The player to get the score of. |

## Returns

The player's score.

## Examples

```c
public OnPlayerCommandText(playerid, text[])
{
    if (!strcmp(cmdtext, "/score", true))
    {
        new string[32];
        format(string, sizeof(string), "Your score: %i", GetPlayerScore(playerid));
        SendClientMessage(playerid, COLOR_ORANGE, string);
        return 1;
    }
    return 0;
}
```

## Related Functions

-   [SetPlayerScore](https://open.mp/docs/scripting/functions/SetPlayerScore): Set the score of a player.
-   [GetPlayerPing](https://open.mp/docs/scripting/functions/GetPlayerPing): Get the ping of a player.
