---
title: OnClientCheckResponse
sidebar_label: OnClientCheckResponse
description: 当SendClientCheck请求完成时触发此回调
tags: []
---

## 描述

当SendClientCheck请求完成时触发此回调。

| 参数     | 说明           |
| -------- | -------------- |
| playerid | 被检测的玩家ID |
| actionid | 执行的检测类型 |
| memaddr  | 请求的内存地址 |
| retndata | 检测结果       |

## 返回值

在滤镜脚本中总是优先被调用。

## 示例

```c
public OnPlayerConnect(playerid)
{
    SendClientCheck(playerid, 0x48, 0, 0, 2);
    return 1;
}

public OnClientCheckResponse(playerid, actionid, memaddr, retndata)
{
    if (actionid == 0x48) // 或72
    {
        print("玩家正在使用PC客户端连接。");
    }
    return 1;
}
```

## 注意

:::warning

**SA:MP 服务端**：此回调仅在滤镜脚本中触发

**Open Multiplayer 服务端**：此回调在游戏模式/滤镜脚本中均可正常触发

:::

## 相关函数

以下函数可能与当前回调存在关联：

- [SendClientCheck](../functions/SendClientCheck)：对客户端执行内存检测

## 相关资源

- [操作码](../resources/opcodes)：检测类型ID及其用途说明
