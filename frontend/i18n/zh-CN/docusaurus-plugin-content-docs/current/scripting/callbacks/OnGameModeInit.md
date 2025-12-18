---
title: OnGameModeInit
sidebar_label: OnGameModeInit
description: 当游戏模式启动时触发此回调
tags: []
---

## 描述

当游戏模式启动时触发此回调。

## 示例

```c
public OnGameModeInit()
{
    print("游戏模式已启动！");
    return 1;
}
```

## 注意

:::tip

此回调也可用于滤镜脚本中，通过RCON指令（如changemode或gmx）检测游戏模式变更，因为更换游戏模式不会重新加载滤镜脚本

:::

## 相关回调

以下回调可能与当前回调存在关联：

- [OnGameModeExit](OnGameModeExit)：当游戏模式结束时触发
- [OnFilterScriptInit](OnFilterScriptInit)：当滤镜脚本加载时触发
- [OnFilterSciptExit](OnFilterScriptExit)：当滤镜脚本卸载时触发
