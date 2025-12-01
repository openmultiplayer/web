---
title: GetGameText
sidebar_label: GetGameText
description: 获取指定玩家游戏文本样式的所有相关信息。
tags: ["玩家"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取指定玩家游戏文本样式的所有相关信息。

| 参数名          | 说明                                                |
| --------------- | --------------------------------------------------- |
| playerid        | 要获取信息的玩家 ID                                 |
| style           | 要查询的[游戏文本样式](../resources/gametextstyles) |
| message[]       | 存储文本内容的数组变量（引用传递）                  |
| len（数组长度） | 输出数组的容量大小                                  |
| time            | 游戏文本最初显示的持续时间（单位：毫秒）            |
| remaining       | 当前剩余的显示时间（单位：毫秒）                    |

## 返回值

true - 函数执行成功

false - 函数执行失败（玩家不存在或样式无效）

## 示例代码

```c
public OnPlayerConnect(playerid)
{
    GameTextForPlayer(playerid, "欢迎来到服务器！", 5000, 3);  // 显示持续5秒的样式3文本

    new
        message[32],
        time,
        remaining;

    GetGameText(playerid, 3, message, sizeof(message), time, remaining);
    // message = "欢迎来到服务器！"
    // time = 5000
    return 1;
}
```

## 相关函数

- [GameTextForPlayer](GameTextForPlayer): 向玩家显示游戏文本
- [HideGameTextForPlayer](HideGameTextForPlayer): 隐藏玩家的指定样式游戏文本
- [GameTextForAll](GameTextForAll): 向所有玩家显示游戏文本
- [HideGameTextForAll](HideGameTextForAll): 全局隐藏指定样式游戏文本
- [HasGameText](HasGameText): 检测玩家是否正在显示指定样式的游戏文本
