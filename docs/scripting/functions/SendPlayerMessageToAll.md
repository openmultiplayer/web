---
title: SendPlayerMessageToAll
description: Sends a message in the name of a player to all other players on the server.
tags: ["player"]
---

## Description

Sends a message in the name of a player to all other players on the server. The line will start with the sender's name in their color, followed by the message in white.

| Name             | Description                                                     |
| ---------------- | --------------------------------------------------------------- |
| senderid         | The ID of the sender. If invalid, the message will not be sent. |
| const format[]   | The message that will be sent.                                  |
| OPEN_MP_TAGS:... | Indefinite number of arguments of any tag.                      |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerText(playerid, text[])
{
    // format a message to contain the player's id in front of it
    new string[144];
    format(string, sizeof(string), "(%d): %s", playerid, text);
    SendPlayerMessageToAll(playerid, string);

    return 0; // return 0 prevents the original message being sent

    // Assuming 'playerid' is 0 and the player is called Tenpenny, the output will be 'Tenpenny:(0) <message>'
}
```

## Notes

:::warning

Avoid using format specifiers in your messages without formatting the string that is sent. It will result in crashes otherwise.

:::

## Related Functions

- [SendPlayerMessageToPlayer](SendPlayerMessageToPlayer): Force a player to send text for one player.
- [SendClientMessageToAll](SendClientMessageToAll): Send a message to all players.

## Related Callbacks

- [OnPlayerText](../callbacks/OnPlayerText): Called when a player sends a message via the chat.
