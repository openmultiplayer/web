---
title: OnNPCModeExit
sidebar_label: OnNPCModeExit
description: Ce rappel est appelé lorsque le script d'un PNJ est déchargé.
tags: ["npc"]
---

## Description

Ce rappel est appelé lorsque le script d'un PNJ est déchargé.

## Exemples

```c
public OnNPCModeExit()
{
    print("Le script du PNJ a été déchargé");
    return 1;
}
```

## Rappels Relatives

Les rappels suivants peuvent être utiles, car ils sont liés à ce rappel d'une manière ou d'une autre.

- [OnNPCModeInit](OnNPCModeInit): Ce rappel est appelé lorsque le script d'un PNJ est chargé.
