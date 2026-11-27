---
title: "SetPlayerFightingStyle | open.mp"
description: "Set a player's special fighting style."
canonical: https://open.mp/docs/scripting/functions/SetPlayerFightingStyle
language: en
---

# SetPlayerFightingStyle

## Description

Set a player's special fighting style. To use in-game, aim and press the 'secondary attack' key (ENTER by default).

| Name | Description |
| --- | --- |
| playerid | The ID of player to set the fighting style of. |
| FIGHT\_STYLE:style | The fighting [style](https://open.mp/docs/scripting/resources/fightingstyles) that should be set. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/boxing", true) == 0)
    {
        SetPlayerFightingStyle(playerid, FIGHT_STYLE_BOXING);
        SendClientMessage(playerid, 0xFFFFFFAA, "You have changed your fighting style to boxing!");
        return 1;
    }
    return 0;
}
```

## Notes

note

This does not affect normal fist attacks - only special/secondary attacks (aim + press 'secondary attack' key).

## Related Functions

-   [GetPlayerFightingStyle](https://open.mp/docs/scripting/functions/GetPlayerFightingStyle): Get a player's fighting style.

## Related Resources

-   [Fighting Styles](https://open.mp/docs/scripting/resources/fightingstyles)
