---
title: LimitPlayerMarkerRadius
description: Set the player marker radius.
tags: ["player"]
---

## Description

Set the player marker radius.

| Name                | Description                          |
| ------------------- | ------------------------------------ |
| Float:markerRadius  | The radius that markers will show at |

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

- [ShowPlayerMarkers](ShowPlayerMarkers): Decide if the server should show markers on the radar.
- [SetPlayerMarkerForPlayer](SetPlayerMarkerForPlayer): Set a player's marker.
- [LimitGlobalChatRadius](LimitGlobalChatRadius): Limit the distance between players needed to see their chat.
