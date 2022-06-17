---
title: OnVehicleStreamOut
description: This callback is called when a vehicle is streamed out for a player's client (it's so far away that they can't see it).
tags: ["vehicle"]
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

## 描述

This callback is called when a vehicle is streamed out for a player's client (it's so far away that they can't see it).

| 参数名      | 描述                                                         |
| ----------- | ------------------------------------------------------------ |
| vehicleid   | The ID of the vehicle that streamed out.                     |
| forplayerid | The ID of the player who is no longer streaming the vehicle. |

## 返回值

它在过滤脚本中总是先被调用。

## 案例

```c
public OnVehicleStreamOut(vehicleid, forplayerid)
{
    new string[48];
    format(string, sizeof(string), "Your client is no longer streaming vehicle %d", vehicleid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## 要点

<TipNPCCallbacks />
