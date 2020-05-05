---
id: OnPlayerFinishedDownloading
title: OnPlayerFinishedDownloading
description: This callback is called when a player finishes downloading custom models.
tags: ["player"]
---

:::warning

This callback was added in SA-MP 0.3.DL and will not work in earlier versions!

:::

## Description

This callback is called when a player finishes downloading custom models. For more information on how to add custom models to your server, see the release thread and this tutorial.

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
    SendClientMessage(playerid, 0xffffffff, "Downloads finished.");
    return 1;
}
```

## Notes

:::tip

This callback is called every time a player changes virtual worlds, even if there are no custom models present in that world.

:::

## Related Functions
