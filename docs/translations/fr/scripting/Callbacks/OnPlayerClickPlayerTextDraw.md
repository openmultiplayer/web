---
title: OnPlayerClickPlayerTextDraw
description: Cette callback est appelée quand un joueur clique sur un player-textdraw.
tags: ["player", "textdraw", "playertextdraw"]
---

## Paramètres

Cette callback est appelée quand un joueur clique sur un player-textdraw. Mais elle ne l'est pas quand le joueur quitte le textdraw sélectionné (ECHAP) - mais [OnPlayerClickTextDraw](OnPlayerClickTextDraw) l'est.

| Nom                | Description                                                |
| ------------------ | ---------------------------------------------------------- |
| `int` playerid     | ID du joueur qui a sélectionné le textdraw                 |
| `int` playertextid | ID du player-textdraw qui a été sélectionné par `playerid` |

## Valeur de retour

La callback est toujours appelée en premier dans les filterscripts, donc return 1, faute de quoi les autres scripts ne pourront pas communiquer avec cette callback.

## Exemple

```c
new PlayerText:gPlayerTextDraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // Création du TextDraw
    gPlayerTextDraw[playerid] = CreatePlayerTextDraw(playerid, 10.000000, 141.000000, "TextDraw");
    PlayerTextDrawTextSize(playerid, gPlayerTextDraw[playerid], 60.000000, 20.000000);
    PlayerTextDrawAlignment(playerid, gPlayerTextDraw[playerid],0);
    PlayerTextDrawBackgroundColor(playerid, gPlayerTextDraw[playerid],0x000000ff);
    PlayerTextDrawFont(playerid, gPlayerTextDraw[playerid], 1);
    PlayerTextDrawLetterSize(playerid, gPlayerTextDraw[playerid], 0.250000, 1.000000);
    PlayerTextDrawColor(playerid, gPlayerTextDraw[playerid], 0xffffffff);
    PlayerTextDrawSetProportional(playerid, gPlayerTextDraw[playerid], 1);
    PlayerTextDrawSetShadow(playerid, gPlayerTextDraw[playerid], 1);

    // Le rendre sélectionnable
    PlayerTextDrawSetSelectable(playerid, gPlayerTextDraw[playerid], 1);

    // Le montrer au joueur
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
         SendClientMessage(playerid, 0xFFFFFFAA, "Vous avez cliqué sur un textdraw.");
         CancelSelectTextDraw(playerid);
         return 1;
    }
    return 0;
}
```

## Astuces

:::warning

Quand un joueur quitte le textdraw sélectionné avec ECHAP, OnPlayerClickTextDraw est appelé avec le textdraw ID `INVALID_TEXT_DRAW`. OnPlayerClickPlayerTextDraw ne sera pas appelé.

:::

## Fonctions connexes

- [PlayerTextDrawSetSelectable](../functions/PlayerTextDrawSetSelectable): Rend un player-textdraw sélectionnable par un joueur.

## Callbacks connexes

- [OnPlayerClickTextDraw](OnPlayerClickTextDraw): Quand un joueur clique sur un textdraw.
- [OnPlayerClickPlayer](OnPlayerClickPlayer): Quand un joueur clique sur un autre.
- [OnPlayerClickMap](OnPlayerClickMap): Quand un joueur place un point sur la map avec le clic droit.

