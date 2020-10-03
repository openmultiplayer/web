---
id: GetPlayerPing
title: GetPlayerPing
description: Get the ping of a player.
tags: ["player"]
---

## Description

Get the ping of a player. The ping measures the amount of time it takes for the server to 'ping' the client and for the client to send the message back.

| Name     | Description                              |
| -------- | ---------------------------------------- |
| playerid | The ID of the player to get the ping of. |

## Returns

The current ping of the player (expressed in milliseconds).

## Examples

```c
public pingchecktimer(playerid)
{
    // Kick players with a high ping
    if(GetPlayerPing(playerid) > 1000) Kick(playerid);
    return 1;
}
```

## Notes

:::warning

Player's ping may be 65535 for a while after a player connects

:::

## Related Functions

- [GetPlayerIp](GetPlayerIp.md): Get a player's IP.
- [GetPlayerName](GetPlayerName.md): Get a player's name.
- [GetPlayerVersion](GetPlayerVersion.md): Get a player's client-version.
