---
title: "GetPlayerCustomSkin | open.mp"
description: "Returns the class of the players custom skin downloaded from the server."
canonical: https://open.mp/docs/scripting/functions/GetPlayerCustomSkin
language: en
---

# GetPlayerCustomSkin

warning

This function was added in SA-MP 0.3.DL R1 and will not work in earlier versions!

## Description

Returns the class of the players custom skin [downloaded from the server](https://open.mp/docs/scripting/functions/AddCharModel).

| Name | Description |
| --- | --- |
| playerid | The player you want to get the skin from |

## Returns

The custom skin id that was specified in [AddCharModel](https://open.mp/docs/scripting/functions/AddCharModel) **newid**.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/customskin", true))
    {
        new string[32];
        new customSkin = GetPlayerCustomSkin(playerid);

        format(string, sizeof(string), "Your custom skin id: %d", customSkin);
        SendClientMessage(playerid, -1, string);
        return 1;
    }
    return 0;
}
```

## Related Functions

-   [GetPlayerSkin](https://open.mp/docs/scripting/functions/GetPlayerSkin): Get a player's current skin.
-   [SetPlayerSkin](https://open.mp/docs/scripting/functions/SetPlayerSkin): Set a player's skin.
