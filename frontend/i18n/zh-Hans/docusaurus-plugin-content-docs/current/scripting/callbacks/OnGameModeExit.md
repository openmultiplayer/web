---
title: OnGameModeExit
sidebar_label: OnGameModeExit
description: 当游戏模式结束时触发该回调（可能由'gmx'指令、服务器关闭或GameModeExit函数触发）
tags: []
---

## 描述

当游戏模式结束时触发该回调。触发条件包括：

- 执行'gmx'指令
- 服务器关闭
- 调用GameModeExit函数

## 示例

```c
public OnGameModeExit()
{
    print("游戏模式已结束。");
    return 1;
}
```

## 注意

:::tip

该回调也可用于滤镜脚本中，通过RCON指令（如changemode或gmx）检测游戏模式变更，因为更换游戏模式不会重新加载滤镜脚本

:::

:::warning

使用OnGameModeExit时需注意：

- 配合`rcon gmx`指令使用时可能导致客户端异常
- 在[OnGameModeInit](OnGameModeInit)中过度调用[RemoveBuildingForPlayer](../functions/RemoveBuildingForPlayer)可能引发客户端崩溃
- 服务器崩溃或进程被强制终止（如Linux kill命令/Windows控制台关闭按钮）不会触发本回调

:::

## 相关回调

以下回调可能与当前回调存在关联：

- [OnGameModeInit](OnGameModeInit)：当游戏模式启动时触发
- [OnFilterScriptInit](OnFilterScriptInit)：当滤镜脚本加载时触发
- [OnFilterSciptExit](OnFilterScriptExit)：当滤镜脚本卸载时触发

## 相关函数

以下函数可能与当前回调相关：

- [GameModeExit](../functions/GameModeExit)：退出当前游戏模式
