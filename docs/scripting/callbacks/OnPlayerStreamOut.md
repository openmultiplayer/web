---
id: OnPlayerStreamOut
title: OnPlayerStreamOut
description: This callback is called when a player is streamed out from some other player's client.
tags: ["player"]
---

:::warning

This callback was added in SA-MP 0.3a and will not work in earlier versions!

:::

## Description

This callback is called when a player is streamed out from some other player's client.

| Name        | Description                                     |
| ----------- | ----------------------------------------------- |
| playerid    | The player who has been destreamed.             |
| forplayerid | The player who has destreamed the other player. |

## Returns

It is always called first in filterscripts.

## Examples

```c
public OnPlayerStreamOut(playerid, forplayerid)
{
    new string[80];
    format(string, sizeof(string), "Your computer has just unloaded player ID %d", playerid);
    SendClientMessage(forplayerid, 0xFF0000FF, string);
    return 1;
}
```

## Notes

:::tip

This callback can also be called by NPC.

:::

## Related Functions
