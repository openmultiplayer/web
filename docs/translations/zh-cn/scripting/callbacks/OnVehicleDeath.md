---
title: OnVehicleDeath
description: 如果载具被摧毁，不管是爆炸还是沉入水中，都会调用这个回调函数。
tags: ["vehicle"]
---

## 描述

如果载具被摧毁，不管是爆炸还是沉入水中，都会调用这个回调函数。

| 参数名    | 描述                                                                                  |
| --------- | ------------------------------------------------------------------------------------- |
| vehicleid | 被毁载具的 ID。                                                                       |
| killerid  | 报告(同步)车辆破坏的玩家的 ID(名称误导)。通常是司机或乘客(如果有的话)或最接近的玩家。 |

## 返回值

它在过滤脚本中总是先被调用。

## 案例

```c
public OnVehicleDeath(vehicleid, killerid)
{
    new string[64];
    format(string, sizeof(string), "载具 %i 被摧毁。报告的玩家 %i.", vehicleid, killerid);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## 要点

:::tip

当载具进入水中时，这个回调也会被调用，但载具可以通过传送或驾驶(如果只是部分淹没)免于破坏。

回调将不会被第二次调用，并且载具可能在司机离开时或较短时间后消失。

:::

## 相关函数

- [SetVehicleHealth](../functions/SetVehicleHealth): 设置载具的健康度。
