---
title: SendClientCheck
sidebar_label: SendClientCheck
description: 在客户端执行内存检查
tags: []
---

## 描述

在客户端执行内存检查

| 参数      | 说明                                                |
| --------- | --------------------------------------------------- |
| playerid  | 需要检查的玩家 ID                                   |
| type      | 需要执行的检查类型 [参见此处](../resources/opcodes) |
| memAddr   | 检查的基地址                                        |
| memOffset | 相对于基地址的偏移量                                |
| byteCount | 需要检查的字节数                                    |

## 返回值

1: 函数执行成功

0: 函数执行失败（玩家未连接）

## 示例代码

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

## 注意事项

:::tip

- 客户端处理 6 种类型的请求（2、5、69、70、71、72）
- 类型 72 不使用其他参数 [参数 | 偏移量 | 大小]
- arg 参数返回计算机运行时间

:::

:::warning

**SA:MP 服务器**：此函数仅在滤镜脚本中生效

**Open Multiplayer 服务器**：此函数在游戏模式/滤镜脚本中均可正常使用

:::

## 相关函数

- [IsPlayerUsingOfficialClient](IsPlayerUsingOfficialClient): 检查玩家是否使用官方 SA-MP 客户端
- [IsPlayerUsingOmp](IsPlayerUsingOmp): 检查玩家是否使用 open.mp 启动器

## 相关回调

- [OnClientCheckResponse](../callbacks/OnClientCheckResponse): 当 SendClientCheck 请求完成时触发
