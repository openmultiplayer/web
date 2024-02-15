---
title: OnNPCModeInit
description: Ce rappel est appelé lorsque le script d'un PNJ est chargé.
tags: ["npc"]
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

## Description

Ce rappel est appelé lorsque le script d'un PNJ est chargé.

## Exemples

```c
public OnNPCModeInit()
{
    print("Le script du PNJ a été chargé.");
    return 1;
}
```

## Rappels Relatives

Les rappels suivants peuvent être utiles, car ils sont liés à ce rappel d'une manière ou d'une autre.

- [OnNPCModeExit](OnNPCModeExit): Ce rappel est appelé lorsque le script d'un PNJ est déchargé.
