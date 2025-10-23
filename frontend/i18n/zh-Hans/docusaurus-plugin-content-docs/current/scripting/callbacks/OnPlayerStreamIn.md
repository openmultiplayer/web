---
title: OnPlayerStreamIn
sidebar_label: OnPlayerStreamIn
description: 当某个玩家的客户端流加载其他玩家时触发该回调函数。
tags: ["玩家"]
---

## 描述

当某个玩家的客户端流加载其他玩家时触发该回调函数。

| 参数名      | 说明               |
| ----------- | ------------------ |
| playerid    | 被流加载的玩家ID   |
| forplayerid | 发起流加载的玩家ID |

## 返回值

该回调始终在滤镜脚本中优先触发。

## 示例

```c
public OnPlayerStreamIn(playerid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "玩家 %d 现在已被流加载到您的客户端。", playerid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## 注意事项

<TipNPCCallbacksZH_CN />

## 相关回调

以下回调可能与该回调存在关联：

- [OnPlayerStreamOut](OnPlayerStreamOut): 当玩家被其他客户端流卸载时触发
- [OnActorStreamIn](OnPlayerStreamOut): 当角色被玩家客户端流加载时触发
- [OnVehicleStreamIn](OnVehicleStreamIn): 当车辆被玩家客户端流加载时触发
