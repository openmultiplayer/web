---
title: OnPlayerFinishedDownloading
description: This callback is called when a player finishes downloading custom models.
tags: ["player"]
---

<VersionWarn name='callback' version='SA-MP 0.3.DL R1' />

## Description

This callback is called when a player finishes downloading custom models. For more information on how to add custom models to your server, see the [release thread](https://sampforum.blast.hk/showthread.php?tid=644105) and [this tutorial](https://sampforum.blast.hk/showthread.php?tid=644123).

| Name         | Description                                                                    |
| ------------ | ------------------------------------------------------------------------------ |
| playerid     | The ID of the player that finished downloading custom models.                  |
| virtualworld | The ID of the virtual world the player finished downloading custom models for. |

## Returns

This callback does not handle returns.

## Examples

```c
public OnPlayerFinishedDownloading(playerid, virtualworld)
{
    SendClientMessage(playerid, 0xFFFFFFFF, "Downloads finished.");
    return 1;
}
```

## Notes

:::tip

This callback is called every time a player changes virtual worlds, even if there are no custom models present in that world.

:::

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another.

- [OnPlayerConnect](OnPlayerConnect): This callback is called when a player connects to the server.
- [OnPlayerDisconnect](OnPlayerDisconnect): This callback is called when a player leaves the server.
- [OnIncomingConnection](OnIncomingConnection): This callback is called when a player is attempting to connect to the server.
