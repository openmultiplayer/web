---
title: OnPlayerClickTextDraw
description: Acest callback este apelat atunci când un jucător face clic pe un textdraw sau anulează modul de selectare cu tasta ESC.
tags: ["player", "textdraw"]
---

## Descriere

Acest callback este apelat atunci când un jucător face clic pe un textdraw sau anulează modul de selectare cu tasta ESC.

| Nume      | Descriere                                                                               |
| --------- | ----------------------------------------------------------------------------------------|
| playerid  | ID-ul jucătorului care a făcut clic pe textdraw.                                        |
| clickedid | ID-ul textdraw-ului care a fost apasat. INVALID_TEXT_DRAW dacă selecția a fost anulată. |

## Returnări

Este întotdeauna numit primul în filterscripts, așa că returnarea 1 acolo blochează și alte scripturi să-l vadă.

## Exemple

```c
new Text:gTextDraw;

public OnGameModeInit()
{
    gTextDraw = TextDrawCreate(10.000000, 141.000000, "TextDraw-ul Meu");
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
         SendClientMessage(playerid, 0xFFFFFFAA, "Ați făcut clic pe un textdraw.");
         CancelSelectTextDraw(playerid);
         return 1;
    }
    return 0;
}
```

## Note

:::warning

Zona pe care se poate face clic este definită de TextDrawTextSize. Parametrii x și y trecuți acelei funcție nu trebuie să fie zero sau negativi. Nu utilizați CancelSelectTextDraw necondiționat în acest callback. Aceasta are ca rezultat o buclă infinită.

:::

## Funcții similare

- [OnPlayerClickPlayerTextDraw](OnPlayerClickPlayerTextDraw): Apelat atunci când un jucător dă clic pe un textdraw de jucător.
- [OnPlayerClickPlayer](OnPlayerClickPlayer): Apelat când un jucător face clic pe altul.