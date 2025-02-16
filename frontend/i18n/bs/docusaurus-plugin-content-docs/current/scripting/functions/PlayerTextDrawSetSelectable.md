---
title: PlayerTextDrawSetSelectable
description: Omogućuje/onemogućuje da li player-textdraw može biti selektovan ili ne.
tags: ["player", "textdraw", "playertextdraw"]
---

## Deskripcija

Omogućuje/onemogućuje da li player-textdraw može biti selektovan ili ne.

| Ime             | Deskripcija                                                                                             |
|-----------------|---------------------------------------------------------------------------------------------------------|
| playerid        | ID igrača čiji player-textdraw se (ne)može selektovati.                                                 |
| PlayerText:text | ID player-textdrawa za postaviti selektabilnost.                                                        |
| bool:set        | Postavi da je player-textdraw selektabilan (true) ili ne (false). Po zadanim postavkama ovo je (false). |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/select_ptd", true))
    {
        for (new i = 0; i < MAX_PLAYER_TEXT_DRAWS; i++)
        {
            PlayerTextDrawSetSelectable(playerid, PlayerText:i, true);
        }
        SendClientMessage(playerid, 0xFFFFFFAA, "SERVER: Svi player-textdraws se sada mogu selektovati!");
        return 1;
    }
    return 0;
}
```

## Zabilješke

:::tip

Upotrijebite [PlayerTextDrawTextSize](PlayerTextDrawTextSize) da definirate područje na koje je moguće kliknuti.

:::

:::warning

PlayerTextDrawSetSelectable MORA SE koristiti PRIJE nego što se textdraw prikaže igraču.

:::

## Srodne Funkcije

- [SelectTextDraw](SelectTextDraw): Omogućava miš kako bi igrač mogao da selektuje textdraw.
- [CancelSelectTextDraw](CancelSelectTextDraw): Prekida selekciju textdrawa sa mišem.

## Srodne Callbacks

- [OnPlayerClickPlayerTextDraw](../callbacks/OnPlayerClickPlayerTextDraw): Pozvano kada igrač klikne na player-textdraw.
