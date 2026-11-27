---
title: "GetPlayerFightingStyle | open.mp"
description: "Get the fighting style the player currently using."
canonical: https://open.mp/docs/scripting/functions/GetPlayerFightingStyle
language: en
---

# GetPlayerFightingStyle

## Description

Get the [fighting style](https://open.mp/docs/scripting/resources/fightingstyles) the player currently using.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to get the [fighting style](https://open.mp/docs/scripting/resources/fightingstyles) of. |

## Returns

The ID of the [fighting style](https://open.mp/docs/scripting/resources/fightingstyles) of the player.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/fightstyle", true))
    {
        new string[64];

        new FIGHT_STYLE:style = GetPlayerFightingStyle(playerid);
        new styleName[11];

        switch (style)
        {
            case FIGHT_STYLE_NORMAL:
            {
                styleName = "normal";
            }
            case FIGHT_STYLE_BOXING:
            {
                styleName = "boxing";
            }
            case FIGHT_STYLE_KUNGFU:
            {
                styleName = "kungfu";
            }
            case FIGHT_STYLE_KNEEHEAD:
            {
                styleName = "kneehead";
            }
            case FIGHT_STYLE_GRABKICK:
            {
                styleName = "grabkick";
            }
            case FIGHT_STYLE_ELBOW:
            {
                styleName = "elbow";
            }
        }

        format(string, sizeof(string), "You are using %s fighting style!", styleName);
        SendClientMessage(playerid, 0xFFFFFFAA, string);
        return 1;
    }
    return 0;
}
```

## Related Functions

-   [SetPlayerFightingStyle](https://open.mp/docs/scripting/functions/SetPlayerFightingStyle): Set a player's fighting style.

## Related Resources

-   [Fighting Styles](https://open.mp/docs/scripting/resources/fightingstyles)
