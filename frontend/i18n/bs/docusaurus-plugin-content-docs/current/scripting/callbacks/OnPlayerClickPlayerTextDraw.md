---
title: OnPlayerClickPlayerTextDraw
sidebar_label: OnPlayerClickPlayerTextDraw
description: Ovaj callback je pozvan kada igrač klikne na player-textdraw.
tags: ["player", "textdraw", "playertextdraw"]
---

## Deskripcija

Ovaj callback je pozvan kada igrač klikne na player-textdraw. Nije pozvan kada igrač napusti select mode (ESC) - međutim, OnPlayerClickTextDraw jeste.

| Ime          | Deskripcija                                    |
| ------------ | ---------------------------------------------- |
| playerid     | ID igrača koji je selektovao player-textdraw.  |
| playertextid | ID player-textdrawa kojeg je igrač selektovao. |

## Returns

Uvijek je pozvana prva u filterskripti tako da return-ovanje 1 tu blokira ostale skripte da je vide.

## Primjeri

```c
new PlayerText:gPlayerTextDraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // Napravi textdraw
    gPlayerTextDraw[playerid] = CreatePlayerTextDraw(playerid, 10.000000, 141.000000, "MyTextDraw");
    PlayerTextDrawTextSize(playerid, gPlayerTextDraw[playerid], 60.000000, 20.000000);
    PlayerTextDrawAlignment(playerid, gPlayerTextDraw[playerid],0);
    PlayerTextDrawBackgroundColor(playerid, gPlayerTextDraw[playerid],0x000000ff);
    PlayerTextDrawFont(playerid, gPlayerTextDraw[playerid], 1);
    PlayerTextDrawLetterSize(playerid, gPlayerTextDraw[playerid], 0.250000, 1.000000);
    PlayerTextDrawColor(playerid, gPlayerTextDraw[playerid], 0xffffffff);
    PlayerTextDrawSetProportional(playerid, gPlayerTextDraw[playerid], 1);
    PlayerTextDrawSetShadow(playerid, gPlayerTextDraw[playerid], 1);

    // Postavi ga mogućim za selektovati
    PlayerTextDrawSetSelectable(playerid, gPlayerTextDraw[playerid], 1);

    // Prikaži ga igraču
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
         SendClientMessage(playerid, 0xFFFFFFAA, "Kliknuo si na textdraw.");
         CancelSelectTextDraw(playerid);
         return 1;
    }
    return 0;
}
```

## Zabilješke

:::warning

Kada igrač pritisne ESC da prekine selektovanje textdraw-a, OnPlayerClickTextDraw biva pozvan sa textdraw IDem od 'INVALID_TEXT_DRAW'. OnPlayerClickPlayerTextDraw neće biti pozvan.

:::

## Srodne Funkcije

- [PlayerTextDrawSetSelectable](../functions/PlayerTextDrawSetSelectable.md): Postavlja da li je player-textraw moguć za selektovanje ili ne.
- [OnPlayerClickTextDraw](OnPlayerClickTextDraw.md): Pozvana kada igrač klikne na player-textdraw.
- [OnPlayerClickPlayer](OnPlayerClickPlayer.md): Pozvana kada jedan igrač klikne na drugog.
