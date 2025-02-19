---
title: OnScriptCash
sidebar_label: OnScriptCash
description: Ce rappel est déclenché lorsque quelque chose dans le jeu, comme les casinos, donne de l'argent au joueur.
tags: ["player"]
---

:::warning

Ce rappel NE FONCTIONNE PAS.

:::

## Description

Ce rappel est déclenché lorsque quelque chose dans le jeu, comme les casinos, donne de l'argent au joueur.

| Nom       | Description                                        |
|----------|----------------------------------------------------|
| playerid | L'ID du joueur qui a reçu de l'argent du jeu      |
| amount   | Le montant d'argent donné ou retiré               |
| source   | L'origine de l'argent                              |

## Retours

Inconnu car cette fonction ne fonctionne actuellement pas.

## Exemples

```c
// Imaginaire :

public OnScriptCash(playerid, amount, source)
{
    if (source == SCRIPT_CASH_CASINO)
    {
        SendClientMessage(playerid, -1, "Vous avez gagné $%d au casino !", amount);
    }
    else if (source == SCRIPT_CASH_VENDING_MACHINE)
    {
        SendClientMessage(playerid, -1, "Vous avez acheté un soda à la machine distributrice pour $%d", amount);
    }
    return 1;
}
```

## Fonctions Relatives

Les fonctions suivantes pourraient être utiles, car elles sont liées à ce rappel d'une manière ou d'une autre.

- [GetPlayerMoney](../functions/GetPlayerMoney): Récupère le montant d'argent qu'un joueur possède.
