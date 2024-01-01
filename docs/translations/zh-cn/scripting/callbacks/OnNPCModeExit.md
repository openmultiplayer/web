---
title: OnNPCModeExit
description: 当npc脚本卸载时调用此回调。
tags: []
---

<VersionWarnCN name='回调' version='SA-MP 0.3a' />

## 描述

当 npc 脚本卸载时调用此回调。

## 案例

```c
public OnNPCModeExit()
{
    print("NPC 脚本卸载了");
    return 1;
}
```

## 相关回调

- [OnNPCModeInit](OnNPCModeInit): 在加载 NPC 脚本时调用。
