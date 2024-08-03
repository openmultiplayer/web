---
title: OnNPCDisconnect
description: Ce rappel est appelé lorsque le PNJ est déconnecté du serveur.
tags: ["npc"]
---

## Description

Ce rappel est appelé lorsque le PNJ est déconnecté du serveur.

| Nom          | Description                                              |
| ------------ | -------------------------------------------------------- |
| reason[]     | La raison pour laquelle le bot s'est déconnecté du serveur |

## Exemples

```c
public OnNPCDisconnect(reason[])
{
    printf("Déconnecté du serveur. %s", reason);
}
```

## Rappels Relatives

Les rappels suivants peuvent être utiles, car ils sont liés à ce rappel d'une manière ou d'une autre.

- [OnNPCConnect](OnNPCConnect): Ce rappel est appelé lorsque le PNJ se connecte avec succès au serveur.
- [OnPlayerDisconnect](OnPlayerDisconnect): Ce rappel est appelé lorsqu'un joueur quitte le serveur.
- [OnPlayerConnect](OnPlayerConnect): Ce rappel est appelé lorsqu'un joueur se connecte au serveur.
