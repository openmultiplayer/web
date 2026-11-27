---
title: "ShowPlayerNameTagForPlayer | open.mp"
description: "This functions allows you to toggle the drawing of player nametags, healthbars and armor bars which display above their head."
canonical: https://open.mp/docs/scripting/functions/ShowPlayerNameTagForPlayer
language: en
---

# ShowPlayerNameTagForPlayer

## Description

This functions allows you to toggle the drawing of player nametags, healthbars and armor bars which display above their head. For use of a similar function like this on a global level, [ShowNameTags](https://open.mp/docs/scripting/functions/ShowNameTags) function.

| Name | Description |
| --- | --- |
| playerid | Player who will see the results of this function. |
| targetid | Player whose name tag will be shown or hidden. |
| bool:show | 'true' for show name tag, 'false' for hide name tag. |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. The player specified does not exist.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    // The player who typed /nameoff will not be able to see any other players nametag.
    if (strcmp("/nameoff", cmdtext, true) == 0)
    {
        for (new i = 0; i < MAX_PLAYERS; i++)
        {
            ShowPlayerNameTagForPlayer(playerid, i, false);
        }
        GameTextForPlayer(playerid, "~W~Nametags ~R~off", 5000, 5);
        return 1;
    }
    return 0;
}
```

## Notes

warning

[ShowNameTags](https://open.mp/docs/scripting/functions/ShowNameTags) must be set to 'true' to be able to show name tags with ShowPlayerNameTagForPlayer, that means that in order to be effective you need to `ShowPlayerNameTagForPlayer(forplayerid, playerid, 0)` ahead of time ([OnPlayerStreamIn](https://open.mp/docs/scripting/callbacks/OnPlayerStreamIn) is a good spot).

## Related Functions

-   [ShowNameTags](https://open.mp/docs/scripting/functions/ShowNameTags): Set nametags on or off.
-   [DisableNameTagLOS](https://open.mp/docs/scripting/functions/DisableNameTagLOS): Disable nametag Line-Of-Sight checking.
-   [SetPlayerMarkerForPlayer](https://open.mp/docs/scripting/functions/SetPlayerMarkerForPlayer): Set a player's marker.
