---
title: CreatePlayerTextDraw
description: Kreira textdraw za samo jednog igraca.
tags: ["player", "textdraw", "playertextdraw"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3d i ne radi u nizim verzijama!

:::

## Opis

Kreira textdraw za samo jednog igraca. Ovo moze da se koristi kao izbegavanje limita za globalne textdraw-ove.

| Ime      | Opis                                    |
| -------- | --------------------------------------- |
| playerid | ID igraca kome kreiramo player textdraw |
| Float:x  | X koordinata                            |
| Float:y  | Y koordinata                            |
| text[]   | Tekst u textdraw-u                      |

## Vraca

ID kreiranog textdraw-a

## Primeri

```c
// Ova varijabla sluzi da sadrzi ID textdraw-a u sebi
// tako da mozemo da ga koristimo kroz skriptu
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // Prvo kreiramo textdraw
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my SA-MP server");

    // Zatim ga prikazemo
    PlayerTextDrawShow(playerid, welcomeText[playerid]);
}
```

## Belekse

:::tip

Player textdraw-ovi se automatski uniste kada se igrac diskonektuje.

:::

:::warning

Key mapping kodovi ( kao sto su ~k~~VEHICLE_ENTER_EXIT~ ne rade preko 255og karaktera.

:::

## Srodne Funkcije

- [PlayerTextDrawDestroy](PlayerTextDrawDestroy.md): Unistava player textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor.md): Podesava boju teksta od player textdraw-a.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor.md): Podesava boju boxa od player textdraw-a.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor.md): Podesava pozadinsku boju od player textdraw-a.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment.md): Podesava poravnavanje od player textdraw-a.
- [PlayerTextDrawFont](PlayerTextDrawFont.md): Podesava font od player textdraw-a.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize.md): Podesava velicinu slova teksta od player textdraw-a.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize.md): Podesava velicinu od player textdraw-a ( Za OnPlayerClickPlayerTextdraw ).
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline.md): Podesava outline od player textdraw-a.
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow.md): Podesava senku od player textdraw-a.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional.md): Podesava razmak teksta od player textdraw-a.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox.md): Pali bog od player textdraw-a.
- [PlayerTextDrawSetString](PlayerTextDrawSetString.md): Podesava tekst od player textdraw-a.
- [PlayerTextDrawShow](PlayerTextDrawShow.md): Prikaze player textdraw.
- [PlayerTextDrawHide](PlayerTextDrawHide.md): Sakrije player textdraw.
