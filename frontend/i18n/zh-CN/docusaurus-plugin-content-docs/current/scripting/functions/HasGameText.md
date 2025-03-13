---
title: HasGameText
sidebar_label: HasGameText
description: 检测玩家当前是否显示指定样式的游戏文本。
tags: ["玩家"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测玩家当前是否显示指定样式的游戏文本。

| 参数名   | 说明                                                |
| -------- | --------------------------------------------------- |
| playerid | 要检测的玩家 ID 编号                                |
| style    | 要检测的[游戏文本样式](../resources/gametextstyles) |

## 返回值

**true** - 玩家当前显示该样式游戏文本

**false** - 玩家未显示该样式游戏文本

## 示例

```c
public OnPlayerConnect(playerid)
{
    GameTextForPlayer(playerid, "欢迎来到服务器！", 5000, 3);

    if (HasGameText(playerid, 3))
    {
        // 当检测到3号样式文本时执行操作
    }
    return 1;
}
```

## 相关函数

- [GameTextForPlayer](GameTextForPlayer): 向玩家显示游戏文本
- [HideGameTextForPlayer](HideGameTextForPlayer): 隐藏玩家指定样式的游戏文本
- [GameTextForAll](GameTextForAll): 向所有玩家显示游戏文本
- [HideGameTextForAll](HideGameTextForAll): 全局隐藏指定样式的游戏文本
- [GetGameText](GetGameText): 获取指定样式游戏文本的详细信息
