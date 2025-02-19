---
title: AddPlayerClass
sidebar_label: AddPlayerClass
description : Ajoute une classe à la sélection de classes.
tags: ["player"]
---

## Description

Ajoute une classe à la sélection de classe. Les classes sont utilisées pour que les joueurs puissent apparaître avec un skin de leur choix.

| Nom            | Description                                                         |
| -------------- | ------------------------------------------------------------------- |
| modelid        | Le skin avec lequel le joueur apparaîtra.                           |
| Float:spawn_x  | La coordonnée X du spawnpoint de cette classe.                      |
| Float:spawn_y  | La coordonnée Y du spawnpoint de cette classe.                      |
| Float:spawn_z  | La coordonnée Z du spawnpoint de cette classe.                      |
| Float:z_angle  | La direction dans laquelle le joueur doit faire face après le frai. |
| weapon1        | La première arme d'apparition pour le joueur.                       |
| weapon1_ammo   | La quantité de munitions pour l'arme d'apparition principale.       |
| weapon2        | La deuxième arme d'apparition pour le joueur.                       |
| weapon2_ammo   | La quantité de munitions pour la deuxième arme d'apparition.        |
| weapon3        | La troisième arme d'apparition pour le joueur.                      |
| weapon3_ammo   | La quantité de munitions pour la troisième arme d'apparition.       |

## Retour

L'ID de la classe qui vient d'être ajoutée.

319 si la limite de classe (320) a été atteinte. L'ID de classe le plus élevé possible est 319.

## Exemples

```c
public OnGameModeInit()
{
     // Les joueurs peuvent apparaître avec le skin "CJ" (0) ou le skin "The Truth" (1).
     AddPlayerClass(0, 1958.33, 1343.12, 15.36, 269.15, 26, 36, 28, 150, 0, 0); // CJ
     AddPlayerClass(1, 1958.33, 1343.12, 15.36, 269.15, 26, 36, 28, 150, 0, 0); // The Trush
     return 1;
}
```

## Remarques

:::tip

L'ID de classe maximum est de 319 (à partir de 0, donc un total de 320 classes). Lorsque cette limite est atteinte, toute autre classe ajoutée remplacera l'ID 319.

:::

## Fonctions associées

- [AddPlayerClassEx](AddPlayerClassEx): Ajoutez une classe avec une équipe par défaut.
- [SetSpawnInfo](SetSpawnInfo): définissez le paramètre d'apparition d'un joueur.
- [SetPlayerSkin](SetPlayerSkin): Définissez le skin d'un joueur.
