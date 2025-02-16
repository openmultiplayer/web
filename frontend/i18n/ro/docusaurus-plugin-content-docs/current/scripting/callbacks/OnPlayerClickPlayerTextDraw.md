---
title: OnPlayerClickPlayerTextDraw
description: Acest callback este apelat atunci când un jucător dă clic pe un player-textdraw.
tags: ["player", "textdraw", "playertextdraw"]
---

## Descriere

Acest callback este apelat atunci când un jucător dă clic pe un player-textdraw. Nu este apelat atunci când jucătorul anulează modul de selectare (ESC) - cu toate acestea, OnPlayerClickTextDraw este.

| Nume         | Descriere                                               |
| ------------ | ------------------------------------------------------- |
| playerid     | ID-ul jucătorului care a selectat un textdraw           |
| playertextid | ID-ul textdraw-ului jucătorului pe care l-a selectat.   |

## Returnări

Este întotdeauna numit primul în filterscripts, așa că returnarea 1 acolo blochează și alte scripturi să-l vadă.

## Exemple

```c
new PlayerText:gPlayerTextDraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // Creați textdraw-ul
    gPlayerTextDraw[playerid] = CreatePlayerTextDraw(playerid, 10.000000, 141.000000, "TextDraw-ul meu");
    PlayerTextDrawTextSize(playerid, gPlayerTextDraw[playerid], 60.000000, 20.000000);
    PlayerTextDrawAlignment(playerid, gPlayerTextDraw[playerid],0);
    PlayerTextDrawBackgroundColor(playerid, gPlayerTextDraw[playerid],0x000000ff);
    PlayerTextDrawFont(playerid, gPlayerTextDraw[playerid], 1);
    PlayerTextDrawLetterSize(playerid, gPlayerTextDraw[playerid], 0.250000, 1.000000);
    PlayerTextDrawColor(playerid, gPlayerTextDraw[playerid], 0xffffffff);
    PlayerTextDrawSetProportional(playerid, gPlayerTextDraw[playerid], 1);
    PlayerTextDrawSetShadow(playerid, gPlayerTextDraw[playerid], 1);

    // Faceți-l selectabil
    PlayerTextDrawSetSelectable(playerid, gPlayerTextDraw[playerid], 1);

    // Arată-l jucătorului
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
         SendClientMessage(playerid, 0xFFFFFFAA, "Ați apasat pe un textdraw.");
         CancelSelectTextDraw(playerid);
         return 1;
    }
    return 0;
}
```

## Note

:::warning

Când un jucător apasă ESC pentru a anula selectarea unui textdraw, OnPlayerClickTextDraw este apelat cu un ID textdraw „INVALID_TEXT_DRAW”. De asemenea, OnPlayerClickPlayerTextDraw nu va fi numit.

:::

## Funcții similare

- [PlayerTextDrawSetSelectable](../functions/PlayerTextDrawSetSelectable): Stabilește dacă un textdraw de jucator poate fi selectat prin SelectTextDraw
- [OnPlayerClickTextDraw](OnPlayerClickTextDraw): Apelat atunci când un jucător dă clic pe un textdraw.
- [OnPlayerClickPlayer](OnPlayerClickPlayer): Apelat când un jucător face clic pe altul.