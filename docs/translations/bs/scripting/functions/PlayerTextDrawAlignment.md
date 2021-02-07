---
title: PlayerTextDrawAlignment
description: Postavite poravnanje teksta play-textraw-a.
tags: ["player", "textdraw", "playertextdraw"]
---

:::warning

Ova je značajka (player-textdraws) dodana u SA-MP 0.3e i neće raditi u ranijim verzijama!

:::

## Deskripcija

Postavite poravnanje teksta play-textraw-a.

| Ime       | Deskripcija                                              |
| --------- | -------------------------------------------------------- |
| playerid  | ID igrača za kojeg postavljamo provananje                |
| Text:text | ID player-textdrawa kojem se postavlja poravnanje        |
| alignment | 1-lijevo 2-centar 3-desno                                |

## Returns

Napomena

Za poravnanje 2 (centar) x i y vrijednosti textsize-a moraju biti zamijenjeni, pogledajte napomene kod PlayerTextDrawTextSize.

## Primjeri

```c
new PlayerText:gMyTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gMyTextdraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 425.0, "Ovo je primjer textdraw-a");
    PlayerTextDrawAlignment(playerid, gMyTextdraw[playerid], 2); // Poravnaj textdraw u centar
    return 1;
}
```

## Zabilješke

:::tip

Za poravnanje 2 (centar) x i y vrijednosti textsize-a moraju biti zamijenjeni, pogledajte napomene kod PlayerTextDrawTextSize.

:::

## Srodne Funkcije

- [CreatePlayerTextDraw](CreatePlayerTextDraw): Kreiranje player-texrdrawa.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Uništi player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): Postavi boju teksta u player-textdrawu.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): Postavi boju box-a od player-textdrawa.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): Postavi boju pozadine player-textdrawa.
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
