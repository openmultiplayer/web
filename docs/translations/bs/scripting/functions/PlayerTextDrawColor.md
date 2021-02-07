---
title: PlayerTextDrawColor
description: Postavljanje boje teksta na player-textdrawu.
tags: ["player", "textdraw", "playertextdraw"]
---

:::warning

Ova je značajka (player-textdraws) dodana u SA-MP 0.3e i neće raditi u ranijim verzijama!

:::

## Deskripcija

Postavljanje boje teksta na player-textdrawu.

| Ime      | Deskripcija                                  |
| -------- | -------------------------------------------- |
| playerid | ID igrača kojem postavljamo boju teksta      |
| text     | TextDraw kojeg mijenjamo                     |
| color    | Boja u heksadecimalnom formatu               |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
new PlayerText:pTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    pTextdraw[playerid] = CreatePlayerTextDraw(playerid, x, y, "...");
    PlayerTextDrawColor(playerid, pTextdraw[playerid], 0xFF0000FF); // Crveni tekst
    PlayerTextDrawShow(playerid, pTextdraw[playerid]);
    return 1;
}
```

## Zabilješke

:::tip

Također,možete koristiti i GameText boje unutar textdraw-ova. TextDraw mora biti ponovno prikazan igraču kako bi ste boja promijenila.

:::

## Srodne Funkcije

- [CreatePlayerTextDraw](CreatePlayerTextDraw): Kreiranje player-textdrawa.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Uništi player-textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): Postavi boju box-a od player-textdrawa.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): Postavi boju pozadine player-textdrawa.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): Postavi poravnanje player-textdrawa.
- [PlayerTextDrawFont](PlayerTextDrawFont): Postavi font player-textdrawa.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): Postavi veličinu slova u tekstu player-textdrawa.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): Postavi veličinu box-a player-textdrawa (ili dijela koji reaguje na klik za PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): (Ne) Koristi outline za player-textdraw.
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): Postavi sjenu na player-textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): Razmjeri razmak teksta u player-textdrawu na proporcionalni omjer.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): (Ne) Koristi box na player-textdrawu.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): Postavi tekst player-textdrawa.
- [PlayerTextDrawShow](PlayerTextDrawShow): Prikaži player-textdraw.
- [PlayerTextDrawHide](PlayerTextDrawHide): Sakrij player-textdraw.
