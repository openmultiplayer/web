---
title: AddPlayerClass
sidebar_label: AddPlayerClass
description: Adaugă o clasă la selecția clasei.
tags: ["player"]
---

## Descriere

Adaugă o clasă la selecția clasei. Clasele sunt folosite, astfel încât jucătorii să poată genera un skin la alegere.

| Nume          | Descriere                                                            |
| ------------- | -------------------------------------------------------------------- |
| modelid       | Skinul cu care jucătorul va fi generat.                              |
| Float:spawn_x | Coordonata X a punctului de reproducere al acestei clase.            |
| Float:spawn_y | Coordonata Y a punctului de reproducere al acestei clase.            |
| Float:spawn_z | Coordonata Z a punctului de reproducere al acestei clase.            |
| Float:z_angle | Direcția în care jucătorul trebuie să se confrunte după reproducere. |
| weapon1       | Prima armă de reproducere pentru jucător.                            |
| weapon1_ammo  | Cantitatea de muniție pentru arma primară de reproducere.            |
| weapon2       | A doua armă de reproducere pentru jucător.                           |
| weapon2_ammo  | Cantitatea de muniție pentru a doua armă de reproducere.             |
| weapon3       | A treia armă de reproducere pentru jucător.                          |
| weapon3_ammo  | Cantitatea de muniție pentru a treia armă de reproducere.            |

## Se intoarce

ID-ul clasei care tocmai a fost adăugat.

319 dacă limita de clasă (320) a fost atinsă. Cel mai mare ID de clasă posibil este 319.

## Exemple

```c
public OnGameModeInit()
{
    // Players can spawn with either the CJ skin (0) or The Truth skin (1).
    AddPlayerClass(0, 1958.33, 1343.12, 15.36, 269.15, 26, 36, 28, 150, 0, 0); // CJ
    AddPlayerClass(1, 1958.33, 1343.12, 15.36, 269.15, 26, 36, 28, 150, 0, 0); // The Truth
    return 1;
}
```

## Notite

:::tip

ID-ul maxim de clasă este 319 (începând de la 0, deci un total de 320 de clase). Când se atinge această limită, orice alte clase adăugate vor înlocui ID 319.

:::

## Funcții conexe

- [AddPlayerClassEx](AddPlayerClassEx): Adăugați o clasă cu o echipă implicită.
- [SetSpawnInfo](SetSpawnInfo): Setați setarile pentru spawn unui jucător.
- [SetPlayerSkin](SetPlayerSkin): Setează kinul unui jucător.
