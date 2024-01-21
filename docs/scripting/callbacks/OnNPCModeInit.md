---
title: OnNPCModeInit.
description: This callback is called when a NPC script is loaded.
tags: ["npc"]
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

## Description

This callback is called when a NPC script is loaded.


## Examples

```pawn
public OnNPCModeInit()
{
    print("NPC script loaded.");
    return 1;
}
```

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another. 

- [OnNPCModeExit](OnNPCModeExit): This callback is called when a NPC script unloaded.
