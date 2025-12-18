---
title: OnFilterScriptInit
sidebar_label: OnFilterScriptInit
description: 当滤镜脚本初始化（加载）时触发此回调
tags: []
---

## 描述

当滤镜脚本初始化（加载）时触发此回调。此回调仅在当前启动的滤镜脚本内部触发。

## 示例

```c
public OnFilterScriptInit()
{
    print("\n--------------------------------------");
    print("滤镜脚本已加载");
    print("--------------------------------------\n");
    return 1;
}
```

## 相关回调

以下回调可能与当前回调存在关联：

- [OnFilterSciptExit](OnFilterScriptExit)：当滤镜脚本卸载时触发
- [OnGameModeInit](OnGameModeInit)：当游戏模式启动时触发
- [OnGameModeExit](OnGameModeExit)：当游戏模式结束时触发
