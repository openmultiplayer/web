---
title: GetVehicleParamsEx
sidebar_label: GetVehicleParamsEx
description: 获取车辆的扩展参数。
tags: ["车辆"]
---

## 描述

获取车辆的扩展参数集。

| 参数            | 说明                                                                 |
| --------------- | -------------------------------------------------------------------- |
| vehicleid       | 目标车辆 ID                                                          |
| &bool:engine    | 存储引擎状态的布尔变量（按引用传递），1 表示引擎处于运行状态         |
| &bool:lights    | 存储车灯状态的布尔变量（按引用传递），1 表示车灯开启                 |
| &bool:alarm     | 存储警报器状态的布尔变量（按引用传递），1 表示警报正在（或曾）鸣响   |
| &bool:doors     | 存储车门锁状态的布尔变量（按引用传递），1 表示车门已上锁             |
| &bool:bonnet    | 存储引擎盖状态的布尔变量（按引用传递），1 表示引擎盖开启             |
| &bool:boot      | 存储后备箱状态的布尔变量（按引用传递），1 表示后备箱开启             |
| &bool:objective | 存储任务目标状态的布尔变量（按引用传递），1 表示任务目标处于激活状态 |

## 返回值

**true** - 操作成功

**false** - 操作失败（无效的车辆 ID）

车辆参数实际存储于通过引用传递的变量中，而非通过返回值获取。

## 示例

```c
new
	bool:engine, bool:lights, bool:alarm, bool:doors, bool:bonnet, bool:boot, bool:objective;
GetVehicleParamsEx(vehicleid, engine, lights, alarm, doors, bonnet, boot, objective);
// 该操作将使上述所有变量更新为对应部件的状态值
```

## 注意事项

:::tip

若参数未被预先设置（即未使用 SetVehicleParamsEx 进行设置），返回值将为-1（'未设置'状态）

:::

## 相关函数

- [SetVehicleParamsEx](SetVehicleParamsEx): 为所有玩家设置车辆的扩展参数
