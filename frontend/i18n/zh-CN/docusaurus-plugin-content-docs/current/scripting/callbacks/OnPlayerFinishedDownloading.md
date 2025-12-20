---
title: OnPlayerFinishedDownloading
sidebar_label: OnPlayerFinishedDownloading
description: 当玩家完成自定义模型下载时触发此回调函数。
tags: ["玩家"]
---

<VersionWarnZH_CN name='回调' version='SA-MP 0.3.DL R1' />

## 描述

当玩家完成自定义模型下载时触发此回调函数。关于如何添加自定义模型的详细信息，请参考[发布帖](https://sampforum.blast.hk/showthread.php?tid=644105)和[教程](https://sampforum.blast.hk/showthread.php?tid=644123)。

| 参数         | 说明                         |
| ------------ | ---------------------------- |
| playerid     | 完成自定义模型下载的玩家ID   |
| virtualworld | 玩家完成下载的所属虚拟世界ID |

## 返回值

此回调函数不处理返回值

## 示例

```c
public OnPlayerFinishedDownloading(playerid, virtualworld)
{
    SendClientMessage(playerid, 0xFFFFFFFF, "下载完成。");
    return 1;
}
```

## 注意事项

:::tip

每次玩家切换虚拟世界时都会触发此回调，即使该世界中没有自定义模型。

:::

## 相关回调

以下回调函数可能与此回调相关：

- [OnPlayerConnect](OnPlayerConnect): 当玩家连接服务器时触发
- [OnPlayerDisconnect](OnPlayerDisconnect): 当玩家断开连接时触发
- [OnIncomingConnection](OnIncomingConnection): 当玩家尝试连接服务器时触发
