---
title: "ShowNameTags | open.mp"
description: "Toggle the drawing of nametags, health bars and armor bars above players."
canonical: https://open.mp/docs/scripting/functions/ShowNameTags
language: en
---

# ShowNameTags

## Description

Toggle the drawing of nametags, health bars and armor bars above players.

| Name | Description |
| --- | --- |
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

warning

This function can only be used in [OnGameModeInit](https://open.mp/docs/scripting/callbacks/OnGameModeInit). For other times, see [ShowPlayerNameTagForPlayer](https://open.mp/docs/scripting/functions/ShowPlayerNameTagForPlayer).

tip

You can also toggle player nametags via [config.json](https://open.mp/docs/server/config.json)

```json
"use_nametags": false,
```

## Related Functions

-   [DisableNameTagLOS](https://open.mp/docs/scripting/functions/DisableNameTagLOS): Disable nametag Line-Of-Sight checking.
-   [ShowPlayerNameTagForPlayer](https://open.mp/docs/scripting/functions/ShowPlayerNameTagForPlayer): Show or hide a nametag for a certain player.
-   [ShowPlayerMarkers](https://open.mp/docs/scripting/functions/ShowPlayerMarkers): Decide if the server should show markers on the radar.
