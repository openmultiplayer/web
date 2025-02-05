---
title: OnPlayerText
description: This callback is called when a player sends a chat message.
tags: ["player"]
---

## Description

This callback is called when a player sends a message in chat.

| Name     | Description                              |
| -------- | ---------------------------------------- |
| playerid | The ID of the player who sent the message. |
| text[]   | The content of the message that the player sent. |

## Returns

It is always called first in filterscripts so returning 0 on it blocks other scripts from processing it.

## Examples

```c
public OnPlayerText(playerid, text[])
{
    new string[144];
    format(string, sizeof (string), "(%d) %s", playerid, text);
    SendPlayerMessageToAll(playerid, string);

    // Returning 0 ignores the default message format and sends the custom one instead. 
    // Returning 1 will result in the message being duplicated, as the default message will also be sent.
    return 0;
}
```

## Notes

<TipNPCCallbacks />

:::tip 

By default, this callback sends a message containing the content of the message, the player's name, and their ID. Returning 0 will ignore this default behaviour, as demonstrated in the code example above. 

:::

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another. 

- [OnPlayerCommandText](OnPlayerCommandText): Called when a player types a command.

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another. 

- [SendPlayerMessageToPlayer](../functions/SendPlayerMessageToPlayer): Force a player to send text for one player.
- [SendPlayerMessageToAll](../functions/SendPlayerMessageToAll): Force a player to send text for all players.
- [ToggleChatTextReplacement](../functions/ToggleChatTextReplacement): Toggles the chat input filter.
