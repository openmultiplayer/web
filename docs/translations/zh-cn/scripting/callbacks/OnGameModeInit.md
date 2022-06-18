---
title: OnGameModeInit
description: 当初始化游戏模式时，该回调函数被触发。
tags: []
---

## 描述

当初始化游戏模式时，调用这个回调函数。

## 案例

```c
public OnGameModeInit()
{
    print("游戏模式 加载!");
    return 1;
}
```

## 要点

:::tip

因为更改游戏模式不会重新加载过滤脚本(filterscript)，所以该函数也可以在过滤脚本中使用，用于检测是否使用了 RCON 指令（例如 changemode 或 gmx）更改游戏模式。

:::

## 相关回调
