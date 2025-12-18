---
title: ChangeVehiclePaintjob
sidebar_label: ChangeVehiclePaintjob
description: 修改车辆的涂装样式
tags: ["车辆"]
---

## 描述

修改车辆的涂装样式（纯色修改请参考[ChangeVehicleColor](ChangeVehicleColor)）

| 参数      | 说明                                                                     |
| --------- | ------------------------------------------------------------------------ |
| vehicleid | 目标车辆 ID                                                              |
| paintjob  | 要应用的[涂装样式 ID](../resources/paintjobs)。使用 3 可移除当前涂装样式 |

## 返回值

此函数始终返回 **true**（执行成功），即使指定车辆不存在

## 示例代码

```c
new rand = random(3); // 随机生成0、1或2（均为有效值）
new vehicleid = GetPlayerVehicleID(playerid);

ChangeVehicleColor(vehicleid, 1, 1); // 确保车辆为白色以获得更好效果
ChangeVehiclePaintjob(vehicleid, rand); // 将玩家当前车辆的涂装样式改为随机样式
```

## 注意事项

:::warning

若车辆颜色为黑色，涂装样式可能无法显示。建议应用涂装前先将车辆改为白色：

```c
ChangeVehicleColor(vehicleid, 1, 1);
```

:::

## 相关函数

- [GetVehiclePaintjob](GetVehiclePaintjob): 获取车辆当前涂装样式 ID
- [ChangeVehicleColor](ChangeVehicleColor): 设置车辆颜色

## 相关回调

- [OnVehiclePaintjob](../callbacks/OnVehiclePaintjob): 当车辆涂装样式改变时触发

## 扩展资源

- [车辆涂装样式 ID 对照表](../resources/paintjobs)
