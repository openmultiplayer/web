---
title: SendCommand
description: This will force the NPC to write a desired command, and this way, getting the effects it would produce.
tags: []
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

## Description

This will force the NPC to write a desired command, and this way, getting the effects it would produce.

| Name                 | Description                                        |
| -------------------- | -------------------------------------------------- |
| commandtext[]        | The command text to be sent by the NPC.            |

## Examples

```c
public OnPlayerText(playerid, text[])
{
    if (strfind(text, "stupid bot") != -1)
    {
        new string[80], name[MAX_PLAYER_NAME];
        GetPlayerName(playerid, name, sizeof(name));
        SendCommand("/kill");
        format(string, sizeof(string), "Hey %s! You are so mean, you make me so sad!", name);
        SendChat(string);
    }
    return 1;
}
```

## Related Functions

- [SendChat](SendChat): Sends a text as the NPC.
