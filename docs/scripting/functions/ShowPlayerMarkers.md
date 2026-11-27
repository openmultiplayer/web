---
title: "ShowPlayerMarkers | open.mp"
description: "Toggles player markers (blips on the radar)."
canonical: https://open.mp/docs/scripting/functions/ShowPlayerMarkers
language: en
---

# ShowPlayerMarkers

## Description

Toggles player markers (blips on the radar). Must be used when the server starts ([OnGameModeInit](https://open.mp/docs/scripting/callbacks/OnGameModeInit)). For other times, see [SetPlayerMarkerForPlayer](https://open.mp/docs/scripting/functions/SetPlayerMarkerForPlayer).

| Name | Description |
| --- | --- |
| PLAYER\_MARKERS\_MODE:mode | The [mode](https://open.mp/docs/scripting/resources/markermodes) to use for markers. They can be streamed, meaning they are only visible to nearby players. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnGameModeInit()
{
    // Player markers only visible to nearby players
    ShowPlayerMarkers(PLAYER_MARKERS_MODE_STREAMED);
}
```

## Marker Modes

| ID | MODE |
| --- | --- |
| 0 | PLAYER\_MARKERS\_MODE\_OFF |
| 1 | PLAYER\_MARKERS\_MODE\_GLOBAL |
| 2 | PLAYER\_MARKERS\_MODE\_STREAMED |

## Notes

tip

It is also possible to [set a player's color](https://open.mp/docs/scripting/functions/SetPlayerColor) to a color that has full transparency (no alpha value). This makes it possible to show markers on a per-player basis.

## Related Functions

-   [SetPlayerMarkerForPlayer](https://open.mp/docs/scripting/functions/SetPlayerMarkerForPlayer): Set a player's marker.
-   [LimitPlayerMarkerRadius](https://open.mp/docs/scripting/functions/LimitPlayerMarkerRadius): Limit the player marker radius.
-   [ShowNameTags](https://open.mp/docs/scripting/functions/ShowNameTags): Set nametags on or off.
-   [SetPlayerColor](https://open.mp/docs/scripting/functions/SetPlayerColor): Set a player's color.

## Related Resources

-   [Marker Modes](https://open.mp/docs/scripting/resources/markermodes)
