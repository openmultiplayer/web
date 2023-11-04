---
title: SendChat
description: This will send a player text by the bot, just like using SendPlayerMessageToAll, but this function is to be used inside the NPC scripts.
tags: []
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

## Description

This will send a player text by the bot, just like using [SendPlayerMessageToAll](SendPlayerMessageToAll), but this function is to be used inside the NPC scripts.

| Name         | Description                                        |
| ------------ | -------------------------------------------------- |
| msg[]        | The text to be sent by the NPC.                    |

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

- [SendCommand](SendCommand): Sends a command as the NPC.
