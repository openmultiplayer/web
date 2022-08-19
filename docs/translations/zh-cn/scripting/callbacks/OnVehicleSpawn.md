---
title: OnVehicleSpawn
description: 这个回调函数在载具重生时被调用。
tags: ["vehicle"]
---

:::warning

这个回调函数**仅**在载具**重生**时被调用。 CreateVehicle 和 AddStaticVehicle(Ex) 函数 **不会** 触发此回调。

:::

## 描述

这个回调函数在载具重生时被调用。

| 参数名    | 描述              |
| --------- | ----------------- |
| vehicleid | 生成的载具的 ID。 |

## 返回值

0 - 将阻止其他过滤脚本接收到这个回调。

1 - 表示这个回调函数将被传递给下一个过滤脚本。

它在过滤脚本中总是先被调用。

## 案例

```c
public OnVehicleSpawn(vehicleid)
{
    printf("载具 %i 生成!",vehicleid);
    return 1;
}
```

## 相关函数

- [SetVehicleToRespawn](../functions/SetVehicleToRespawn): 重生载具。
- [CreateVehicle](../functions/CreateVehicle): 创建载具。
