---
title: ChangeVehicleColor
sidebar_label: ChangeVehicleColor
description: 修改车辆的主色和副色
tags: ["车辆"]
---

## 描述

修改指定车辆的主色和副色

| 参数名    | 说明          |
| --------- | ------------- |
| vehicleid | 目标车辆 ID   |
| color1    | 新的主颜色 ID |
| color2    | 新的副颜色 ID |

## 返回值

1 - 函数执行成功，颜色已修改

0 - 函数执行失败（车辆不存在）

## 示例代码

```c
public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)
{
    // 将主色改为黑色(0)，副色改为白色(1)
    ChangeVehicleColor(vehicleid, 0, 1);
    return 1;
}
```

## 颜色表

```c
new VehicleColoursTableRGBA[256] = {
// 原始圣安地列斯颜色
0x000000FF, 0xF5F5F5FF, 0x2A77A1FF, 0x840410FF, 0x263739FF, 0x86446EFF, 0xD78E10FF, 0x4C75B7FF, 0xBDBEC6FF, 0x5E7072FF,
// ...（此处保留原始颜色数据不变）
0x561A28FF, 0x4E0E27FF, 0x706C67FF, 0x3B3E42FF, 0x2E2D33FF, 0x7B7E7DFF, 0x4A4442FF, 0x28344EFF
};
```

## 注意事项

:::tip

部分车辆仅支持修改主色，少数特殊车辆（如水泥车、快艇）支持四色但 SA-MP 只能修改其中两种

:::

## 相关函数

- [GetVehicleColours](GetVehicleColours): 获取车辆颜色配置
- [ChangeVehiclePaintjob](ChangeVehiclePaintjob): 修改车辆涂装样式

## 相关回调

- [OnVehicleRespray](../callbacks/OnVehicleRespray): 当车辆重新涂装时触发

## 扩展资源

- [车辆颜色 ID 对照表](../resources/vehiclecolorid)
- [原版车辆颜色配置](../resources/original-car-colors)
