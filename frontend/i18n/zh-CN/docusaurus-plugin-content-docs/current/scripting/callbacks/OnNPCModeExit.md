---
title: OnNPCModeExit
sidebar_label: OnNPCModeExit
description: 当NPC脚本卸载时触发该回调
tags: ["npc"]
---

## 描述

当NPC脚本卸载时触发该回调。

## 示例

```c
public OnNPCModeExit()
{
    print("NPC脚本已卸载");
    return 1;
}
```

## 相关回调

以下回调可能与当前回调存在关联：

- [OnNPCModeInit](OnNPCModeInit)：当NPC脚本加载时触发
