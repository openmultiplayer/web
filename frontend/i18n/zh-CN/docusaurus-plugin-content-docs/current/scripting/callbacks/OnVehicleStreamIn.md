---
title: OnVehicleStreamIn
sidebar_label: OnVehicleStreamIn
description: 当车辆被流加载到玩家客户端时触发此回调函数。
tags: ["车辆"]
---

## 描述

当车辆被流加载到玩家客户端时触发此回调函数。

| 参数        | 说明               |
| ----------- | ------------------ |
| vehicleid   | 被流加载的车辆ID   |
| forplayerid | 发起流加载的玩家ID |

## 返回值

此回调始终在滤镜脚本中优先触发。

## 示例

```c
public OnVehicleStreamIn(vehicleid, forplayerid)
{
    new string[32];
    format(string, sizeof(string), "你现在可以看到车辆 %d。", vehicleid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## 注意事项

<TipNPCCallbacksZH_CN />

## 相关回调

- [OnVehicleStreamOut](OnVehicleStreamOut): 当车辆从玩家客户端流卸载时触发
- [OnPlayerStreamIn](OnPlayerStreamIn): 当玩家被其他客户端流加载时触发
- [OnPlayerStreamOut](OnPlayerStreamOut): 当玩家被其他客户端流卸载时触发
