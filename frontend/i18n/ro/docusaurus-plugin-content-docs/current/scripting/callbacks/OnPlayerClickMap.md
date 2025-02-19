---
title: OnPlayerClickMap
sidebar_label: OnPlayerClickMap
description: OnPlayerClickMap este apelat atunci când un jucător plasează o țintă/un punct de referință pe harta meniului de pauză (făcând clic dreapta).
tags: ["player"]
---

## Descriere

OnPlayerClickMap este apelat atunci când un jucător plasează o țintă/un punct de referință pe harta meniului de pauză (făcând clic dreapta).

| Nume     | Descriere                                                                     |
| -------- | ----------------------------------------------------------------------------- |
| playerid | ID-ul jucătorului care a plasat o țintă/un punct de referință                 |
| Float:fX | Coordonata X unde a făcut clic jucătorul                                      |
| Float:fY | Coordonata Y unde a făcut clic jucătorul                                      |
| Float:fZ | Coordonata Z în care jucătorul a făcut clic (inexacte - vezi nota de mai jos) |

## Returnări

1 - Va împiedica alte filterscript-uri să primească acest callback.

0 - Indică faptul că acest callback va fi transmis următorului filterscript.

Este întotdeauna numit primul în modul de joc.

## Exemple

```c
public OnPlayerClickMap(playerid, Float:fX, Float:fY, Float:fZ)
{
    SetPlayerPosFindZ(playerid, fX, fY, fZ);
    return 1;
}
```

## Note

:::tip

După cum spune și numele callback-ului, este apelat numai atunci când jucătorul face clic pentru a marca ținta și nu atunci când este apăsat tasta. Valoarea Z returnată va fi 0 (invalidă) dacă zona pe care se face clic pe hartă este departe de jucător; utilizați pluginul MapAndreas sau ColAndreas pentru a obține o coordonată Z mai precisă.

:::

## Funcții similare