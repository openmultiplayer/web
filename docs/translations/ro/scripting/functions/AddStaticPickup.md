---
title: AddStaticPickup
description: Această funcție adaugă o preluare „statică” la joc.
tags: []
---

## Descriere

Această funcție adaugă o preluare „statică” la joc. Aceste pickup-uri acceptă arme, sănătate, armuri etc., cu capacitatea de a funcționa fără a le scripta (armele / sănătatea / armura vor fi date automat).

| Nume                                | Descriere                                                                                              |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------ |
| [model](../resources/pickupids.md)  | Modelul pick-up-ului.                                                                                  |
| [type](../resources/pickuptypes.md) | Tipul de preluare. Determină modul în care răspunde pickup-ul atunci când este ridicat.                |
| Float:X                             | Coordonata X pentru a crea preluarea la.                                                               |
| Float:Y                             | Coordonata Y pentru a crea preluarea la.                                                               |
| Float:Z                             | Coordonata Z pentru a crea preluarea la.                                                               |
| virtualworld                        | ID-ul lumii virtuale pentru a pune acest pickup. Folosiți -1 pentru a afișa pickup-ul în toate lumile. |

## Se intoarce

1 dacă pickup-ul este creat cu succes.

0 dacă nu s-a putut crea.

## Exemple

```c
public OnGameModeInit()
{
    // Create a pickup for armor
    AddStaticPickup(1242, 2, 1503.3359, 1432.3585, 10.1191, 0);

    // Create a pickup for some health, right next to the armour
    AddStaticPickup(1240, 2, 1506.3359, 1432.3585, 10.1191, 0);

    return 1;
}
```

## Note

:::tip

Această funcție nu returnează un ID de preluare pe care îl puteți utiliza, de exemplu, OnPlayerPickUpPickup. Utilizați CreatePickup dacă doriți să atribuiți ID-uri.

:::

## Funcții conexe

- [CreatePickup](CreatePickup.md): Creați un pick-up.
- [DestroyPickup](DestroyPickup.md): Distruge un pick-up.
- [OnPlayerPickUpPickup](../callbacks/OnPlayerPickUpPickup.md): Apelat când un jucător ridică un pickup.
