---
title: OnPlayerClickTextDraw
description: Cette callback est appelée quand un joueur clique sur un textdraw ou le quitte avec la touche ECHAP.
tags: ["player", "textdraw"]
---

## Paramètres

Cette callback est appelée quand un joueur clique sur un textdraw ou le quitte avec la touche ECHAP.

| Nom             | Description                                                                        |
| --------------- | ---------------------------------------------------------------------------------- |
| `int` playerid  | ID du joueur qui clique sur le textdraw.                                           |
| `int`clickedid  | ID du textdraw cliqué. INVALID_TEXT_DRAW si le textdraw est quitté.                |

## Valeur de retour

La callback est toujours appelée en premier dans les filterscripts, donc return 1, faute de quoi les autres scripts ne pourront pas communiquer avec cette callback.

## Exemple

```c
new Text:gTextDraw;

public OnGameModeInit()
{
    gTextDraw = TextDrawCreate(10.000000, 141.000000, "TextDraw");
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
         SendClientMessage(playerid, 0xFFFFFFAA, "Vous avez cliqué sur le textdraw.");
         CancelSelectTextDraw(playerid);
         return 1;
    }
    return 0;
}
```

## Astuces

:::warning

La zone cliquable est définie par TextDrawTextSize. Les paramètres x et y ne doivent pas retourner une valeur de 0 ou une valeur négative.

N'utilisez pas CancelSelectTextDraw sans condition dans cette callback. Il en résulterait une loop infinie.

:::

## Callbacks connexes

- [OnPlayerClickPlayerTextDraw](OnPlayerClickPlayerTextDraw): Quand un joueur clique sur un player-textdraw.
- [OnPlayerClickPlayer](OnPlayerClickPlayer): Quand un joueur clique sur un autre joueur dans la tablist.
- [OnPlayerClickMap](OnPlayerClickMap): Quand un joueur place un point sur la map avec le clic droit.

