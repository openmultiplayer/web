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

- [OnFilterScriptInit](OnFilterScriptInit) : chargement d'un filterscript
