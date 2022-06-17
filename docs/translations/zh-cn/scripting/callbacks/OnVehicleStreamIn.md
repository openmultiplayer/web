---
title: OnVehicleStreamIn
description: Called when a vehicle is streamed to a player's client.
tags: ["vehicle"]
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

## 描述

Called when a vehicle is streamed to a player's client.

| 参数名      | 描述                                                   |
| ----------- | ------------------------------------------------------ |
| vehicleid   | The ID of the vehicle that streamed in for the player. |
| forplayerid | The ID of the player who the vehicle streamed in for.  |

## 返回值

它在过滤脚本中总是先被调用。

## 案例

```c
public OnVehicleStreamIn(vehicleid, forplayerid)
{
    new string[32];
    format(string, sizeof(string), "You can now see vehicle %d.", vehicleid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## 要点

<TipNPCCallbacks />
