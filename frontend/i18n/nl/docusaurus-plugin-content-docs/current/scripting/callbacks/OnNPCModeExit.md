---
title: OnNPCModeExit
sidebar_label: OnNPCModeExit
description: Deze callback wordt aangeroepen wanneer een NPC-script wordt uitgeladen.
tags: ["npc"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een NPC-script wordt uitgeladen.

## Voorbeelden

```c
public OnNPCModeExit()
{
    print("NPC script unloaded");
    return 1;
}
```

## Gerelateerde Callbacks

- [OnNPCModeInit](OnNPCModeInit): Deze callback wordt aangeroepen wanneer een NPC-script wordt geladen.
