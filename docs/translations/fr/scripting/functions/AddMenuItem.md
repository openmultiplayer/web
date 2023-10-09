---
title : AddMenuItem
description: ajoute un élément à un menu spécifié.
tags: ["menu"]
---

## Description

Ajoute un élément à un menu spécifié.

| Nom     | Descriptif                                       |
| ------- | ------------------------------------------------ |
| menuid  | L'identifiant du menu auquel ajouter un élément. |
| column  | La colonne à laquelle ajouter l'élément.         |
| title[] | Titre du nouvel élément de menu.                 |

## Retour

L'index de la ligne à laquelle cet élément a été ajouté.

## Exemples

```c
new Menu:gExampleMenu;

public OnGameModeInit()
{
     gExampleMenu = CreateMenu("Votre menu", 2, 200.0, 100.0, 150.0, 150.0);
     AddMenuItem(gExampleMenu, 0, "item 1");
     AddMenuItem(gExampleMenu, 0, "item 2");
     return 1;
}
```

## Remarques

:::tip

Crash lors de la transmission d'un ID de menu non valide. Vous ne pouvez avoir que 12 éléments par menu (le 13e va à droite de l'en-tête du nom de la colonne (en couleur), le 14e et les suivants ne s'affichent pas du tout). Vous ne pouvez utiliser que 2 colonnes (0 et 1). Vous ne pouvez ajouter que 8 codes de couleur par article (~r~, ~g~ etc.). La longueur maximale de l'élément de menu est de 31 symboles.

:::

## Fonctions associées

- [CreateMenu](CreateMenu): Créer un menu.
- [SetMenuColumnHeader](SetMenuColumnHeader): définit l'en-tête d'une des colonnes d'un menu.
- [DestroyMenu](DestroyMenu): Détruit un menu.
- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow): Appelé lorsqu'un joueur sélectionne une ligne dans un menu.
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu): Appelé lorsqu'un joueur quitte un menu.
