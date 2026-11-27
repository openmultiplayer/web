---
title: "SendChat | open.mp"
description: "This will send a player text by the bot, just like using SendPlayerMessageToAll, but this function is to be used inside the NPC scripts."
canonical: https://open.mp/docs/scripting/functions/SendChat
language: en
---

# SendChat

warning

This function is deprecated. Please see [SendPlayerMessageToAll](https://open.mp/docs/scripting/functions/SendPlayerMessageToAll).

## Description

This will send a player text by the bot, just like using [SendPlayerMessageToAll](https://open.mp/docs/scripting/functions/SendPlayerMessageToAll), but this function is to be used inside the NPC scripts.

| Name | Description |
| --- | --- |
| msg\[\] | The text to be sent by the NPC. |

## Examples

```c
public OnPlayerDeath(playerid)
{
    new string[80], name[MAX_PLAYER_NAME];
    GetPlayerName(playerid, name, sizeof(name));
    format(string, sizeof(string), "Oh no %s! I didn't want you to die that way!", name);
    SendChat(string);
    return 1;
}
```

## Related Functions

-   [SendCommand](https://open.mp/docs/scripting/functions/SendCommand): Sends a command as the NPC.
