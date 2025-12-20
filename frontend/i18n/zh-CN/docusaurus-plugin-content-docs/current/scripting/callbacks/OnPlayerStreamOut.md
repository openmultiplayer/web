---
title: OnPlayerStreamOut
sidebar_label: OnPlayerStreamOut
description: 当某个玩家的客户端流卸载其他玩家时触发此回调函数。
tags: ["玩家"]
---

## 描述

当某个玩家的客户端流卸载其他玩家时触发此回调函数。

| 参数        | 说明               |
| ----------- | ------------------ |
| playerid    | 被流卸载的玩家ID   |
| forplayerid | 发起流卸载的玩家ID |

## 返回值

此回调始终在滤镜脚本中优先触发。

## 示例

```c
public OnPlayerStreamOut(playerid, forplayerid)
{
    new string[80];
    format(string, sizeof(string), "你的计算机刚刚卸载了玩家ID %d", playerid);
    SendClientMessage(forplayerid, 0xFF0000FF, string);
    return 1;
}
```

## 注意事项

<TipNPCCallbacksZH_CN />

:::warning

当玩家断开连接时，OnPlayerStreamOut不会为双方玩家触发

:::

## 相关回调

以下回调可能与此回调存在关联：

- [OnPlayerStreamIn](OnPlayerStreamIn): 当玩家被其他客户端流加载时触发
- [OnActorStreamIn](OnPlayerStreamOut): 当角色被玩家客户端流加载时触发
- [OnVehicleStreamIn](OnPlayerStreamOut): 当车辆被玩家客户端流加载时触发
