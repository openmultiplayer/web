---
title: PlayerTextDrawBackgroundColor
description: Podešavanje pozadinske boje za player-textdraw.
tags: ["player", "textdraw", "playertextdraw"]
---

:::warning

Ova je značajka (player-textdraws) dodana u SA-MP 0.3e i neće raditi u ranijim verzijama!

:::

## Deskripcija

Podešavanje pozadinske boje za player-textdraw.

| Ime      | Deskripcija                                                    |
| -------- | -------------------------------------------------------------- |
| playerid | ID igrača za kojeg podešavamo boju player-texdrawa             |
| text     | ID player-textdrawa za kojeg postavljamo boju                  |
| color    | Boja koja će biti postavljena na player-textdraw               |

## Returns

Napomena

Ako je veličina PlayerTextDrawOutline > 0, boja okolo teksta će biti uparena sa bojom koje je korištena PlayerTextDrawBackgroundColor. Promjenom vrijednosti boje izgleda da se mijenja boja korištena u PlayerTextDrawColor.

## Primjeri

```c
new PlayerText:gMyTextdraw;

public OnPlayerConnect(playerid)
{
    gMyTextdraw = CreatePlayerTextDraw(playerid, 320.0, 425.0, "Ovo je primjer textdraw-a");
    PlayerTextDrawUseBox(playerid, gMyTextdraw, 1);
    PlayerTextDrawBackgroundColor(playerid, gMyTextdraw, 0xFFFFFFFF); // Postavljanje pozadinske boje na bijelu
    return 1;
}
```

## Zabilješke

:::tip

Ako je veličina PlayerTextDrawOutline > 0, boja okolo teksta će biti uparena sa bojom koje je korištena PlayerTextDrawBackgroundColor. Promjenom vrijednosti boje izgleda da se mijenja boja korištena u PlayerTextDrawColor.

:::

## Srodne Funkcije

- [CreatePlayerTextDraw](CreatePlayerTextDraw): Kreiranje player-textdrawa.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Uništi player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): Postavi boju teksta u player-textdrawu.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): Postavi boju box-a od player-textdrawa.
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
