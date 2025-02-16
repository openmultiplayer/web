---
title: OnNPCDisconnect
description: This callback is called when the NPC gets disconnected from the server.
tags: ["npc"]
---

## Description

This callback is called when the NPC gets disconnected from the server.

| Name     | Description                                             |
| -------- | ------------------------------------------------------- |
| reason[] | The reason why the bot has disconnected from the server |

## Examples

```c
public OnNPCDisconnect(reason[])
{
    printf("Disconnected from the server. %s", reason);
}
```

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another.

- [OnNPCConnect](OnNPCConnect): This callback is called when the NPC successfully connects to the server.
- [OnPlayerDisconnect](OnPlayerDisconnect): This callback is called when a player leaves the server.
- [OnPlayerConnect](OnPlayerConnect): This callback is called when a player connects to the server.
