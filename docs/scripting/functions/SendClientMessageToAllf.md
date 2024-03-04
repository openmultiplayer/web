---
title: SendClientMessageToAllf
description: Displays a formatted message in chat to all players.
tags: []
---

<VersionWarn version='open.mp beta build 6' />

:::warning

This function was deprecated.

[SendClientMessageToAll](SendClientMessageToAll) function now is built-in with format!

:::

## Description

Displays a formatted message in chat to all players. This is a multi-player equivalent of SendClientMessage.

| Name            | Description                                       |
| --------------- | ------------------------------------------------- |
| color           | The color of the message (0xRRGGBBAA Hex format). |
| const message[] | The message to show (max 144 characters).         |
| {Float,_}:...   | Indefinite number of arguments of any tag         |

## Returns

This function always returns true (1).

## Examples

```c
#define HELLO_WORLD "Hello World"

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/helloworld", true) == 0)
    {
        // Send a message to everyone.
        SendClientMessageToAllf(-1, "%s!", HELLO_WORLD);
        return 1;
    }
    return 0;
}
```
