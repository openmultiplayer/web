---
id: OnPlayerStreamIn
title: OnPlayerStreamIn
description: This callback is called when a player is streamed by some other player's client.
tags: ["player"]
---

:::warning

This callback was added in SA-MP 0.3a and will not work in earlier versions!

:::

## Description

This callback is called when a player is streamed by some other player's client.

| Name        | Description                                             |
| ----------- | ------------------------------------------------------- |
| playerid    | The ID of the player who has been streamed.             |
| forplayerid | The ID of the player that streamed the other player in. |

## Returns

It is always called first in filterscripts.

## Examples

```c
public OnPlayerStreamIn(playerid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "Player %d is now streamed in for you.", playerid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notes

:::tip

This callback can also be called by NPC.

:::

## Related Functions
