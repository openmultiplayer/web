---
title: OnPlayerDisconnect
sidebar_label: OnPlayerDisconnect
description: 当玩家与服务器断开连接时触发此回调
tags: ["玩家"]
---

## 描述

当玩家与服务器断开连接时触发此回调。

| 参数     | 说明               |
| -------- | ------------------ |
| playerid | 断开连接的玩家ID   |
| reason   | 断开原因（见下表） |

## 返回值

0 - 阻止其他滤镜脚本接收此回调  
1 - 允许传递给后续滤镜脚本

此回调在滤镜脚本中总是优先触发。

## 断开原因

| ID  | 原因类型  | 详细说明                            |
| --- | --------- | ----------------------------------- |
| 0   | 超时/崩溃 | 玩家连接丢失（游戏崩溃或网络故障）  |
| 1   | 主动退出  | 玩家通过/quit命令或暂停菜单主动退出 |
| 2   | 踢出/封禁 | 被服务器踢出或封禁                  |

## 示例

```c
public OnPlayerDisconnect(playerid, reason)
{
    new
        szString[64],
        playerName[MAX_PLAYER_NAME];

    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);

    new szDisconnectReason[3][] =
    {
        "超时/崩溃",
        "主动退出",
        "踢出/封禁"
    };

    format(szString, sizeof szString, "%s 离开了服务器（原因：%s）。", playerName, szDisconnectReason[reason]);

    SendClientMessageToAll(0xC4C4C4FF, szString);
    return 1;
}
```

## 注意

:::tip

由于玩家已断开连接，部分函数可能无法正常工作：

- [GetPlayerIp](../functions/GetPlayerIp) 获取IP
- [GetPlayerPos](../functions/GetPlayerPos) 获取坐标  
  该问题已在open.mp服务端修复

:::

## 相关回调

以下回调可能与当前回调存在关联：

- [OnPlayerConnect](OnPlayerConnect)：当玩家连接服务器时触发
- [OnIncomingConnection](OnIncomingConnection)：当玩家尝试连接时触发
- [OnPlayerFinishedDownloading](OnPlayerFinishedDownloading)：当玩家完成模型下载时触发
