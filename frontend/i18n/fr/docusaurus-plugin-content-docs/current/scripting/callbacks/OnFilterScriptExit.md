---
title: OnFilterScriptExit
sidebar_label: OnFilterScriptExit
description: Cette callback est appelée lorsqu'un filterscript a été déchargé.
tags: [filterscripts, déchargé, unloaded, unload]
---

## Description

Cette callback est appelée lorsqu'un filterscript a été déchargé. Elle n'est appelée que dans le filterscript qui est déchargé.

## Exemple

```c
public OnFilterScriptExit()
{
    print("\n--------------------------------------");
    print(" Filterscript déchargé                  ");
    print("--------------------------------------\n");
    return 1;
}
```

## Callback connnexe

Les Callbacks ci-dessous sont indirectement ou directement liées à cette Callback.

- [OnFilterScriptInit](OnFilterScriptInit) : chargement d'un filterscript
- [OnGameModeInit](OnGameModeInit) : Appelée lorsqu'un gamemode se charge.
- [OnGameModeExit](OnGameModeExit) : Appelée lorsqu'un gamemode se ferme.
