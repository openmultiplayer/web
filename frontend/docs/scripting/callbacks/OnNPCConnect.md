---
title: OnNPCConnect
description: This callback is called when a NPC successfully connects to the server.
tags: ["npc"]
---

## Description

This callback is called when a NPC successfully connects to the server.

| Name       | Description                         |
| ---------- | ----------------------------------- |
| myplayerid | The playerid the NPC has been given |

## Examples

```c
public OnNPCConnect(myplayerid)
{
    printf("I successfully connected the server with ID %i!", myplayerid);
}
```

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another.

- [OnNPCDisconnect](OnNPCDisconnect): This callback is called when the NPC gets disconnected from the server.
- [OnPlayerConnect](OnPlayerConnect): This callback is called when a player connects to the server.
- [OnPlayerDisconnect](OnPlayerDisconnect): This callback is called when a player leaves the server.
