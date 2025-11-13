---
title: SendClientMessagef
sidebar_label: SendClientMessagef
description: This function sends a formatted message to a specific player with a chosen color in the chat.
tags: []
---

<VersionWarn version='open.mp beta build 6' />

:::warning

This function was deprecated.

[SendClientMessage](SendClientMessage) function now is built-in with format!

:::

## Description

This function sends a formatted message to a specific player with a chosen color in the chat. The whole line in the chatbox will be in the set color unless color embedding is used.

| Name              | Description                                           |
| ----------------- | ----------------------------------------------------- |
| playerid          | The ID of the player to display the message to.       |
| color             | The color of the message (0xRRGGBBAA Hex format).     |
| const message[]   | The text that will be displayed (max 144 characters). |
| \{Float, \_\}:... | Indefinite number of arguments of any tag             |

## Returns

1: The function was executed successfully. Success is reported when the string is over 144 characters, but the message won't be sent.

0: The function failed to execute. The player is not connected.

## Format Specifiers

| Specifier | Meaning                                       |
| --------- | --------------------------------------------- |
| %i        | Unsigned Integer                              |
| %d        | Signed Integer                                |
| %s        | String                                        |
| %f        | Floating-point number                         |
| %c        | ASCII character                               |
| %x        | Hexadecimal number                            |
| %b        | Binary number                                 |
| %%        | Literal '%'                                   |
| %q        | Escape a text for SQLite. (Added in 0.3.7 R2) |

## Examples

```c
#define COLOR_RED 0xFF0000FF

public OnPlayerConnect(playerid)
{
    new number = 5;
    SendClientMessagef(playerid, -1, "The variable above is %i", number);
    return 1;
}
```

## Notes

:::tip

You can use color embedding for multiple colors in the message. Using '-1' as the color will make the text white (for the simple reason that -1, when represented in hexadecimal notation, is 0xFFFFFFFF).

:::

:::warning

If a message is longer than 144 characters, it will not be sent. Truncation can be used to prevent this. Displaying a message on multiple lines will also solve this issue.

:::
