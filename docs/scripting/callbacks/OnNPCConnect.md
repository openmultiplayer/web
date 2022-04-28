---
title: OnNPCConnect
description: This callback is called when a NPC successfully connects to the server.
tags: []
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

## Description

This callback is called when a NPC successfully connects to the server.

| Name         | Description                                        |
| ------------ | -------------------------------------------------- |
| myplayerid   | The playerid the NPC has been given                |

## Examples

```c
public OnNPCConnect(myplayerid)
{
    printf("I successfully connected the server with ID %i!", myplayerid);
}
```

## Related Callbacks

- [OnNPCDisconnect](../callbacks/OnNPCDisconnect): Gets called when the NPC gets disconnected from the server.
- [OnPlayerConnect](../callbacks/OnPlayerConnect): Gets called when a player connects to the server.
- [OnPlayerDisconnect](../callbacks/OnPlayerDisconnect): Gets called when a player leaves the server.
