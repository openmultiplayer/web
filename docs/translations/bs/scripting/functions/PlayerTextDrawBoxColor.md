---
title: PlayerTextDrawBoxColor
description: Postavljanje boje textdraw okvira (PlayerTextDrawUseBox).
tags: ["player", "textdraw", "playertextdraw"]
---

:::warning

Ova je značajka (player-textdraws) dodana u SA-MP 0.3e i neće raditi u ranijim verzijama!

:::

## Deskripcija

Postavljanje boje textdraw okvira (PlayerTextDrawUseBox).

| Ime      | Deskripcija                                            |
| -------- | ------------------------------------------------------ |
| playerid | ID igrača kojem postavljamo textdraw okvir             |
| text     | ID plyer-textdrawa kojem postavljamo okvir             |
| color    | Boja koja se postavlja. Alfa (providnost) je podržana  |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
new PlayerText:pTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    pTextdraw[playerid] = CreatePlayerTextDraw(playerid, x, y, "...");
    PlayerTextDrawUseBox(playerid, pTextdraw[playerid], 1);
    PlayerTextDrawBoxColor(playerid, pTextdraw[playerid], 0xFF0000FF); // Crveni okvir bez prozirnosti
    return 1;
}
```

## Srodne Funkcije

- [CreatePlayerTextDraw](CreatePlayerTextDraw): Kreiranje player-textdrawa.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Uništi player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): Postavi boju teksta u player-textdrawu.
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
