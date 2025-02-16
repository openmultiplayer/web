---
title: OnNPCModeInit.
sidebar_label: OnNPCModeInit.
description: This callback is called when a NPC script is loaded.
tags: ["npc"]
---

## Description

This callback is called when a NPC script is loaded.


## Examples

```c
public OnNPCModeInit()
{
    print("NPC script loaded.");
    return 1;
}
```

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another. 

- [OnNPCModeExit](OnNPCModeExit): This callback is called when a NPC script unloaded.
