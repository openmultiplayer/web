---
title: OnNPCModeExit
description: This callback is called when a NPC script unloaded.
tags: []
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

## Description

This callback is called when a NPC script unloaded.


## Examples

```c
public OnNPCModeExit()
{
    print("NPC script unloaded");
    return 1;
}
```

## Related Functions


- [OnNPCModeInit](../callbacks/OnNPCModeInit): Gets called when a NPC script loaded.
