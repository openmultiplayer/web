---
title: "LimitPlayerMarkerRadius | open.mp"
description: "Set the player marker radius."
canonical: https://open.mp/docs/scripting/functions/LimitPlayerMarkerRadius
language: en
---

# LimitPlayerMarkerRadius

## Description

Set the player marker radius.

| Name | Description |
| --- | --- |
| Float:markerRadius | The radius that markers will show at |

## Returns

This function does not return any specific values.

## Examples

```c
public OnGameModeInit()
{
    LimitPlayerMarkerRadius(100.0);
}
```

## Related Functions

-   [ShowPlayerMarkers](https://open.mp/docs/scripting/functions/ShowPlayerMarkers): Decide if the server should show markers on the radar.
-   [SetPlayerMarkerForPlayer](https://open.mp/docs/scripting/functions/SetPlayerMarkerForPlayer): Set a player's marker.
-   [LimitGlobalChatRadius](https://open.mp/docs/scripting/functions/LimitGlobalChatRadius): Limit the distance between players needed to see their chat.
