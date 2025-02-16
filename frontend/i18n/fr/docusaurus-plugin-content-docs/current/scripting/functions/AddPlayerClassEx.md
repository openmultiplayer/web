---
title: AddPlayerClassEx
description: Cette fonction est exactement la même que la fonction AddPlayerClass, avec l'ajout d'un paramètre d'équipe.
tags: ["player"]
---

## Description

Cette fonction est exactement la même que la fonction AddPlayerClass, avec l'ajout d'un paramètre d'équipe.

| Nom            | Description                                                   |
| -------------- | ------------------------------------------------------------- |
| teamid         | L'équipe dans laquelle vous voulez que le joueur apparaisse.  |
| modelid        | Le skin avec lequel le joueur apparaîtra.                     |
| Float:spawn_x  | La coordonnée X de la position d'apparition de la classe.     |
| Float:spawn_y  | La coordonnée Y de la position d'apparition de la classe.     |
| Float:spawn_z  | La coordonnée Z de la position d'apparition de la classe.     |
| Float:z_angle  | La direction dans laquelle le joueur fera face après le frai. |
| weapon1        | La première arme d'apparition pour le joueur.                 |
| weapon1_ammo   | La quantité de munitions pour la première arme d'apparition.  |
| weapon2        | La deuxième arme d'apparition pour le joueur.                 |
| weapon2_ammo   | La quantité de munitions pour la deuxième arme d'apparition.  |
| weapon3        | La troisième arme d'apparition pour le joueur.                |
| weapon3_ammo   | La quantité de munitions pour la troisième arme d'apparition. |

## Retour

L'ID de la classe qui vient d'être ajoutée.

319 si la limite de classe (320) a été atteinte. L'ID de classe le plus élevé possible est 319.

## Exemples

```c
public OnGameModeInit()
{
     // Les joueurs peuvent apparaître soit :
     // CJ Skin (ID 0) dans l'équipe 1.
     // "The Truth" skin (ID 1) dans l'équipe 2.
     AddPlayerClassEx(1, 0, 1958.33, 1343.12, 15.36, 269.15, 26, 36, 28, 150, 0, 0); // CJ
     AddPlayerClassEx(2, 1, 1958.33, 1343.12, 15.36, 269.15, 26, 36, 28, 150, 0, 0); // The Truth
     return 1;
}
```

## Remarques

:::tip

L'ID de classe maximum est de 319 (à partir de 0, donc un total de 320 classes). Lorsque cette limite est atteinte, toute autre classe ajoutée remplacera l'ID 319.

:::

## Fonctions associées

- [AddPlayerClass](AddPlayerClass) : ajoutez une classe.
- [SetSpawnInfo](SetSpawnInfo) : définissez le paramètre d'apparition d'un joueur.
- [SetPlayerTeam](SetPlayerTeam) : définissez l'équipe d'un joueur.
- [SetPlayerSkin](SetPlayerSkin) : Définissez le skin d'un joueur.
