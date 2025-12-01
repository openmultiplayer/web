---
title: OnPlayerClickTextDraw
sidebar_label: OnPlayerClickTextDraw
description: Deze callback wordt aangeroepen wanneer een speler op een textdraw klikt of de selectiemodus annuleert met de Escape-toets.
tags: ["player", "textdraw"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler op een textdraw klikt of de selectiemodus annuleert met de Escape-toets.

| Naam           | Beschrijving                                                                   |
| -------------- | ----------------------------------------------------------------------------- |
| playerid       | Het ID van de speler die op de textdraw klikte.                               |
| Text:clickedid | Het ID van de geklikte textdraw. INVALID_TEXT_DRAW als selectie werd geannuleerd. |

## Returns

Wordt altijd als eerste aangeroepen in filterscripts, dus return 1 blokkeert ook andere scripts om het te verwerken.

## Voorbeelden

```c
new Text:gTextDraw;

public OnGameModeInit()
{
    gTextDraw = TextDrawCreate(10.000000, 141.000000, "MyTextDraw");
    TextDrawTextSize(gTextDraw, 60.000000, 20.000000);
    TextDrawAlignment(gTextDraw, TEXT_DRAW_ALIGN_LEFT);
    TextDrawBackgroundColor(gTextDraw, 0x000000FF);
    TextDrawFont(gTextDraw, TEXT_DRAW_FONT_1);
    TextDrawLetterSize(gTextDraw, 0.250000, 1.000000);
    TextDrawColor(gTextDraw, -1);
    TextDrawSetProportional(gTextDraw, true);
    TextDrawSetShadow(gTextDraw, 1);
    TextDrawSetSelectable(gTextDraw, true);
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

## Notities

:::warning

- Het klikbare gebied wordt gedefinieerd door [TextDrawTextSize](../functions/TextDrawTextSize).
- De `x` en `y` parameters die aan die functie worden doorgegeven mogen niet nul of negatief zijn.
- Gebruik [CancelSelectTextDraw](../functions/CancelSelectTextDraw) niet onvoorwaardelijk binnen deze callback. Dit resulteert in een **oneindige lus**.

:::

## Gerelateerde Callbacks

- [OnPlayerClickPlayerTextDraw](OnPlayerClickPlayerTextDraw): Deze callback wordt aangeroepen wanneer een speler op een player-textdraw klikt.
- [OnPlayerClickPlayer](OnPlayerClickPlayer): Deze callback wordt aangeroepen wanneer een speler op een andere speler klikt.

## Gerelateerde Functies

- [SelectTextDraw](../functions/SelectTextDraw): Schakelt de muis in, zodat de speler een textdraw kan selecteren.
- [CancelSelectTextDraw](../functions/CancelSelectTextDraw): Annuleer textdraw-selectie met de muis.