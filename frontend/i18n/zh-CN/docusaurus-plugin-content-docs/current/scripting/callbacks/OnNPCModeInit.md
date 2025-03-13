---
title: OnNPCModeInit
sidebar_label: OnNPCModeInit
description: 当NPC脚本加载时会调用此回调函数。
tags: ["npc"]
---

## 说明

当 NPC 脚本加载时会调用此回调函数。

## 示例

```c
public OnNPCModeInit()
{
    print("NPC脚本已加载");
    return 1;
}
```

## 相关回调

以下回调函数可能与当前回调存在关联，可提供额外功能参考：

- [OnNPCModeExit](OnNPCModeExit): 当 NPC 脚本卸载时会调用此回调函数
