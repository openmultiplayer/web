---
title: OnPlayerClickPlayerTextDraw
sidebar_label: OnPlayerClickPlayerTextDraw
description: Deze callback wordt aangeroepen wanneer een speler op een player-textdraw klikt.
tags: ["player", "textdraw", "playertextdraw"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler op een player-textdraw klikt. Hij wordt niet aangeroepen wanneer de speler de selectiemodus annuleert met ESC – dan wordt [OnPlayerClickTextDraw](OnPlayerClickTextDraw) aangeroepen.

| Naam                    | Beschrijving                                              |
| ----------------------- | --------------------------------------------------------- |
| playerid                | Het ID van de speler die op de textdraw klikte.          |
| PlayerText:playertextid | Het ID van de player-textdraw waarop is geklikt.         |

## Returns

Wordt altijd als eerste aangeroepen in filterscripts; return 1 blokkeert ook andere scripts.

## Voorbeelden

```c
new PlayerText:gPlayerTextDraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // Create the textdraw
    gPlayerTextDraw[playerid] = CreatePlayerTextDraw(playerid, 10.000000, 141.000000, "MyTextDraw");
    PlayerTextDrawTextSize(playerid, gPlayerTextDraw[playerid], 60.000000, 20.000000);
    PlayerTextDrawAlignment(playerid, gPlayerTextDraw[playerid], TEXT_DRAW_ALIGN_LEFT);
    PlayerTextDrawBackgroundColor(playerid, gPlayerTextDraw[playerid], 0x000000FF);
    PlayerTextDrawFont(playerid, gPlayerTextDraw[playerid], TEXT_DRAW_FONT_1);
    PlayerTextDrawLetterSize(playerid, gPlayerTextDraw[playerid], 0.250000, 1.000000);
    PlayerTextDrawColor(playerid, gPlayerTextDraw[playerid], -1);
    PlayerTextDrawSetProportional(playerid, gPlayerTextDraw[playerid], true);
    PlayerTextDrawSetShadow(playerid, gPlayerTextDraw[playerid], 1);

    // Make it selectable
    PlayerTextDrawSetSelectable(playerid, gPlayerTextDraw[playerid], true);

    // Show it to the player
    PlayerTextDrawShow(playerid, gPlayerTextDraw[playerid]);
    return 1;
}

public OnPlayerKeyStateChange(playerid, KEY:newkeys, KEY:oldkeys)
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
        SendClientMessage(playerid, 0xFFFFFFAA, "You clicked on a player-textdraw.");
        CancelSelectTextDraw(playerid);
        return 1;
    }
    return 0;
}
```

## Notities

:::warning

Wanneer een speler ESC drukt om de selectie te annuleren, wordt [OnPlayerClickTextDraw](OnPlayerClickTextDraw) aangeroepen met ID 'INVALID_TEXT_DRAW'. [OnPlayerClickPlayerTextDraw](OnPlayerClickPlayerTextDraw) wordt dan niet aangeroepen.

:::

## Gerelateerde Callbacks

- [OnPlayerClickTextDraw](OnPlayerClickTextDraw): Deze callback wordt aangeroepen wanneer een speler op een textdraw klikt.
- [OnPlayerClickPlayer](OnPlayerClickPlayer): Deze callback wordt aangeroepen wanneer een speler op een andere speler klikt.

## Gerelateerde Functies

- [PlayerTextDrawSetSelectable](../functions/PlayerTextDrawSetSelectable): Maakt een player-textdraw selecteerbaar via [SelectTextDraw](../functions/SelectTextDraw)
