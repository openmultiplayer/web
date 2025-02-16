---
title: GetPlayerCustomSkin
sidebar_label: GetPlayerCustomSkin
description: Returns the class of the players custom skin downloaded from the server.
tags: ["player"]
---

<VersionWarn version='SA-MP 0.3.DL R1' />

## Description

Returns the class of the players custom skin downloaded from the server.

| Name     | Description                              |
| -------- | ---------------------------------------- |
| playerid | The player you want to get the skin from |

## Returns

The custom skin id that was specified in [AddCharModel](AddCharModel) newid.

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

- [GetPlayerSkin](GetPlayerSkin): Get a player's current skin.
- [SetPlayerSkin](SetPlayerSkin): Set a player's skin.
