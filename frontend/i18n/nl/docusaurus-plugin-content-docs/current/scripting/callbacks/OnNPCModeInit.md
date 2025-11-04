---
title: OnNPCModeInit.
sidebar_label: OnNPCModeInit.
description: Deze callback wordt aangeroepen wanneer een NPC-script wordt geladen.
tags: ["npc"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een NPC-script wordt geladen.

## Voorbeelden

```c
public OnNPCModeInit()
{
    print("NPC script loaded.");
    return 1;
}
```

## Gerelateerde Callbacks

- [OnNPCModeExit](OnNPCModeExit): Deze callback wordt aangeroepen wanneer een NPC-script wordt uitgeladen.
