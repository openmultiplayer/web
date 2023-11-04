---
title: OnPlayerClickTextDraw
description: Ovaj callback se poziva kada igrač klikne na textdraw ili napusti select mode pritiskom na tipku 'Escape'.
tags: ["player", "textdraw"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3e i ne radi u nižim verzijama!

:::

## Deskripcija

Ovaj callback se poziva kada igrač klikne na textdraw ili napusti select mode pritiskom na tipku 'Escape'.

| Ime       | Deskripcija                                                                                |
| --------- | ------------------------------------------------------------------------------------------ |
| playerid  | ID igrača koji je kliknuo na textdraw.                                                     |
| clickedid | ID textdraw-a kojeg je igrač kliknuo. INVALID_TEXT_DRAW ako je igrač napustio select mode. |

## Returns

Uvijek je pozvana prva u filterskripti tako da return-ovanje 1 tu blokira ostale skripte da je vide.

## Primjeri

```c
new Text:gTextDraw;

public OnGameModeInit()
{
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

public OnPlayerKeyStateChange(playerid, newkeys, oldkeys)
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
         SendClientMessage(playerid, 0xFFFFFFAA, "Kliknuo si na textdraw.");
         CancelSelectTextDraw(playerid);
         return 1;
    }
    return 0;
}
```

## Zabilješke

:::warning

Klikljivo područje je definirano preko TextDrawTextSize. Parametri x i y prosljeđeni toj funkciji ne smiju biti nula ili negativni. Ne koristi CancelSelectTextDraw bezuslovno unutar ovog callback-a. To rezultira beskonačnom petljom.

:::

## Srodne Funkcije

- [OnPlayerClickPlayerTextDraw](OnPlayerClickPlayerTextDraw): Pozvana kada igrač klikne na player-textdraw.
- [OnPlayerClickPlayer](OnPlayerClickPlayer): Pozvana kada jedan igrač klikne na drugog.
