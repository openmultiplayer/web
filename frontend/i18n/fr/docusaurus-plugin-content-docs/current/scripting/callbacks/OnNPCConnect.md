---
title: OnNPCConnect
sidebar_label: OnNPCConnect
description: Ce rappel est appelé lorsqu'un PNJ se connecte avec succès au serveur.
tags: ["npc"]
---

## Description

Ce rappel est appelé lorsqu'un PNJ se connecte avec succès au serveur.

| Nom          | Description                                         |
| ------------ | --------------------------------------------------- |
| myplayerid   | L'ID du joueur attribué au PNJ                     |

## Exemples

```c
public OnNPCConnect(myplayerid)
{
    printf("J'ai réussi à me connecter au serveur avec l'ID %i !", myplayerid);
}

```

## Rappels Relatives

Les rappels suivants peuvent être utiles, car ils sont liés à ce rappel d'une manière ou d'une autre.

- [OnNPCDisconnect](OnNPCDisconnect): Ce rappel est appelé lorsque le PNJ est déconnecté du serveur.
- [OnPlayerConnect](OnPlayerConnect): Ce rappel est appelé lorsqu'un joueur se connecte au serveur.
- [OnPlayerDisconnect](OnPlayerDisconnect): Ce rappel est appelé lorsqu'un joueur quitte le serveur.
