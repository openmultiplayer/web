---
title: SendClientMessageToAll
description: Displays a message in chat to all players.
tags: []
---

## Description

Displays a message in chat to all players. This is a multi-player equivalent of SendClientMessage.

| Name             | Description                                                               |
|------------------|---------------------------------------------------------------------------|
| color            | The color of the message (0xRRGGBBAA Hex format).                         |
| const message[]  | The message to show (max 144 characters).                                 |
| OPEN_MP_TAGS:... | Indefinite number of arguments of any tag for message. (added in open.mp) |

## Returns

This function always returns true (1).

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/helloworld", true) == 0)
    {
        // Send a message to everyone.
        SendClientMessageToAll(-1, "Hello!");
        return 1;
    }
    if (strcmp(cmdtext, "/time", true) == 0)
    {
        new
            hours,
            minutes,
            seconds;

        gettime(hours, minutes, seconds);

        // Send current time message to everyone.
        SendClientMessageToAll(-1, "Current time is %02d:%02d:%02d", hours, minutes, seconds);
        return 1;
    }
    return 0;
}
```

## Notes

:::warning

Avoid using format specifiers in your messages without formatting the string that is sent. It will result in crashes otherwise.

:::

## Related Functions

- [SendClientMessage](SendClientMessage): Send a message to a certain player.
- [SendPlayerMessageToAll](SendPlayerMessageToAll): Force a player to send text for all players.
