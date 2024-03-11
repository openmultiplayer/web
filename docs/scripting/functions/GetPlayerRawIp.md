---
title: GetPlayerRawIp
description: Get the specified player's Raw IP address (v4).
tags: ["player", "ip address"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the specified player's Raw IP address (v4).

| Name     | Description                                        |
| -------- | -------------------------------------------------- |
| playerid | The ID of the player to get the Raw IP address of. |

## Returns

Returns the player's Raw IP address as integer.

## Examples

```c
public OnPlayerConnect(playerid)
{
    new rawIp = GetPlayerRawIp(playerid);
    SendClientMessage(playerid, 0xFFFF00FF, "SERVER: Your Raw IP address: %d", rawIp);
    return 1;
}
```

## Notes

:::tip

PAWN is case-sensitive. GetPlayerRawIP will not work. 

:::

## Related Functions

- [GetPlayerIp](GetPlayerIp): Get a player's IP.
- [NetStats_GetIpPort](NetStats_GetIpPort): Get a player's IP and port.
