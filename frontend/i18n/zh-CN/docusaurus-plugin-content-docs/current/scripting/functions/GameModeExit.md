---
title: GameModeExit
sidebar_label: GameModeExit
description: 结束当前游戏模式。
tags: []
---

## 描述

结束当前游戏模式。

## 返回值

此函数不返回特定值。

## 示例

```c
if (OneTeamHasWon)
{
    GameModeExit();
}
```

## 相关函数

- [SetModeRestartTime](SetModeRestartTime): 设置加载主脚本之间的延迟时间（以秒为单位）。

## 相关回调

- [OnGameModeExit](../callbacks/OnGameModeExit): 当游戏模式结束时触发
