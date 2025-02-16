---
title: OnPlayerText
sidebar_label: OnPlayerText
description: This callback is called when a player sends a chat message.
tags: ["player"]
---

## Description

This callback is called when a player sends a chat message.

| Name     | Description                              |
| -------- | ---------------------------------------- |
| playerid | The ID of the player who typed the text. |
| text[]   | The text the player typed.               |

## Returns

It is always called first in filterscripts so returning 0 there blocks other scripts from seeing it.

## Examples

```c
public OnPlayerText(playerid, text[])
{
    new string[144];
    format(string, sizeof (string), "(%d) %s", playerid, text);
    SendPlayerMessageToAll(playerid, string);
    return 0; // ignore the default text and send the custom one
}
```

## Notes

<TipNPCCallbacks />

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another. 

- [OnPlayerCommandText](OnPlayerCommandText): Called when a player types a command.

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another. 

- [SendPlayerMessageToPlayer](../functions/SendPlayerMessageToPlayer): Force a player to send text for one player.
- [SendPlayerMessageToAll](../functions/SendPlayerMessageToAll): Force a player to send text for all players.
- [ToggleChatTextReplacement](../functions/ToggleChatTextReplacement): Toggles the chat input filter.
