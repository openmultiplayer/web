---
title: PlayerTextDrawFont
description: Promjena fonta player-textdrawa.
tags: ["player", "textdraw", "playertextdraw"]
---

:::warning

Ova je značajka (player-textdraws) dodana u SA-MP 0.3e i neće raditi u ranijim verzijama!

:::

## Deskripcija

Promjena fonta player-textdrawa.

| Ime      | Deskripcija                                                                                                           |
| -------- | --------------------------------------------------------------------------------------------------------------------- |
| playerid | ID igrača kojem želimo promijeniti font player-textdrawa                                                              |
| text     | ID player-textdrawa za kojeg želimo promijeniti font                                                                  |
| font     | Postoje četiri font tipa prikazanih ispod. Vrijednost fonta veća od 3 se neće prikazati, i sve preko 16 ruše klijent  |

Dostupni fontovi:

|

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
new PlayerText:gWelcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // Prvo, kreiramo textdraw
    gWelcomeText[playerid] = CreatePlayerTextDraw(playerid, 240.0, 580.0, "Dobrodosli na moj SA-MP server");
    // Postavljamo font player-textdrawa 'gWelcomeText' na 2.
    PlayerTextDrawFont(playerid, gWelcomeText[playerid], 2);
}

public OnPlayerDisconnect(playerid)
{
    PlayerTextDrawHide(playerid, gWelcomeText[playerid]);
}
```

## Srodne Funkcije

- [CreatePlayerTextDraw](CreatePlayerTextDraw): Kreiranje player-textdrawa.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Uništi player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): Postavi boju teksta u player-textdrawu.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): Postavi boju box-a od player-textdrawa.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): Postavi boju pozadine player-textdrawa.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): Postavi poravnanje player-textdrawa.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): Postavi veličinu slova u tekstu player-textdrawa.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): Postavi veličinu box-a player-textdrawa (ili dijela koji reaguje na klik za PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): (Ne) Koristi outline za player-textdraw.
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): Postavi sjenu na player-textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): Razmjeri razmak teksta u player-textdrawu na proporcionalni omjer.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): (Ne) Koristi box na player-textdrawu.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): Postavi tekst player-textdrawa.
- [PlayerTextDrawShow](PlayerTextDrawShow): Prikaži player-textdraw.
- [PlayerTextDrawHide](PlayerTextDrawHide): Sakrij player-textdraw.
