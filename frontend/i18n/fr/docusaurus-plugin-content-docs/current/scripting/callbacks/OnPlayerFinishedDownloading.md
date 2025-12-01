---
title: OnPlayerFinishedDownloading
sidebar_label: OnPlayerFinishedDownloading
description: Callback appelée quand un joueur fini de télécharger les models custom du serveur.
tags: ["player"]
---

<VersionWarn name='callback' version='SA-MP 0.3.DL R1' />

## Paramètres

Callback appelée quand un joueur fini de télécharger les models custom du serveur.

Pour plus d'informations sur comment ajouter des custom models sur son serveur, référez-vous aux tutoriels sur [Burgershot.gg](https://forum.open.mp/).

| Nom                | Description                                                                    |
| ------------------ | ------------------------------------------------------------------------------ |
| `int` playerid     | ID du joueur qui a fini le téléchargement des models custom.                   |
| `int` virtualworld | ID du virtual world pour lequel le joueur a fini le téléchargement des models  |

## Valeur de retour

Cette callback ne retourne rien, mais doit retourner quelque chose. Autrement dit, `return callback();` ne fonctionnera pas car la callback ne retourne rien, mais un return _(`return 1;` ou `return 0;`)_ doit être effectué dans la callback.

## Exemple

```c
public OnPlayerFinishedDownloading(playerid, virtualworld)
{
    SendClientMessage(playerid, 0xffffffff, "Téléchargement fini.");
    return 1;
}
```

## Astuces

:::tip

Cette callback est appelée chaque fois qu'un joueur change de virtual word, même s'il n'y a aucun custom model dans le world concerné.

:::

## Fonctions connexes
