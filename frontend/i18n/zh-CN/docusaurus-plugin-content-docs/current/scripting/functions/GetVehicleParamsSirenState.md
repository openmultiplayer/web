---
title: GetVehicleParamsSirenState
sidebar_label: GetVehicleParamsSirenState
description: 获取车辆警笛的开关状态。
tags: ["车辆"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7' />

## 描述

获取车辆警笛的当前开关状态。

| 参数名    | 说明                         |
| --------- | ---------------------------- |
| vehicleid | 要检测警笛状态的车辆 ID 编号 |

## 返回值

**-1:** 车辆警笛尚未被设置（默认关闭状态）

**0:** 警笛处于关闭状态

**1:** 警笛处于开启状态

## 示例

```c
new
    siren = GetVehicleParamsSirenState(vehicleid);

if (siren == 1)
{
    // 警笛开启，执行相关操作
}
else if (siren == 0)
{
    // 警笛关闭，执行相关操作
}
else
{
    // 该车辆未配置警笛系统
}
```

## 注意事项

:::warning

由于返回值-1 和 0 均表示"关闭"，不能直接使用布尔条件判断。若使用类似 if(sirenstate) 的判断语句，当值为-1 或 1 时都会返回 true。正确的做法是明确检查返回值是否等于 1。

:::

## 相关函数

- [SetVehicleParamsSirenState](SetVehicleParamsSirenState): 控制车辆警笛的开关状态
