---
title: AddPlayerClassEx
description: Această funcție este exact aceeași cu funcția AddPlayerClass, cu adăugarea unui parametru de echipă.
tags: ["player"]
---

## Descriere

Această funcție este exact aceeași cu funcția AddPlayerClass, cu adăugarea unui parametru de echipă. | Nume | Descriere | | ------------- | ----------------------------------------------------------- | | teamid | Echipa în care doriți să apară jucătorul. | | modelid | Pielea cu care jucătorul va genera. | | Float:spawn_x | Coordonata X a poziției de reproducere a clasei. | | Float:spawn_y | Coordonata Y a poziției de reproducere a clasei. | | Float:spawn_z | Coordonata Z a poziției de reproducere a clasei. | | Float:z_angle | Direcția în care se va confrunta jucătorul după reproducere. | | weapon1 | Prima armă de reproducere pentru jucător. | | weapon1_ammo | Cantitatea de muniție pentru prima armă de reproducere. | | weapon2 | A doua armă de reproducere pentru jucător. | | weapon2_ammo | Cantitatea de muniție pentru a doua armă de reproducere. | | weapon3 | A treia armă de reproducere pentru jucător. | | weapon3_ammo | Cantitatea de muniție pentru a treia armă de reproducere. |

## Se intoarce

ID-ul clasei care tocmai a fost adăugat.

319 dacă limita de clasă (320) a fost atinsă. Cel mai mare ID de clasă posibil este 319.

## Exemple

```c
public OnGameModeInit()
{
    // Players can spawn as either:
    // CJ Skin (ID 0) in team 1.
    // The Truth skin (ID 1) in team 2.
    AddPlayerClassEx(1, 0, 1958.33, 1343.12, 15.36, 269.15, 26, 36, 28, 150, 0, 0); // CJ
    AddPlayerClassEx(2, 1, 1958.33, 1343.12, 15.36, 269.15, 26, 36, 28, 150, 0, 0); // The Truth
    return 1;
}
```

## Note

:::tip

ID-ul maxim de clasă este 319 (începând de la 0, deci un total de 320 de clase). Când se atinge această limită, orice alte clase adăugate vor înlocui ID 319.

:::

## Funcții conexe

- [AddPlayerClass](AddPlayerClass.md): Adăugați o clasă.
- [SetSpawnInfo](SetSpawnInfo.md): Setați setarea spawn pentru un jucător.
- [SetPlayerTeam](SetPlayerTeam.md): Stabiliți echipa unui jucător.
- [SetPlayerSkin](SetPlayerSkin.md): Setează pielea unui jucător.
