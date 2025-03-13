---
title: HideGameTextForAll
sidebar_label: HideGameTextForAll
description: 隐藏所有玩家的指定样式游戏文本。
tags: ["玩家", "游戏文本"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

停止为所有玩家显示指定样式的游戏文本。

| 参数名 | 说明                                                    |
| ------ | ------------------------------------------------------- |
| style  | 要隐藏的[游戏文本样式](../resources/gametextstyles)编号 |

## 返回值

此函数没有返回值。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/hidegametext3", true))
    {
        if (!IsPlayerAdmin(playerid))
        {
            return 1;
        }

        HideGameTextForAll(3);
        return 1;
    }
    return 0;
}
```

## 相关函数

- [HideGameTextForPlayer](HideGameTextForPlayer): 隐藏单个玩家的游戏文本
- [GameTextForPlayer](GameTextForPlayer): 为玩家显示游戏文本
- [GameTextForAll](GameTextForAll): 为所有玩家显示游戏文本
- [TextDrawHideForAll](TextDrawHideForAll): 隐藏全服文本绘图元素
