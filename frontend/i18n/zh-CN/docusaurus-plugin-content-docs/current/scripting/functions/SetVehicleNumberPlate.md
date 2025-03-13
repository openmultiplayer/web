---
title: SetVehicleNumberPlate
sidebar_label: SetVehicleNumberPlate
description: 设置车辆车牌。
tags: ["车辆"]
---

## 描述

设置车辆的车牌。

| 名称                | 说明                 |
| ------------------- | -------------------- |
| vehicleid           | 要设置车牌的车辆 ID  |
| const numberPlate[] | 要在车牌上显示的文本 |

## 返回值

**true** - 函数执行成功。

**false** - 函数执行失败。车辆不存在。

## 示例

```c
new
	vehicleid = CreateVehicle(542, 2074.73, 1089.89, 10.51, 0.0, -1, -1, -1); // 创建Comet跑车
SetVehicleNumberPlate(vehicleid, "ABCD 123"); // 设置车牌号为ABCD 123
```

## 注意

:::tip

- 本函数不会进行内置错误校验
- 请勿为无车牌车辆（船只、飞机等）设置自定义车牌，这会导致不必要的客户端处理
- 需重新生成或重新流加载车辆才能使更改生效
- 车牌文本最大支持 32 字符（含颜色代码）
- 可视区域仅显示约 9-10 个字符，超长文本会自动换行
- 部分车辆模型（如 Boxville 498）使用倒置车牌，可用 Boxburg 609 替代

:::

:::tip

车牌文本支持颜色代码嵌入

:::

## 相关函数

- [GetVehicleNumberPlate](GetVehicleNumberPlate): 获取车辆车牌
- [SetVehicleToRespawn](SetVehicleToRespawn): 重置车辆状态
- [ChangeVehicleColor](ChangeVehicleColor): 修改车辆颜色
- [ChangeVehiclePaintjob](ChangeVehiclePaintjob): 更换车辆涂装
