---
id: UnBlockIpAddress
title: UnBlockIpAddress
description: Unblock an IP address that was previously blocked using BlockIpAddress.
tags: []
---

<TagLinks />

:::warning

This function was added in SA-MP 0.3z R2-2 and will not work in earlier versions!

:::

## Description

Unblock an IP address that was previously blocked using BlockIpAddress.

| Name       | Description                |
| ---------- | -------------------------- |
| ip_address | The IP address to unblock. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnGameModeInit()
{
    UnBlockIpAddress("127.0.0.1");
    return 1;
}
```

## Related Functions

- BlockIpAddress: Block an IP address from connecting to the server for a set amount of time.
- OnIncomingConnection: Called when a player is attempting to connect to the server.
