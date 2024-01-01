---
title: OnNPCModeInit.
description: This callback is called when a NPC script is loaded.
tags: []
---

<VersionWarnCN name='回调' version='SA-MP 0.3a' />

## 描述

This callback is called when a NPC script is loaded.

## 案例

```c
public OnNPCModeInit()
{
    print("NPC script loaded.");
    return 1;
}
```

## 相关回调

- [OnNPCModeExit](OnNPCModeExit): Gets called when a NPC script unloaded.
