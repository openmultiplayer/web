---
title: "Textdraws"
sidebar_label: "Textdraws"
description: Een textdraw is tekst die op het scherm van een speler wordt getekend.
---

## Wat is een textdraw?

Een textdraw is tekst die op het scherm van een speler wordt getekend en onbeperkt zichtbaar kan blijven. Ze variëren van eenvoudige tekst tot dynamische balken e.d.

## Globale textdraws

Globale textdraws worden voor iedereen gemaakt/tonen en hebben een limiet (zie [limieten](../resources/limits)). Relevante functies zijn o.a. `TextDrawCreate`, `TextDrawDestroy`, `TextDrawColor`, `TextDrawBackgroundColor`, `TextDrawAlignment`, `TextDrawFont`, `TextDrawLetterSize`, `TextDrawTextSize`, `TextDrawSetOutline`, `TextDrawSetShadow`, `TextDrawSetProportional`, `TextDrawUseBox`, `TextDrawSetString`, `TextDrawShowForPlayer/All`, `TextDrawHideForPlayer/All`, en de `TextDrawGet*` helpers.

## Player‑textdraws

Per‑speler textdraws bestaan alleen voor één speler (max 256 per speler). Gebruik ze voor niet‑statische UI (bijv. statistieken). Analoge functies bestaan met prefix `PlayerTextDraw*`.

## Variabele declaratie

Kies of je een globale of per‑speler textdraw nodig hebt, en declareer een variabele met passende tag (`Text:` of `PlayerText:`) en initialiseer naar `INVALID_*_TEXT_DRAW`.

## Aanmaken

Gebruik `TextDrawCreate(x, y, text)` (typisch in `OnGameModeInit`). Daarna stel je eigenschappen in en toon je de textdraw.

## Lettertype

Er zijn 4 tekstfonts (0–3) en een sprite‑font (4) i.c.m. `TextDrawTextSize` voor textures.

## Tonen

Voor één speler: `TextDrawShowForPlayer(playerid, text)`. Voor alle spelers: `TextDrawShowForAll()`.

## Tips

- Gebruik gehele coördinaten voor consistente weergave.
- Een X:Y lettergrootte‑verhouding van 1:4 oogt vaak het best.


