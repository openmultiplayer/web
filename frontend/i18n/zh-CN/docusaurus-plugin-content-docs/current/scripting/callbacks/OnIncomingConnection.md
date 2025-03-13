---
title: OnIncomingConnection
sidebar_label: OnIncomingConnection
description: 当IP地址尝试连接服务器时触发该回调
tags: []
---

## 描述

当IP地址尝试连接服务器时触发该回调。如需阻止连接，请使用BlockIpAddress函数。

| 参数         | 说明                 |
| ------------ | -------------------- |
| playerid     | 尝试连接的玩家临时ID |
| ip_address[] | 尝试连接的玩家IP地址 |
| port         | 连接使用的端口号     |

## 返回值

1 - 阻止其他滤镜脚本接收此回调  
0 - 允许传递给后续滤镜脚本

该回调在滤镜脚本中总是优先触发。

## 示例

```c
public OnIncomingConnection(playerid, ip_address[], port)
{
    printf("玩家ID %i 的入站连接请求 [IP/端口: %s:%i]", playerid, ip_address, port);
    return 1;
}
```

## 相关回调

以下回调可能与当前回调存在关联：

- [OnPlayerConnect](OnPlayerConnect)：当玩家成功连接服务器时触发
- [OnPlayerDisconnect](OnPlayerDisconnect)：当玩家断开连接时触发
- [OnPlayerFinishedDownloading](OnPlayerFinishedDownloading)：当玩家完成自定义模型下载时触发

## 相关函数

以下函数可能与当前回调相关：

- [BlockIpAddress](../functions/BlockIpAddress)：阻止指定IP地址在指定时间内连接服务器
- [UnBlockIpAddress](../functions/UnBlockIpAddress)：解除已被阻止的IP地址
