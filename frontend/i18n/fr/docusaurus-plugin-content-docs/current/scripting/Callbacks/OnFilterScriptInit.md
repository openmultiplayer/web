---
title: OnFilterScriptInit
sidebar_label: OnFilterScriptInit
description: Cette callback est appelée quand un filterscript est chargé.
tags: [filterscript, load, chargé, loaded]
---

## Description

Cette callback est appelée quand un filterscript est chargé. Elle n'est appelée que dans le filterscript qui a été chargé.

## Exemple

```c
public OnFilterScriptInit()
{
    print("\n--------------------------------------");
    print("Filterscript chargé.                    ");
    print("--------------------------------------\n");
    return 1;
}
```

## Callback connexe
- [OnFilterScriptExit](OnFilterScriptExit) : déchargement d'un filterscript

