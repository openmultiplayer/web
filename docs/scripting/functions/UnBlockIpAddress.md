---
title: "UnBlockIpAddress | open.mp"
description: "Unblock an IP address that was previously blocked using BlockIpAddress."
canonical: https://open.mp/docs/scripting/functions/UnBlockIpAddress
language: en
---

# UnBlockIpAddress

## Description

Unblock an IP address that was previously blocked using [BlockIpAddress](https://open.mp/docs/scripting/functions/BlockIpAddress).

| Name | Description |
| --- | --- |
| const ipAddress\[\] | The IP address to unblock. |

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

-   [BlockIpAddress](https://open.mp/docs/scripting/functions/BlockIpAddress): Block an IP address from connecting to the server for a set amount of time.
-   [IsBanned](https://open.mp/docs/scripting/functions/IsBanned): Checks if the given IP address is banned.

## Related Callbacks

-   [OnIncomingConnection](https://open.mp/docs/scripting/callbacks/OnIncomingConnection): Called when a player is attempting to connect to the server.
