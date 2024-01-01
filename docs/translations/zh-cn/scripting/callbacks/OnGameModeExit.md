---
title: OnGameModeExit
description: 当退出游戏模式时，即通过'gmx'，关闭服务器，或者GameModeExit函数，该回调函数被调用。
tags: []
---

## 描述

当退出游戏模式时，即通过'gmx'，关闭服务器，或者 [GameModeExit](../functions/GameModeExit) 函数，调用这个回调函数。

## 案例

```c
public OnGameModeExit()
{
    print("游戏模式 已退出。");
    return 1;
}
```

## 要点

:::tip

因为更改游戏模式不会重新加载过滤脚本(filterscript)，所以该函数也可以在过滤脚本中使用，用于检测是否使用了 RCON 指令（例如 changemode 或 gmx）更改游戏模式。

切记，当使用'rcon gmx'控制台指令时，可能会出现客户端 BUG。一种典型的情况是：在执行 [OnGameModeInit](OnGameModeInit) 函数的过程中过度调用 [RemoveBuildingForPlayer](../functions/RemoveBuildingForPlayer) 函数，从而导致客户端崩溃。

当服务器崩溃或进程被其他方法终止(如使用 Linux kill 指令或在 Windows 控制台上按下关闭按钮)时，回调函数不会被触发。

:::

## 相关函数

- [GameModeExit](../functions/GameModeExit): 退出当前游戏模式。
