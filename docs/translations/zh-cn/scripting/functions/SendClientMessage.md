---
title: SendClientMessage
description: This function sends a message to a specific player with a chosen color in the chat.
tags: []
---

## Description

This function sends a message to a specific player with a chosen color in the chat. The whole line in the chatbox will be in the set color unless color embedding is used.

| Name             | Description                                           |
|------------------|-------------------------------------------------------|
| playerid         | The ID of the player to display the message to.       |
| color            | The color of the message (0xRRGGBBAA Hex format).     |
| const format[]   | The text that will be displayed (max 144 characters). |
| OPEN_MP_TAGS:... | Indefinite number of arguments of any tag.            |

## Returns

**true** - The function was executed successfully. Success is reported when the string is over 144 characters, but the message won't be sent.

**false** - The function failed to execute. The player is not connected.

## Examples

```c
#define COLOR_RED 0xFF0000FF

public OnPlayerConnect(playerid)
{
    SendClientMessage(playerid, COLOR_RED, "This text is red");
    SendClientMessage(playerid, 0x00FF00FF, "This text is green.");
    SendClientMessage(playerid, -1, "This text is white.");
    return 1;
}

public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    if (killerid != INVALID_PLAYER_ID)
    {
        new name[MAX_PLAYER_NAME];
        GetPlayerName(killerid, name, sizeof(name));

        SendClientMessage(playerid, COLOR_RED, "%s killed you.", name);
    }
    return 1;
}
```

## Notes

:::tip

- You can use color embedding for multiple colors in the message.
- Using '-1' as the color will make the text white (for the simple reason that -1, when represented in hexadecimal notation, is 0xFFFFFFFF).

:::

:::warning

- If a message is longer than 144 characters, it will not be sent. Truncation can be used to prevent this. Displaying a message on multiple lines will also solve this issue.
- Avoid using the percent sign (or format specifiers) in the actual message text without properly escaping it (like %%). It will result in crashes otherwise.

:::

## Related Functions

- [SendClientMessageToAll](SendClientMessageToAll): Send a message to all players.
- [SendPlayerMessageToPlayer](SendPlayerMessageToPlayer): Force a player to send text for one player.
- [SendPlayerMessageToAll](SendPlayerMessageToAll): Force a player to send text for all players.
