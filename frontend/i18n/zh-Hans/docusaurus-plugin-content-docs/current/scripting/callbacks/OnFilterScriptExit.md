---
title: OnFilterScriptExit
sidebar_label: OnFilterScriptExit
description: 当滤镜脚本卸载时触发该回调
tags: []
---

## 描述

当滤镜脚本被卸载时触发该回调。该回调仅在当前被卸载的滤镜脚本内部触发。

## 示例

```c
public OnFilterScriptExit()
{
    print("\n--------------------------------------");
    print(" 我的滤镜脚本已卸载");
    print("--------------------------------------\n");
    return 1;
}
```

## 相关回调

以下回调可能与当前回调存在关联：

- [OnFilterScriptInit](OnFilterScriptInit)：当滤镜脚本加载时触发
- [OnGameModeInit](OnGameModeInit)：当游戏模式启动时触发
- [OnGameModeExit](OnGameModeExit)：当游戏模式结束时触发
