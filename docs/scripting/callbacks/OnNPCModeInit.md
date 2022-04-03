---
title: OnNPCModeInit.
description: This callback is called when a NPC script is loaded.
tags: []
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

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

## Related Functions

- [OnNPCModeExit](../callbacks/OnNPCModeExit): Gets called when a NPC script unloaded.
