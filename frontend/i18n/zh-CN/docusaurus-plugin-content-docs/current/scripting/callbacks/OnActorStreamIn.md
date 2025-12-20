---
title: OnActorStreamIn
sidebar_label: OnActorStreamIn
description: 当角色被玩家客户端流加载时触发此回调。
tags: ["角色"]
---

<VersionWarnZH_CN name='回调' version='SA-MP 0.3.7' />

## 描述

当角色被玩家客户端流加载时触发此回调。

| 参数        | 说明                   |
| ----------- | ---------------------- |
| actorid     | 已为玩家流加载的角色ID |
| forplayerid | 触发流加载操作的玩家ID |

## 返回值

在滤镜脚本中总是优先被调用。

## 示例

```c
public OnActorStreamIn(actorid, forplayerid)
{
    new string[48];
    format(string, sizeof(string), "角色 %d 已为你完成流加载。", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## 注意

<TipNPCCallbacksZH_CN />

## 相关回调

以下回调可能与当前回调存在关联：

- [OnActorStreamOut](OnActorStreamOut): 当角色被玩家客户端流卸载时触发
