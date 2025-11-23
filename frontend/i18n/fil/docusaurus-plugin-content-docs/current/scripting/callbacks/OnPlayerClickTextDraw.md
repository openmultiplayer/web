---
title: OnPlayerClickTextDraw
sidebar_label: OnPlayerClickTextDraw
description: This callback is called when a player clicks on a textdraw or cancels the select mode with the Escape key.
tags: ["player", "textdraw"]
---

## Description

Ang callback na ito ay natatawag kapag ang player ay pumindot sa isang textdraw o nag cancel sa select mode gamit ang `ESC` key.

| Name      | Description                                                                   |
| --------- | ----------------------------------------------------------------------------- |
| playerid  | The ID of the player that clicked on the textdraw.                            |
| clickedid | The ID of the clicked textdraw. INVALID_TEXT_DRAW if selection was cancelled. |

| Pangalan  | Deskripsyon                                                                   |
| --------- | ----------------------------------------------------------------------------- |
| playerid  | Ang ID ng player na pumindot sa textdraw.                                     |
| clickedid | Ang ID ng textdraw na pinindot ng player. INVALID_TEXT_DRAW kapag cinancel.   |

## Returns

Lagi itong natatawag una sa mga filterscript kaya kapag nag return 1 ay ibloblock nito ang ibang script mula sa pagtingin dito.

## Mga Halimbawa

```c
new Text:gTextDraw;

public OnGameModeInit()
{
    // Paggawa ng textdraw
    gTextDraw = TextDrawCreate(10.000000, 141.000000, "MyTextDraw");
    TextDrawTextSize(gTextDraw,60.000000, 20.000000);
    TextDrawAlignment(gTextDraw,0);
    TextDrawBackgroundColor(gTextDraw,0x000000ff);
    TextDrawFont(gTextDraw,1);
    TextDrawLetterSize(gTextDraw,0.250000, 1.000000);
    TextDrawColor(gTextDraw,0xffffffff);
    TextDrawSetProportional(gTextDraw,1);
    TextDrawSetShadow(gTextDraw,1);
    TextDrawSetSelectable(gTextDraw, 1);
    return 1;
}

public OnPlayerKeyStateChange(playerid, KEY:newkeys, KEY:oldkeys)
{
    if (newkeys == KEY_SUBMISSION)
    {
        TextDrawShowForPlayer(playerid, gTextDraw);
        SelectTextDraw(playerid, 0xFF4040AA);
    }
    return 1;
}

public OnPlayerClickTextDraw(playerid, Text:clickedid)
{
    if (clickedid == gTextDraw)
    {
         SendClientMessage(playerid, 0xFFFFFFAA, "You clicked on a textdraw.");
         CancelSelectTextDraw(playerid);
         return 1;
    }
    return 0;
}
```

## Mga Dapat Unawain

:::warning

Ang napipindot na area ay na dedefine sa TextDrawTextSize. Ang x at y na parameter ay napapass sa function na iyon at hindi eto pwedeng maging zero o negative. Wag gamitin ang CancelSelectTextdraw ng hindi alam ang gagawin o walang pasubali sa callback. Magreresulta ito sa infinite na loop.

:::

## Related Functions

- [OnPlayerClickPlayerTextDraw](OnPlayerClickPlayerTextDraw): Natatawag kapag ang player ay pumindot sa isang player-textdraw.
- [OnPlayerClickPlayer](OnPlayerClickPlayer): Natatawag kapag ang player ay pinindot ang ibang player.
