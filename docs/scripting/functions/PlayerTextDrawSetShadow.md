---
title: "PlayerTextDrawSetShadow | open.mp"
description: "Adds a shadow to the bottom-right side of the text in a player-textdraw."
canonical: https://open.mp/docs/scripting/functions/PlayerTextDrawSetShadow
language: en
---

# PlayerTextDrawSetShadow

## Description

Adds a shadow to the bottom-right side of the text in a player-textdraw. The shadow font matches the text font.

| Name | Description |
| --- | --- |
| playerid | The ID of the player whose player-textdraw to set the shadow size of. |
| PlayerText:textid | The ID of the player-textdraw to change the shadow of |
| shadowSize | The size of the shadow. 0 will hide the shadow. |

## Returns

**true** - The function was executed successfully.

**false** - The function failed to execute. This means the player-textdraw doesn't exist.

## Examples

```c
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my server!");
    PlayerTextDrawSetShadow(playerid, welcomeText[playerid], 1);

    PlayerTextDrawShow(playerid, welcomeText[playerid]);
    return 1;
}
```

## Notes

note

The shadow can be cut by the box area if the size is set too big for the area.

## Related Functions

-   [CreatePlayerTextDraw](https://open.mp/docs/scripting/functions/CreatePlayerTextDraw): Create a player-textdraw.
-   [PlayerTextDrawDestroy](https://open.mp/docs/scripting/functions/PlayerTextDrawDestroy): Destroy a player-textdraw.
-   [PlayerTextDrawGetShadow](https://open.mp/docs/scripting/functions/PlayerTextDrawGetShadow): Get the shadow size on a player-textdraw.
-   [PlayerTextDrawColor](https://open.mp/docs/scripting/functions/PlayerTextDrawColor): Set the color of the text in a player-textdraw.
-   [PlayerTextDrawBoxColor](https://open.mp/docs/scripting/functions/PlayerTextDrawBoxColor): Set the color of a player-textdraw's box.
-   [PlayerTextDrawBackgroundColor](https://open.mp/docs/scripting/functions/PlayerTextDrawBackgroundColor): Set the background color of a player-textdraw.
-   [PlayerTextDrawAlignment](https://open.mp/docs/scripting/functions/PlayerTextDrawAlignment): Set the alignment of a player-textdraw.
-   [PlayerTextDrawFont](https://open.mp/docs/scripting/functions/PlayerTextDrawFont): Set the font of a player-textdraw.
-   [PlayerTextDrawLetterSize](https://open.mp/docs/scripting/functions/PlayerTextDrawLetterSize): Set the letter size of the text in a player-textdraw.
-   [PlayerTextDrawTextSize](https://open.mp/docs/scripting/functions/PlayerTextDrawTextSize): Set the size of a player-textdraw box (or clickable area for PlayerTextDrawSetSelectable).
-   [PlayerTextDrawSetOutline](https://open.mp/docs/scripting/functions/PlayerTextDrawSetOutline): Toggle the outline on a player-textdraw.
-   [PlayerTextDrawSetProportional](https://open.mp/docs/scripting/functions/PlayerTextDrawSetProportional): Scale the text spacing in a player-textdraw to a proportional ratio.
-   [PlayerTextDrawUseBox](https://open.mp/docs/scripting/functions/PlayerTextDrawUseBox): Toggle the box on a player-textdraw.
-   [PlayerTextDrawSetString](https://open.mp/docs/scripting/functions/PlayerTextDrawSetString): Set the text of a player-textdraw.
-   [PlayerTextDrawShow](https://open.mp/docs/scripting/functions/PlayerTextDrawShow): Show a player-textdraw.
-   [PlayerTextDrawHide](https://open.mp/docs/scripting/functions/PlayerTextDrawHide): Hide a player-textdraw.
