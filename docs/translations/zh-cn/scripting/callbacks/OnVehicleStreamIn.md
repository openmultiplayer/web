---
title: OnVehicleStreamIn
description: 当车辆流入玩家的客户端时调用。
tags: ["vehicle"]
---

## 描述

当车辆流入玩家的客户端时调用。

| 参数名      | 描述                           |
| ----------- | ------------------------------ |
| vehicleid   | 为玩家流入的车辆 ID。          |
| forplayerid | 这辆车是为哪个玩家 ID 流入的。 |

## 返回值

它在过滤脚本中总是先被调用。

## 案例

```c
public OnVehicleStreamIn(vehicleid, forplayerid)
{
    new string[32];
    format(string, sizeof(string), "你现在可以看到车辆 %d.", vehicleid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## 要点

<TipNPCCallbacksCN />
