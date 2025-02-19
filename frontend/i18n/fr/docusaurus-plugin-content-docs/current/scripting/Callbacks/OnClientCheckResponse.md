---
title: OnClientCheckResponse
sidebar_label: OnClientCheckResponse
description: Ce rappel est appelé lorsque la demande SendClientCheck est terminée
tags: []
---

## Description

Ce rappel est appelé lorsque la demande SendClientCheck est terminée.

| Nom          | Description                       |
| -------------| --------------------------------- |
| playerid     | L'ID du joueur vérifié.           |
| actionid     | Le type de vérification effectuée.|
| memaddr      | L'adresse demandée.               |
| retndata     | Le résultat de la vérification.   |

## Retours

Il est toujours appelé en premier dans les filtrescripts.

## Exemples

```c
public OnPlayerConnect(playerid)
{
    SendClientCheck(playerid, 0x48, 0, 0, 2);
    return 1;
}

public OnClientCheckResponse(playerid, actionid, memaddr, retndata)
{
    if(actionid == 0x48) // ou 72
    {
        print("AVERTISSEMENT : Le joueur ne semble pas utiliser un ordinateur régulier !");
        Kick(playerid);
    }
    return 1;
}
```
## Remarques

:::warning

**Serveur SA:MP**: Ce rappel est uniquement appelé lorsqu'il est dans un filterscript..

**Serveur Open Multiplayer**: Ce rappel fonctionne normalement dans un gamemode / filterscript.

:::

## Fonctions Relatives

La fonction suivante peut être utile, car elle est liée à ce rappel d'une manière ou d'une autre. 

- [SendClientCheck](../functions/SendClientCheck): Effectue une vérification de mémoire sur le client.
