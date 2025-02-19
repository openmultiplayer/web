---
title: CancelSelectTextDraw
sidebar_label: CancelSelectTextDraw
description: Prekid selektovanja textdrawa pomoću miša.
tags: ["textdraw"]
---

## Deskripcija

Cancel textdraw selection with the mouse

| Ime      | Deskripcija                                                         |
| -------- | ------------------------------------------------------------------- |
| playerid | ID igrača za kojeg bi se trebala prekinuti selekcija textdrawova    |

## Returns

Ova funkcija ne vraća nikakve posebne vrijednosti.

## Primjeri

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/cancelselect", true))
    {
        CancelSelectTextDraw(playerid);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: TextDraw selection disabled!");
        return 1;
    }
    return 0;
}
```

## Zabilješke

:::warning

\*Ova funkcija poziva OnPlayerClickTextDraw sa INVALID_TEXT_DRAW (65535). Korištenje ove funkcije unutar OnPlayerClickTextDraw bez zahvatanja ovog slučaja izazvati će to da će klijenti ući u beskonačnu petlju.

:::

## Srodne Funkcije

- [SelectTextDraw](SelectTextDraw): Omogućuje igraču da pomoću miša selektuje textdraw.
- [TextDrawSetSelectable](TextDrawSetSelectable): Određuje da li je textdraw moguće selektovati putem SelectTextDraw.
- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): Poziva se kada igrač klikne na textdraw.
