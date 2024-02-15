---
title: OnPlayerClickPlayerTextDraw
description: This callback is called when a player clicks on a player-textdraw.
tags: ["player", "textdraw", "playertextdraw"]
---

<VersionWarn name='callback' version='SA-MP 0.3e' />

## Deskripsyon

Ang callback na ito ay natatawag kapag ang player ay pumindot sa isang player-textdraw. Hindi ito natatawag kapag ang player ay nag cancel gamit ang (ESC)

| Pangalan     | Deskripsyon                                             |
| ------------ | ------------------------------------------------------- |
| playerid     | Ang ID ng player na pumindot sa textdraw                |
| playertextid | Ang ID ng player-textdraw na pinindot ng player         |

## Returns

Lagi itong natatawag una sa mga filterscript kaya kapag nag return 1 ay ibloblock nito ang ibang script mula sa pagtingin dito.

## Mga Halimbawa

```c
new PlayerText:gPlayerTextDraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // Paggawa ng textdraw
    gPlayerTextDraw[playerid] = CreatePlayerTextDraw(playerid, 10.000000, 141.000000, "MyTextDraw");
    PlayerTextDrawTextSize(playerid, gPlayerTextDraw[playerid], 60.000000, 20.000000);
    PlayerTextDrawAlignment(playerid, gPlayerTextDraw[playerid],0);
    PlayerTextDrawBackgroundColor(playerid, gPlayerTextDraw[playerid],0x000000ff);
    PlayerTextDrawFont(playerid, gPlayerTextDraw[playerid], 1);
    PlayerTextDrawLetterSize(playerid, gPlayerTextDraw[playerid], 0.250000, 1.000000);
    PlayerTextDrawColor(playerid, gPlayerTextDraw[playerid], 0xffffffff);
    PlayerTextDrawSetProportional(playerid, gPlayerTextDraw[playerid], 1);
    PlayerTextDrawSetShadow(playerid, gPlayerTextDraw[playerid], 1);

    // Gawing napipindot
    PlayerTextDrawSetSelectable(playerid, gPlayerTextDraw[playerid], 1);

    // Ipakita sa player
    PlayerTextDrawShow(playerid, gPlayerTextDraw[playerid]);
    return 1;
}

public OnPlayerKeyStateChange(playerid, newkeys, oldkeys)
{
    if (newkeys == KEY_SUBMISSION)
    {
        SelectTextDraw(playerid, 0xFF4040AA);
    }
    return 1;
}

public OnPlayerClickPlayerTextDraw(playerid, PlayerText:playertextid)
{
    if (playertextid == gPlayerTextDraw[playerid])
    {
         SendClientMessage(playerid, 0xFFFFFFAA, "Pinindot mo ang textdraw.");
         CancelSelectTextDraw(playerid);
         return 1;
    }
    return 0;
}
```

## Mga dapat tandaan

:::warning

Kapag ang player ay pinindot ang ESC para i cancel ang textdraw, OnPlayerClickTextDraw ay matatawag kasama ang ID na `INVALID_TEXT_DRAW`. OnPlayerClickPlayerTextDraw ay hindi rin matatawag.

:::

## Mga Kaugnay na Functions

- [PlayerTextDrawSetSelectable](../functions/PlayerTextDrawSetSelectable.md): I set depende kung ang player-textdraw ay napipindot tungo sa SelectTextDraw.
- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw.md): Natatawag kapag ang player ay pumindot sa isang textdraw.
- [OnPlayerClickPlayer](../callbacks/OnPlayerClickPlayer.md): Natatawag kapag ang player ay pinindot ang ibang player.
