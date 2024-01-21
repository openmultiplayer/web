---
title: OnNPCModeExit
description: This callback is called when a NPC script unloaded.
tags: ["npc"]
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

## Description

This callback is called when a NPC script unloaded.


## Examples

```pawn
public OnNPCModeExit()
{
    print("NPC script unloaded");
    return 1;
}
```


## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another. 

- [OnNPCModeInit](OnNPCModeInit): This callback is called when a NPC script loaded.
