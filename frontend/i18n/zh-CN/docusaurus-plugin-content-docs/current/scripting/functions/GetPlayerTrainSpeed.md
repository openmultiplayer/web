---
title: GetPlayerTrainSpeed
sidebar_label: GetPlayerTrainSpeed
description: 获取玩家火车的行驶速度
tags: ["玩家", "车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取玩家当前驾驶的火车的行驶速度

## 参数说明

| 参数     | 说明      |
| -------- | --------- |
| playerid | 玩家的 ID |

## 示例代码

```c
new Float:speed = GetPlayerTrainSpeed(playerid);
SendClientMessage(playerid, 0xFFFF00FF, "你的火车当前速度：%f", speed);
```

## 相关函数

- [GetVehicleTrainSpeed](GetVehicleTrainSpeed): 获取火车的行驶速度
