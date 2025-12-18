---
title: OnScriptUnloadPlayer
sidebar_label: OnScriptUnloadPlayer
description: 当脚本卸载时，会为每个已连接的玩家调用此回调函数。
tags: ["玩家"]
---

<VersionWarnZH_CN name='回调' version='omp v1.3.1.2748' />

## 描述

当脚本卸载时，会为每个已连接的玩家调用此回调函数。

| 参数               | 说明                                             |
| ------------------ | ------------------------------------------------ |
| playerid           | 脚本卸载对应的玩家ID                             |
| bool:isEntryScript | 标识是否为入口脚本（主脚本）或侧脚本（滤镜脚本） |

## 返回值

此回调函数不处理返回值。

## 示例

```c
public OnScriptUnloadPlayer(playerid, bool:isEntryScript)
{
    printf("为玩家ID %d 卸载脚本（主脚本：%s）", playerid, isEntryScript ? "是" : "否");
}
```

## 注意事项

:::tip

此回调在**运行时卸载**侧脚本（滤镜脚本）时触发

:::

## 相关回调

以下回调可能与此回调存在关联：

- [OnScriptLoadPlayer](OnScriptLoadPlayer): 当脚本加载时为每个玩家触发
- [OnPlayerConnect](OnPlayerConnect): 当玩家连接服务器时触发
- [OnPlayerDisconnect](OnPlayerDisconnect): 当玩家断开连接时触发
