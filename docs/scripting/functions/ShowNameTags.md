---
title: ShowNameTags
description: Toggle the drawing of nametags, health bars and armor bars above players.
tags: []
---

## Description

Toggle the drawing of nametags, health bars and armor bars above players.

| Name      | Description                                                |
| --------- | ---------------------------------------------------------- |
| bool:show | 'false' to disable, 'true' to enable (enabled by default). |

## Returns

This function does not return any specific values.

## Examples

```c
public OnGameModeInit()
{
    // This will fully disable all player nametags
    // (including health and armour bars)
    ShowNameTags(false);
}
```

## Notes

:::warning

This function can only be used in [OnGameModeInit](OnGameModeInit). For other times, see [ShowPlayerNameTagForPlayer](ShowPlayerNameTagForPlayer).

:::

:::tip

You can also toggle player nametags via [config.json](../../server/config.json)

```json
"use_nametags": false,
```

:::

## Related Functions

- [DisableNameTagLOS](DisableNameTagLOS): Disable nametag Line-Of-Sight checking.
- [ShowPlayerNameTagForPlayer](ShowPlayerNameTagForPlayer): Show or hide a nametag for a certain player.
- [ShowPlayerMarkers](ShowPlayerMarkers): Decide if the server should show markers on the radar.
