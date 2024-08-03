---
title: OnPlayerFinishedDownloading
description: 当玩家下载完自定义模型时，这个回调函数被调用。
tags: ["player"]
---

<VersionWarnCN name='回调' version='SA-MP 0.3.DL R1' />

## 描述

当玩家下载完自定义模型时，这个回调函数被调用。有关如何向服务器添加自定义模型的更多信息，请参见发布线程和本教程。

| 参数名       | 描述                                      |
| ------------ | ----------------------------------------- |
| playerid     | 完成了自定义模型下载的玩家的 ID。         |
| virtualworld | 玩家完成了自定义模型下载的虚拟世界的 ID。 |

## 返回值

这个回调函数不处理返回值。

## 案例

```c
public OnPlayerFinishedDownloading(playerid, virtualworld)
{
    SendClientMessage(playerid, 0xffffffff, "下载完成。");
    return 1;
}
```

## 要点

:::tip

玩家每次改变虚拟世界的时候都会调用这个回调，即使在没有自定义模型的虚拟世界里也是如此。

:::

## 相关回调
