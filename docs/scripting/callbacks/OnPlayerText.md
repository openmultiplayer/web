---
title: "OnPlayerText | open.mp"
description: "This callback is called when a player sends a chat message."
canonical: https://open.mp/docs/scripting/callbacks/OnPlayerText
language: en
---

# OnPlayerText

## Description

This callback is called when a player sends a message in chat.

| Name | Description |
| --- | --- |
| playerid | The ID of the player who sent the message. |
| text\[\] | The content of the message that the player sent. |

## Returns

Returning **0** in this callback will stop the text from being sent to all players.

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

note

This callback can also be called by NPC.

tip

By default, this callback sends a message containing the content of the message, the player's name, and their ID. Returning 0 will ignore this default behaviour, as demonstrated in the code example above.

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another.

-   [OnPlayerCommandText](https://open.mp/docs/scripting/callbacks/OnPlayerCommandText): Called when a player types a command.

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

-   [SendPlayerMessageToPlayer](https://open.mp/docs/scripting/functions/SendPlayerMessageToPlayer): Force a player to send text for one player.
-   [SendPlayerMessageToAll](https://open.mp/docs/scripting/functions/SendPlayerMessageToAll): Force a player to send text for all players.
-   [ToggleChatTextReplacement](https://open.mp/docs/scripting/functions/ToggleChatTextReplacement): Toggles the chat input filter.
