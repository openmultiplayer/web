---
title: PlayerTextDrawHide
description: Sakrivanje player-textdrawa igraču za kojeg je prethodno bio kreiran.
tags: ["player", "textdraw", "playertextdraw"]
---

:::warning

Ova je značajka (player-textdraws) dodana u SA-MP 0.3e i neće raditi u ranijim verzijama!

:::

## Deskripcija

Hide a player-textdraw from the player it was created for

| Ime      | Deskripcija                        |
| -------- | ---------------------------------- |
| playerid | ID igrača kojem sakrivamo textdraw |
| text     | ID textdraw kojeg sakrivamo        |

## Returns

Sakrivanje player-textdrawa igraču za kojeg je prethodno bio kreiran.

## Primjeri

```c
public OnPlayerDisconnect(playerid)
{
    PlayerTextDrawHide(playerid, gWelcomeText[playerid]);
}
```

## Srodne Funkcije

- [PlayerTextDrawShow](PlayerTextDrawShow): Prikaži player-textdraw.
- [CreatePlayerTextDraw](CreatePlayerTextDraw): Kreiranje player-textdrawa.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Uništi player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): Postavi boju teksta u player-textdrawu.
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
