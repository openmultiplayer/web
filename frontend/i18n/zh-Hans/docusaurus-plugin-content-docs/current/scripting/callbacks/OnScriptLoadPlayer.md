---
title: OnScriptLoadPlayer
sidebar_label: OnScriptLoadPlayer
description: 当脚本加载时，会为每个已连接的玩家调用该回调函数。
tags: ["玩家"]
---

<VersionWarnZH_CN name='回调' version='omp v1.3.1.2748' />

## 描述

当脚本加载时，会为每个已连接的玩家调用该回调函数。

| 参数名             | 说明                                             |
| ------------------ | ------------------------------------------------ |
| playerid           | 脚本加载对应的玩家ID                             |
| bool:isEntryScript | 标识是否为入口脚本（主脚本）或侧脚本（滤镜脚本） |

## 返回值

本回调函数不处理返回值。

## 示例

```c
public OnScriptLoadPlayer(playerid, bool:isEntryScript)
{
    printf("为玩家ID %d 加载脚本（主脚本：%s）", playerid, isEntryScript ? "是" : "否");
}
```

## 注意事项

:::tip

本回调在**运行时加载**侧脚本（滤镜脚本）时触发

:::

## 相关回调

以下回调可能与该回调存在关联：

- [OnScriptUnloadPlayer](OnScriptUnloadPlayer): 当脚本卸载时为每个玩家触发
- [OnPlayerConnect](OnPlayerConnect): 当玩家连接服务器时触发
- [OnPlayerDisconnect](OnPlayerDisconnect): 当玩家断开连接时触发
