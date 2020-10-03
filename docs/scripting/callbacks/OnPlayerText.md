---
id: OnPlayerText
title: OnPlayerText
description: Called when a player sends a chat message.
tags: ["player"]
---

## Description

Called when a player sends a chat message.

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
    new pText[144];
    format(pText, sizeof (pText), "(%d) %s", playerid, text);
    SendPlayerMessageToAll(playerid, pText);
    return 0; // ignore the default text and send the custom one
}
```

## Notes

:::tip

This callback can also be called by NPC.

:::

## Related Functions

- [SendPlayerMessageToPlayer](../functions/SendPlayerMessageToPlayer.md): Force a player to send text for one player.
- [SendPlayerMessageToAll](../functions/SendPlayerMessageToAll.md): Force a player to send text for all players.
