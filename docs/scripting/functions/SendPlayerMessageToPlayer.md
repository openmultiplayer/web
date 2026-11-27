---
title: "SendPlayerMessageToPlayer | open.mp"
description: "Sends a message in the name of a player to another player on the server."
canonical: https://open.mp/docs/scripting/functions/SendPlayerMessageToPlayer
language: en
---

# SendPlayerMessageToPlayer

## Description

Sends a message in the name of a player to another player on the server. The message will appear in the chat box but can only be seen by the user specified with `playerid`. The line will start with the sender's name in their color, followed by the message in white.

| Name | Description |
| --- | --- |
| playerid | The ID of the player who will receive the message. |
| senderid | The sender's ID. If invalid, the message will not be sent. |
| const format\[\] | The message that will be sent. |
| OPEN\_MP\_TAGS:... | Indefinite number of arguments of any tag. |

## Returns

**true** - The function was executed successfully.

**false** - The function failed to execute. This means the player specified does not exist.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/hello", true))
    {
        SendPlayerMessageToPlayer(0, playerid, "Hello ID 0!"); // Will send a message to the user with the ID 0 in the name of the user who typed '/hello'.
        // Assuming 'playerid' is called Tenpenny, the output will be 'Tenpenny: Hello ID 0!'
        return 1;
    }
    return 0;
}
```

## Notes

warning

Avoid using format specifiers in your messages without formatting the string that is sent. It will result in crashes otherwise.

## Related Functions

-   [SendPlayerMessageToAll](https://open.mp/docs/scripting/functions/SendPlayerMessageToAll): Force a player to send text for all players.
-   [SendClientMessage](https://open.mp/docs/scripting/functions/SendClientMessage): Send a message to a certain player.
-   [SendClientMessageToAll](https://open.mp/docs/scripting/functions/SendClientMessageToAll): Send a message to all players.

## Related Callbacks

-   [OnPlayerText](https://open.mp/docs/scripting/callbacks/OnPlayerText): Called when a player sends a message via the chat.
