---
title: OnNPCDisconnect
description: This callback is called when the NPC gets disconnected from the server.
tags: []
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

## Description

This callback is called when the NPC gets disconnected from the server.

| Name         | Description                                             |
| ------------ | ------------------------------------------------------- |
| reason[]     | The reason why the bot has disconnected from the server |

## Examples

```c
public OnNPCDisconnect(reason[])
{
    printf("Disconnected from the server. %s", reason);
}
```

## Related Functions

- [OnNPCConnect](../callbacks/OnNPCConnect): Gets called when the NPC successfully connects to the server.
- [OnPlayerDisconnect](../callbacks/OnPlayerDisconnect): Gets called when a player leaves the server.
- [OnPlayerConnect](../callbacks/OnPlayerConnect): Gets called when a player connects to the server.
