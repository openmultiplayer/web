---
title: OnVehicleStreamOut
description: 当一辆车为玩家的客户端流出时，这个回调被调用(离太远了，以至于玩家看不到它)。
tags: ["vehicle"]
---

## 描述

当一辆车为玩家的客户端流出时，这个回调被调用(离太远了，以至于玩家看不到它)。

| 参数名      | 描述                      |
| ----------- | ------------------------- |
| vehicleid   | 为玩家流出的车辆 ID。     |
| forplayerid | 不再流入该车辆的玩家 ID。 |

## 返回值

它在过滤脚本中总是先被调用。

## 案例

```c
public OnVehicleStreamOut(vehicleid, forplayerid)
{
    new string[48];
    format(string, sizeof(string), "你的客户端不再流入车辆 %d", vehicleid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## 要点

<TipNPCCallbacksCN />
