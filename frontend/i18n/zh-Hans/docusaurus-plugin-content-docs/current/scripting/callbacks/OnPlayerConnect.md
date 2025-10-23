---
title: OnPlayerConnect
sidebar_label: OnPlayerConnect
description: 当玩家连接到服务器时触发该回调
tags: ["玩家"]
---

## 描述

当玩家成功连接到服务器时触发该回调。

| 参数     | 说明         |
| -------- | ------------ |
| playerid | 连接的玩家ID |

## 返回值

0 - 阻止其他滤镜脚本接收此回调  
1 - 允许传递给后续滤镜脚本

该回调在滤镜脚本中总是优先触发。

## 示例

```c
public OnPlayerConnect(playerid)
{
    new
        string[64],
        playerName[MAX_PLAYER_NAME];

    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);
    format(string, sizeof string, "%s 加入了服务器，欢迎！", playerName);
    SendClientMessageToAll(0xFFFFFFAA, string);
    return 1;
}
```

## 注意

<TipNPCCallbacksZH_CN />

## 相关回调

以下回调可能与当前回调存在关联：

- [OnPlayerDisconnect](OnPlayerDisconnect)：当玩家离开服务器时触发
- [OnIncomingConnection](OnIncomingConnection)：当玩家尝试连接服务器时触发
- [OnPlayerFinishedDownloading](OnPlayerFinishedDownloading)：当玩家完成自定义模型下载时触发
